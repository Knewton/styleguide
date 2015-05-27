'use strict';

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'CardTiles',

    /**
     * Renders the component.
     */
    render: function() {
        return (
            <section id="cards-tiles" title="Cards and tiles" className="sg-section">
                <h3 className="sg">Cards and tiles</h3>
                <section className="sg-component">
                    <h4>Cards</h4>
                    ...
                </section>
                <section className="sg-component">
                    <h4>Tiles</h4>
                    ...
                </section>
            </section>
        );
    }
});
