'use strict';

var DatePickerJavaScript = require('./datepicker.txt'),
    Script = require('../script.jsx');

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'DatePicker',

    /**
     * Renders the component.
     */
    render: function() {
        return (
            <div>
                <div className="input-date date" id="dp1">
                    <input type="text" placeholder="mm/dd/yyyy" className="form-control" />
                    <span className="add-on"><i className="icon-calendar"></i></span>
                </div>
                <Script content={DatePickerJavaScript} />
            </div>
        );
    }
});
