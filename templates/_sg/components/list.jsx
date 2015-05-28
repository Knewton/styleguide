'use strict';

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'List',

    /**
     * Renders the component.
     */
    render: function() {
        return (
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
            </ul>
        );
    }
});
