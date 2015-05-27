'use strict';

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'MessagingInline',

    /**
     * Renders the component.
     */
    render: function() {
        return (
            <div className="messenger-inline">
                Content goes here, but look at <strong>this important phrase</strong>.
            </div>
        );
    }
});
