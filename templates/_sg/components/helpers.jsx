'use strict';

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'Helpers',

    /**
     * Renders the component.
     */
    render: function() {
        return (
            <div className="helpers">
                More info on hover:
                <span className="helper-icon-gray" data-toggle="tooltip" title="Help is here!"></span>
                or on click:
                <a href="#" className="helper-icon-gray" onclick="alert('Help is here!')"></a>
                or a span clickable:
                <span className="helper-icon-gray clickable" onclick="alert('Help is here!')"></span>
            </div>
        );
    }
});
