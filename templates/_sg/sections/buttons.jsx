'use strict';

var Button = require('../components/button.jsx'),
    ButtonDropdown = require('../components/button-dropdown.jsx'),
    DropDownData = require('../components/data/dropdown-data.jsx'),
    InputSubmit = require('../components/input-submit.jsx'),
    Snippet = require('../snippet.jsx');

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
            <section id="button" title="Buttons" className="sg-section">
                <h3>Buttons</h3>

                <section id="large-buttons" className="sg-component">
                    <h4>Large buttons</h4>
                    <Button label="Four column" className="long" />
                    <Button label="Four column" className="long foggy-button" />
                    <Button label="Four column" className="long" disabled="disabled" />

                    <Snippet>
                        <Button label="Four column" className="long" />
                        <Button label="Four column" className="long foggy-button" />
                        <Button label="Four column" className="long" disabled="disabled" />
                    </Snippet>
                </section>

                <section id="medium-buttons" className="sg-component">
                    <h4>Medium Buttons</h4>
                    <Button label="Three column" className="medium" />
                    <Button label="Three column" className="foggy-button medium" />
                    <Button label="Three column" className="medium" disabled="disabled" />

                    <Snippet>
                        <Button label="Three column" className="medium" />
                        <Button label="Three column" className="medium foggy-button" />
                        <Button label="Three column" className="medium" disabled="disabled" />
                    </Snippet>
                </section>

                <section id="small-buttons" className="sg-component">
                    <h4>Small buttons</h4>
                    <Button label="Small" className="short" />
                    <Button label="Small" className="short foggy-button" />
                    <Button label="Small" className="short" disabled="disabled" />

                    <Snippet>
                        <Button label="Small" className="short" />
                        <Button label="Small" className="short foggy-button" />
                        <Button label="Small" className="short" disabled="disabled" />
                    </Snippet>
                </section>

                <section id="normal-buttons" className="sg-component">
                    <h4>Normal buttons</h4>
                    <Button label="Button 1" />
                    <Button label="Button 2 (disabled)" disabled="disabled" />

                    <Snippet>
                        <Button label="Button 1" />
                        <Button label="Button 2 (disabled)" disabled="disabled" />
                    </Snippet>
                </section>

                <section id="text-buttons" className="sg-component">
                    <h4>Text buttons</h4>
                    <Button label="Button 1" className="text-button-gray" />
                    <Button label="Button 2 (disabled)" disabled="disabled" className="text-button-gray" />

                    <Snippet>
                        <Button label="Button 1" className="text-button-gray" />
                        <Button label="Button 2 (disabled)" disabled="disabled" className="text-button-gray" />
                    </Snippet>
                </section>

                <section id="input-submit" className="sg-component">
                    <h4>Input Submit</h4>
                    <InputSubmit label="Input 1" />
                    <InputSubmit label="Input 2 (disabled)" disabled="disabled" />

                    <Snippet>
                        <InputSubmit label="Input 1" />
                        <InputSubmit label="Input 2 (disabled)" disabled="disabled" />
                    </Snippet>
                </section>

                <section id="dropdown-buttons" className="sg-component">
                    <h4>Dropdown buttons</h4>

                    A button-dropdown is displayed as a dropdown menu on hovering over it.

                    <ButtonDropdown source={DropDownData}
                        label="Button 1" className="text-button-gray" />


                    <Snippet>
                        <ButtonDropdown source={DropDownData}
                            label="Button 1" className="text-button-gray" />
                    </Snippet>
                </section>
            </section>
        );
    }
});
