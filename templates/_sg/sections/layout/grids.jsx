'use strict';

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'Grids',

    /**
     * Renders the component.
     */
    render: function() {
        return (
            <section id="grids" title="Grids" className="sg-section">
                <h3 className="sg">Layout and grids</h3>
                We're using a 24 column grid system to define the layout on each page.
                &gt;1200px is the grid float breakdown.

                <pre>
                    <code>$grid-columns: 12; $gutter: 10px;</code>
                </pre>

                <section className="sg-component">
                    <h4>Grid system</h4>
                    We use Neat this way:...
                </section>

                <section className="sg-component">
                    <h4>Horizontal spacing</h4>
                    ...
                </section>

                <section className="sg-component">
                    <h4>General spacing</h4>
                    ...
                </section>
            </section>
        );
    }
});
