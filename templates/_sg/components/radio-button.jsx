'use strict';

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'RadioButton',

    /**
     * Renders the component.
     */
    render: function() {
        return (
            <input type="radio" id={this.props.idp} checked />Hello, I'm a radio button
        );
    }
});
