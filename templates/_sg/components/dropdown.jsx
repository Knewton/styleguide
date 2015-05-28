'use strict';

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'DropDown',

    /**
     * Renders the component.
     */
    render: function() {
        return (
            <select className="dropdown">
                <option value="" className="label">Setting</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                <option value="4">Option 4</option>
                <option value="5">Option 5</option>
            </select>
        );
    }
});
