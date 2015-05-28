'use strict';

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'Knewcon',

    /**
     * Renders the component.
     */
    render: function() {
        return (
            <div className="knewcon-icon">
                <div className={'knewcon-sample knewcon ' + this.props.knewcon}></div>
                <div className="knewcon-name">{this.props.knewcon}</div>
                <div className="knewcon-code">{this.props.code}</div>
            </div>

        );
    }
});
