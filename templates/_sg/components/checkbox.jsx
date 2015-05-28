'use strict';

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'Checkbox',

    /**
     * Returns the className for the root element.
     */
    rootClassName: function() {
        var ret = ['checkbox'];
        if (this.props.className) {
            ret.push(this.props.className);
        }
        if (this.props.inline) {
            ret.push('inline');
        }
        return ret.join(' ');
    },

    /**
     * Renders the component.
     */
    render: function() {
        return (
            <label className={this.rootClassName()}>
                <input type="checkbox" value="value" id={this.props.id || 'id'}
                    name={this.props.name || 'name'} checked={this.props.checked}
                    disabled={this.props.disabled} readOnly={true} />
                <span dangerouslySetInnerHTML={{__html: this.props.label}} />
            </label>
        );
    }
});
