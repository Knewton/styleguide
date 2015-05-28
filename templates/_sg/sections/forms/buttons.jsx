'use strict';

var Button = require('../../components/button.jsx'),
    InputSubmit =  = require('../../components/input-submit.jsx'),
    Snippet = require('../../snippet.jsx');

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'Buttons',

    /**
     * Renders the component.
     */
    render: function() {
        return (
            <section id="buttons" title="Buttons" className="sg-section">
                <h3>Buttons</h3>

                <section id="large-buttons" className="sg-component">
                    <h4>Large buttons</h4>

                    <Button label="Four column" className="long" />
                    <Button label="Four column" className="long foggy-button" />
                    <Button label="Four column" className="long" disabled="disabled" />

                    <div className="sample">
                        <Snippet src={Button} label="Four column" className="long" />
                        <Snippet src={Button} label="Four column" className="long foggy-button" />
                        <Snippet src={Button} label="Four column" className="long" disabled="disabled" />
                    </div>
                </section>

                <section id="medium-buttons" className="sg-component">
                    <h4>Medium Buttons</h4>
                    <Button label="Three column" className="medium" />
                    <Button label="Three column" className="foggy-button medium" />
                    <Button label="Three column" className="medium" disabled="disabled" />

                    <div className="sample">
                        <Snippet src={Button} label="Three column" className="medium" />
                        <Snippet src={Button} label="Three column" className="medium foggy-button" />
                        <Snippet src={Button} label="Three column" className="medium" disabled="disabled" />
                    </div>
                </section>

                <section id="small-buttons" className="sg-component">
                    <h4>Small buttons</h4>
                    <Button label="Small" className="short" />
                    <Button label="Small" className="short foggy-button" />
                    <Button label="Small" className="short" disabled="disabled" />

                    <div className="sample">
                        <Snippet src={Button} label="Small" className="short" />
                        <Snippet src={Button} label="Small" className="short foggy-button" />
                        <Snippet src={Button} label="Small" className="short" disabled="disabled" />
                    </div>
                </section>

                <section id="normal-buttons" className="sg-component">
                    <h4>Normal buttons</h4>
                    <Button label="Button 1" />
                    <Button label="Button 2 (disabled)" disabled="disabled" />

                    <div className="sample">
                        <Snippet src={Button} label="Button 1" />
                        <Snippet src={Button} label="Button 2 (disabled)" disabled="disabled" />
                    </div>
                </section>

                <section id="text-buttons" className="sg-component">
                    <h4>Text buttons</h4>
                    <Button label="Button 1" className="text-button-gray" />
                    <Button label="Button 2 (disabled)" disabled="disabled" className="text-button-gray" />

                    <div className="sample">
                        <Snippet src={Button} label="Button 1" className="text-button-gray" />
                        <Snippet src={Button} label="Button 2 (disabled)" disabled="disabled" className="text-button-gray" />
                    </div>
                </section>

                <section id="input-submit" className="sg-component">
                    <h4>Input Submit</h4>
                    <InputSubmit label="Input 1" />
                    <InputSubmit label="Input 2 (disabled)" disabled="disabled" />

                    <div className="sample">
                        <Snippet src={InputSubmit} label="Input 1" />
                        <Snippet src={InputSubmit} label="Input 2 (disabled)" disabled="disabled" />
                    </div>
                </section>

            </section>
        );
    }
});
