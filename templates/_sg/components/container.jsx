'use strict';

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'Container',

    /**
     * Returns the className for the root element.
     */
    rootClassName: function() {
        var ret = ['container-wrapper'];
        if (this.props.color) {
            ret.push(this.props.color);
        }
        return ret.join(' ');
    },

    /**
     * Renders the component.
     */
    render: function() {
        return (
            <div className={this.rootClassName()}>
                <div className="container-header">
                    Title
                </div>
                <div className="container-content">
                    Content goes here.
                </div>
            </div>
        );
    }
});
