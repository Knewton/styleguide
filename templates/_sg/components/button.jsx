'use strict';

/**
 * parameters:
 *   label: name of the colors
 *   disabled: disables the button
 *   class: class for the button
 */
module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'Button',

    /**
     * Renders the component.
     */
    render: function() {
        return (
            <button type="button" className={this.props.className} disabled={this.props.disabled}>
                {this.props.label}
            </button>
        );
    }
});
