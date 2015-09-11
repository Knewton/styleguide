'use strict';

/**
 * Side panel element
 */
module.exports = React.createClass({
    /**
     * Returns the initial value.
     */
    getInitialState: function() {
        return {
            visible: false
        };
    },

    /**
     * Called when the component is mounted to the DOM.
     */
    componentDidMount: function() {
        $('html').on('click', this.onClickDocument);
    },

    /**
     * Called when the component is removed from the dom.
     */
    componentWillUnmount: function() {
        $('html').off('click', this.onClickDocument);
    },

    /**
     * Called when the user clicks anywhere on the page.
     */
    onClickDocument: function(e) {
        var $target = $(e.target);
        if (!$target.closest('.side-panel').length) {
            // Hide the panel
            this.setState({ visible: false });
        }
    },

    /**
     * Show the component in a modal.
     */
    show: function(component) {
        // give a reference to the panel to the component
        component = React.cloneElement(component, {
            panel: this
        });

        // update panel's content
        this.setState({
            content: component,
            visible: true
        });

        // make sure we are not going to hide the content
        clearTimeout(this.removeContentTimeout);
    },

    /**
     * Hides the modal.
     */
    hide: function() {
        this.setState({
            visible: false
        });

        // when the transition ends, remove content from panel
        this.removeContentTimeout = setTimeout(function() {
            this.setState({
                content: null
            });
        }.bind(this), 1000);
    },

    /**
     * Creates the className for the side panel root element.
     */
    rootClassName: function() {
        var ret = ['side-panel'],
            content = this.state.content,
            options = content ? content.type.sidePanelOptions || {} : {};
        if (options.className) {
            ret.push(options.className);
        }
        if (this.state.visible) {
            ret.push('visible');
        }
        return ret.join(' ');
    },

    /**
     * Renders the content.
     */
    render: function() {
        return (
            <div className={this.rootClassName()}>
                <div className="panel-close" onClick={this.hide}>X</div>
                <div className="panel-content">
                    {this.state.content}
                </div>
            </div>
        );
    },

    /**
     * Static methods and properties.
     */
    statics: {
        /**
         * Returns the side panel singleton instance.
         * Creates it if needed.
         */
        instance: function() {
            if (!window.sidePanel) {
                // create side panel element singleton
                var root = document.createElement('div'),
                    element = React.createElement(this),
                    component = React.render(element, root);

                // save root element
                component.root = root;
                window.sidePanel = component;

                // add element in DOM
                document.body.appendChild(root);

                // force reflow so that css transitions are working
                // jshint -W030
                root.offsetWidth;
            }
            return window.sidePanel;
        },

        /**
         * Creates a shows the side panel.
         */
        show: function(component) {
            // create only one instance of the component.
            var instance = this.instance();
            instance.show(component);
            return instance;
        }
    }
});
