'use strict';

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'Snippet',

    /**
     * Called when the component is mounted to the DOM.
     */
    componentDidMount: function() {
        // highlight block
        hljs.highlightBlock(React.findDOMNode(this));
    },

    /**
     * Renders the component.
     */
    render: function() {
        var props = this.props,
            content = '';

        if (props.text) {
            content = props.text;

        } else if (props.src) {
            content = React.renderToStaticMarkup(React.createElement(props.src, props));

        } else {
            var html = [];
            if (props.children.length > 0) {
                for (var i=0; i<props.children.length; i++) {
                    html.push(React.renderToStaticMarkup(props.children[i]));
                }
            } else {
                html.push(React.renderToStaticMarkup(props.children));
            }
            content = html.join('');
        }

        if (this.props.type === 'javascript') {
            content = js_beautify(content, {
                wrap_line_length: 60,
                unformatted: []
            });
        } else {
            content = html_beautify(content, {
                wrap_line_length: 60,
                unformatted: []
            });
        }

        return <div className="snippet">{content}</div>;
    }
});
