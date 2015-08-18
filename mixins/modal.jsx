'use strict';

/**
 * Modal mixin.
 * This mixin makes a component a modal. The component should implement the method
 * renderContent(). This method should return the content of the modal.
 */
module.exports = {
    /**
     * Show the component in a modal.
     */
    show: function() {
        this.hideValue = null;
        document.body.appendChild(this.root);
        $(this.getDOMNode()).modal('show');
    },

    /**
     * Hides the modal.
     */
    hide: function() {
        $(this.getDOMNode()).modal('hide');
    },

    /**
     * Called when the modal is shown
     */
    onShown: function(event) {
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
            options = this.modalOptions || {};
        if (options.className) {
            ret.push(options.className);
        }
        return ret.join(' ');
    },

    /**
     * Returns the modal's content.
     * Classes using this mixin should implement renderContent().
     */
    render: function() {
        return <div className={this.rootClassName()}>
            <div className={this.dialogClassName()}>
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
                element = React.createElement(this, props),
                component = React.render(element, root);

            // initialize the component
            $(component.getDOMNode()).modal()
                .on('shown.bs.modal', component.onShown)
                .on('hide.bs.modal', component.onHide)
                .on('hidden.bs.modal', component.onHidden);

            // save root element
            component.root = root;

            // update properties
            component.setProps(props || {});
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
