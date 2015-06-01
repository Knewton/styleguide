'use strict';

/**
 * Tooltip component.
 * Sets up a bootstrap tooltip that shows up when the user mouses over this element.
 *
 * Options:
 *     title: the content of the tooltip can either be a String or a React element.
 *     container: the container in which the tooltip should be injected (optionnal).
 *     placement: the placement of the tooltip (top, bottom, left, right).
 */
module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'Tooltip',

    /**
     * Component was mounted.
     */
    componentDidMount: function() {
        // call bootstrap's tooltip component
        $(React.findDOMNode(this)).tooltip({
            html: true,
            title: this.renderContent,
            placement: this.props.placement || 'top',
            container: this.props.container
        });
    },

    /**
     * Renders the content of the tooltip.
     */
    renderContent: function() {
        var content = this.props.content;
        if (_.isString(content)) {
            // content is already a string
            return content;

        } else {
            // content is generated by a function
            var data = content();
            if (_.isString(content)) {
                // generated content is a string
                return data;
            } else {
                // generated content is a React component
                return React.renderToString(data);
            }
        }
    },

    /**
     * Renders this component.
     * Does not do anything beside wrapping the children.
     */
    render: function() {
        return <span className={this.props.className}>{this.props.children}</span>;
    }
});
