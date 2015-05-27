'use strict';

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'Tabs',

    /**
     * Renders the component.
     */
    render: function() {
        return (
            <div className="tabs">
                <li><a href="">Tab</a></li>
                <li className="active"><a href="">Tab</a></li>
                <li><a href="">Tab</a></li>
            </div>
        );
    }
});
