'use strict';

var Snippet = require('../../snippet.jsx'),
    InputText = require('../../components/input-text.jsx'),
    InputTextDynamic = require('../../components/input-text-dynamic.jsx');

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'Fields',

    /**
     * Renders the component.
     */
    render: function() {
        return (
            <section id="fields" title="Fields" className="sg-section">
                <h3>Fields</h3>

                <section id="fields-input-text" className="sg-component">
                    <h4>Text input</h4>

                    <InputText />
                    <Snippet src={InputText} />
                </section>

                <section id="fields-dynamic-input-text" className="sg-component">
                    <h4>Dynamic text input</h4>

                    <p>This input submits changes. <em>note: js not implemented yet.</em></p>

                    <InputTextDynamic />
                    <Snippet src={InputTextDynamic} />
                </section>

                <section id="fields-input-text" className="sg-component">
                    <h4>Disabled text input</h4>

                    <InputText disabled="true" />
                    <Snippet src={InputText} disabled="true" />
                </section>
            </section>
        );
    }
});
