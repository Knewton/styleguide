'use strict';

var ModalMixin = require('../mixins/modal.jsx');

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'SimpleModal',

    /**
     * Make this component a modal
     */
    mixins: [ModalMixin],

    /**
     * Renders the component.
     */
    renderContent: function() {
        return <div className="modal-content">
            <button className="close icon-cancel" onClick={this.hide}></button>
            <div className="modal-body">
                {this.props.message}
            </div>
            <div className="modal-footer">
                <button type="button" className="insert-button long" onClick={this.hide}>
                    Ok
                </button>
            </div>
        </div>;
    }
});
