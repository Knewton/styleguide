'use strict';

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'Script',

    /**
     * Called when the component is mounted to the DOM.
     */
    componentDidMount: function() {
        var ele = React.findDOMNode(this);
        eval(ele.textContent);
    },

    /**
     * Renders the component.
     */
    render: function() {
        return <script type="text/javascript"
            dangerouslySetInnerHTML={{__html: this.props.content}} />;
    }
});
