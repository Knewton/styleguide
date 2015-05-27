'use strict';

/**
 *  parameters:
 *      hex: hex code
 *      name: name of the colors
 */
module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'Color',

    /**
     * Renders the component.
     */
    render: function() {
        return (
            <div className="color">
                <div className={'color-sample' + (this.props.light ? ' light' : '')}
                        style={{backgroundColor: this.props.hex}}>
                    {this.props.hex}
                </div>
                <div className="color-name">{this.props.name}</div>
            </div>
        );
    }
});
