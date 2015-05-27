'use strict';

var InputText = require('./input-text.jsx');

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'Modal',

    /**
     * Renders the component.
     */
    render: function() {
        return (
            <div>
                <button type="button" data-toggle="modal" id="modalButton" data-target="#myModal">
                  Launch Modal
                </button>
                <button type="button" onclick="$('#myModal').modal()">
                  Launch Modal with JavaScript
                </button>
                <div className="modal fade" id="myModal" tabIndex="-1" role="dialog"
                        aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <a href="#" className="close icon-cancel" data-dismiss="modal"
                                    aria-label="Close"></a>
                                <h1 className="modal-title">Modal title</h1>
                            </div>
                            <div className="modal-body">
                                Content of the modal goes here.
                                <InputText placeholder="some field" />
                            </div>
                            <div className="modal-footer">
                                <a href="#" className="gray-link" data-dismiss="modal">Close</a>
                                <button type="button" className="long">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
