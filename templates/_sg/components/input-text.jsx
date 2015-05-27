'use strict';

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'InputText',

    /**
     * Renders the component.
     */
    render: function() {
        return <input type="text" disabled={this.props.disabled} name="field-name"
            placeholder="Field value" className={this.props.className} />;
    }
});
