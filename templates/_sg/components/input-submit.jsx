'use strict';

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'InputSubmit',

    /**
     * Renders the component.
     */
    render: function() {
        return <input type="submit" name="name" value={this.props.label}
            disabled={this.props.disabled} className={this.props.className} />;
    }
});
