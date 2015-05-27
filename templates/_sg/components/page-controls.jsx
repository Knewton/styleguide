'use strict';

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'PageControls',

    /**
     * Renders the component.
     */
    render: function() {
        return (
            <div className="page-controls">
                <a href="#" className="pager next" style="visibility: visible;">Next&nbsp;›</a>
                <a href="#" className="pager prev" style="visibility: visible;">‹&nbsp;Previous</a>
                <a className="view-page" href={this.props.url}>...</a>
                <a className="view-page active" href={this.props.url}>3</a>
                <a className="view-page" href={this.props.url}>4</a>
                <a className="view-page" href={this.props.url}>5</a>
                <a className="view-page" href={this.props.url}>6</a>
                <a className="view-page" href={this.props.url}>7</a>
                <a className="view-page" href={this.props.url}>...</a>
            </div>
        );
    }
});
