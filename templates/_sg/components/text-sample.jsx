'use strict';

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'TextSample',

    /**
     * Renders the code.
     */
    renderCode: function() {
        if (this.props.code) {
            return <pre><code lang="css">@include {this.props.className};</code></pre>;
        }
    },

    /**
     * Renders the component.
     */
    render: function() {
        return (
            <section className="text-sample sg-component">
                <div className={this.props.className}>{this.props.title}</div>
                {this.renderCode()}
                <div className="standard-body-font">{this.props.text}</div>
                <div className="standard-body-font">Use cases: {this.props.usage}</div>
            </section>
        );
    }
});
