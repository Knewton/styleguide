'use strict';

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'InputTextDynamic',

    /**
     * Renders the component.
     */
    render: function() {
        return <div className="input-text" contentEditable="true" data-name="field-name"
                data-placeholder="Field value" data-submit="/course/123-456" />;
    }
});
