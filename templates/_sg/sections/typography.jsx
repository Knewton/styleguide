'use strict';

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'Typography',

    /**
     * Renders the component.
     */
    render: function() {
        return (
            <section id="typography" title="Typography" className="sg-section">
                <h1 className="sg">
                    Typopgraphy
                </h1>
                <section id="styles" title="Styles" className="sg-section">
                    <h3>Headings</h3>
                    ...
                    <h3>Body text</h3>
                    ...
                    <h3>Link fonts</h3>
                    ...
                    <h3>Input fonts</h3>
                    ...
                    <h3>Table fonts</h3>
                    ...
                    <h3>Navigation fonts</h3>
                    ...
                    <h3>Other stuff</h3>
                    ...
                </section>
            </section>
        );
    }
});
