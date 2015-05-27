'use strict';

var TooltipJavaScript = require('./tooltip.txt'),
    Script = require('../script.jsx');

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'Tooltip',

    /**
     * Renders the component.
     */
    render: function() {
        return (
            <div>
                Hover <b data-toggle="tooltip" data-placement="top" title="Tooltip!">on this text</b>
                or <b id="custom-tooltip">this one</b> to see a tooltip.
                <Script content={TooltipJavaScript} />
            </div>
        );
    }
});
