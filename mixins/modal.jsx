'use strict';

/**
 * Modal mixin.
 * This mixin makes a component a modal. The component should implement the method
 * renderContent(). This method should return the content of the modal.
 *
 * Modal Props:
 *  className
 *  large
 *
 * modalOptions:
 *  modalClass
 *  onModalHide
 *  cannotBeDismissed
 *
 * Priority: props > modalOptions
 * props are set when instantiating, modalOptions are on the component definition
 *
 */
module.exports = {
    /**
     * Show the component in a modal.
     */
    show: function() {
        this.hideValue = null;
        document.body.appendChild(this.root);

        this.triggerElement = window.document.activeElement;

        $(ReactDOM.findDOMNode(this)).modal('show');
    },

    getOptions: function() {
        return _.extend({
            cannotBeDismissed: false
        }, this.modalOptions, this.props);
    },

    /**
     * Hides the modal.
     */
    hide: function() {
        $(ReactDOM.findDOMNode(this)).modal('hide');
    },

    /**
     * Called when the modal is shown
     */
    onShown: function(event) {
        this.refs.modal.focus();

        // call onModalHidden if defined
        if (this.onModalShown) {
            this.onModalShown(event);
        }
    },

    /**
     * Called when the modal is hidden.
     */
    onHidden: function(event) {
        // call onModalHidden if defined
        if (this.onModalHidden) {
            this.onModalHidden(event);
        }

        // call close callback if set
        if (this.props.onHidden) {
            return this.props.onHidden(this.hideValue);
        }

        // remove from the DOM
        this.root.parentNode.removeChild(this.root);
    },

    /**
     * Called when the modal is going to hide.
     */
    onHide: function(event) {
        // Re-focus on the element that triggered the modal
        if (this.triggerElement) {
            this.triggerElement.focus();
        }

        // call onModalHide if defined
        if (this.onModalHide) {
            return this.onModalHide(event);
        }

        // call close callback if set
        if (this.props.onHide) {
            return this.props.onHide(this.hideValue);
        }
    },

    /**
     * Hides the modal and set a value to return to the callback.
     */
    hideAndReturn: function(value) {
        this.hideValue = value;
        this.hide();
    },

    /**
     * Creates the className for the modal dialog element.
     */
    dialogClassName: function() {
        var ret = ['modal-dialog'];
        if (this.props.large) {
            ret.push('modal-lg');
        }
        if (this.props.modalClass) {
            ret.push(this.props.modalClass);
        }
        return ret.join(' ');
    },

    /**
     * Creates the className for the modal root element.
     */
    rootClassName: function() {
        var ret = ['modal', 'fade'],
            options = this.getOptions();
        if (options.className) {
            ret.push(options.className);
        }
        return ret.join(' ');
    },

    componentDidMount: function() {
        var self = this;

        if (!this.getOptions().cannotBeDismissed) {
            $(document).one('keydown.modal', function(e) {
                // Escape dismisses the dialog
                if (e.keyCode === 27) {
                    self.hide();
                }
            });
        }

        $(ReactDOM.findDOMNode(this)).focus();
    },

    componentWillUnmount: function() {
        if (!this.getOptions().cannotBeDismissed) {
            $(document).off('keydown.modal');
        }
    },

    /**
     * Returns the modal's content.
     * Classes using this mixin should implement renderContent().
     */
    render: function() {
        return <div className={this.rootClassName()}>
            <div className={this.dialogClassName()} role="dialog" tabIndex="0" ref="modal">
                {this.renderContent()}
            </div>
        </div>;
    },

    /**
     * Static methods and properties.
     */
    statics: {
        /**
         * Creates the modal window.
         */
        create: function(props) {
            // create modal
            var root = document.createElement('div'),
                element = React.createElement(this, props || {}),
                component = ReactDOM.render(element, root);

            // See http://getbootstrap.com/javascript/#modals-options
            var componentOptions = component.getOptions();
            var bsModalOptions = {
                backdrop: componentOptions.cannotBeDismissed ? 'static' : true
            };

            // initialize the component
            $(ReactDOM.findDOMNode(component)).modal(bsModalOptions)
                .on('shown.bs.modal', component.onShown)
                .on('hide.bs.modal', component.onHide)
                .on('hidden.bs.modal', component.onHidden);

            // save root element
            component.root = root;

            return component;
        },

        /**
         * Creates a shows the modal.
         */
        show: function(props) {
            var instance = this.create(props);
            instance.show();
            return instance;
        }
    }
};
