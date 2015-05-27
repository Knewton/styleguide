'use strict';

var Grids = require('./layout/grids.jsx'),
    CardsTiles = require('./layout/cards-tiles.jsx');

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'Layout',

    /**
     * Renders the component.
     */
    render: function() {
        return (
            <section id="layout" title="Layout" className="sg-section">
                <Grids />
                <CardsTiles />
                <section id="tables" title="Tables" className="sg-section">
                    <h3 className="sg">
                        Tables
                    </h3>
                </section>
                <section id="navigation" title="Navigation" className="sg-section">
                    <h3 className="sg">
                        Navigation stuff
                    </h3>
                    <section id="tabs" title="Tabs" className="sg-component">
                        <h4>Tabs</h4>
                    </section>
                    <section id="pagination" title="Pagination" className="sg-component">
                        <h4>Pagination</h4>
                    </section>
                </section>
            </section>
        );
    }
});
