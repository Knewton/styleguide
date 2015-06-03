'use strict';

var Fields = require('./forms/fields.jsx'),
    DatePicker = require('../components/datepicker.jsx'),
    Radio = require('../components/radio.jsx'),
    Checkbox = require('../components/checkbox.jsx'),
    Snippet = require('../snippet.jsx');

var DropDown = require('../../../components/dropdown.jsx'),
    DropDownData = require('../components/data/dropdown-data.jsx');

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'Forms',

    /**
     * Renders the component.
     */
    render: function() {
        return (
            <section id="forms" title="Form elements" className="sg-section">
                <h1 className="sg">Form elements</h1>
                <Fields />

                <section id="radio-buttons" title="Radio buttons" className="sg-section">

                    <h3>Radio buttons</h3>
                    <section id="radio-button" className="sg-component">
                        <h4>Radio buttons (block)</h4>
                        <p>
                            To render this radio button you just need to define a label with the class "radio".
                            This label element should contain an radio input (will be hidden) and span
                            containing the text to show next to the button.<br />
                            By default radio buttons are displayed as blocks.
                        </p>
                        <form>
                            <Radio label="Option 1" checked="checked" name="name1" />
                            <Radio label="<div>Option 2</div><div>Multi Line</div>" name="name1" />
                            <Radio label="Option 3 (disabled)" disabled="disabled" name="name2" />
                            <Radio label="Option 4 (disabled + selected)" disabled="disabled" checked="checked" name="name2" />
                        </form>

                        <Snippet>
                            <Radio label="Option 1" checked="checked" />
                            <Radio label="<div>Option 2</div><div>Multi Line</div>" />
                            <Radio label="Option 3" disabled="disabled" />
                            <Radio label="Option 4 (disabled + checked)" disabled="disabled" checked="checked" />
                        </Snippet>

                        <br />
                        <h4>Radio buttons (inline)</h4>
                        <p>
                            In addition to "block" style, radio buttons can be rendered "inline". Just add
                            "inline" to the class of the label.
                        </p>
                        <form>
                            <Radio label="Option 1" checked="checked" inline="true" name="name1" />
                            <Radio label="Option 2" inline="true" name="name1" />
                            <Radio label="Option 3 (disabled)" disabled="disabled" inline="true" name="name2" />
                            <Radio label="Option 4 (disabled + checked)" disabled="disabled" inline="true" checked="checked" name="name2" />
                        </form>

                        <Snippet>
                            <Radio label="Option 1" checked="checked" inline="true" />
                            <Radio label="Option 2" inline="true" />
                            <Radio label="Option 3" disabled="disabled" inline="true" />
                            <Radio label="Option 4 (disabled + selected)" disabled="disabled" inline="true" checked="checked" />
                        </Snippet>
                    </section>
                </section>

                <section id="checkboxes" title="Checkboxes" className="sg-section">
                    <h3>Checkboxes</h3>
                    <section id="checkbox" className="sg-component">
                        <h4>Checkboxes (normal style + block)</h4>
                        <p>
                            Checkboxes can be rendered with a tick icon icon.
                            To do that, simply add the class "checkbox-normal".
                        </p>
                        <form>
                            <Checkbox className="checkbox-normal" label="Option 1" checked="checked" name="name1" />
                            <Checkbox className="checkbox-normal" label="<div>Option 2</div><div>Multi Line</div>" name="name1" />
                            <Checkbox className="checkbox-normal" label="Option 3 (disabled)" disabled="disabled" name="name2" />
                            <Checkbox className="checkbox-normal" label="Option 4 (disabled + checked)" disabled="disabled" checked="checked" name="name2" />
                        </form>

                        <Snippet>
                            <Checkbox className="checkbox-normal" label="Option 1" checked="checked" />
                            <Checkbox className="checkbox-normal" label="<div>Option 2</div><div>Multi Line</div>" />
                            <Checkbox className="checkbox-normal" label="Option 3 (disabled)" disabled="disabled" />
                            <Checkbox className="checkbox-normal" label="Option 4 (disabled + checked)" disabled="disabled" checked="checked" />
                        </Snippet>

                        <br />
                        <h4>Checkboxes (normal style + inline)</h4>
                        <p>
                            Checkboxes can be rendered with a tick icon icon.
                            To do that, simply add the class "checkbox-normal".
                        </p>
                        <form>
                            <Checkbox className="checkbox-normal" label="Option 1" checked="checked" name="name1" inline="true" />
                            <Checkbox className="checkbox-normal" label="Option 2" name="name1" inline="true" />
                            <Checkbox className="checkbox-normal" label="Option 3 (disabled)" disabled="disabled" name="name2" inline="true" />
                            <Checkbox className="checkbox-normal" label="Option 4 (disabled + checked)" disabled="disabled" checked="checked" name="name2" inline="true" />
                        </form>

                        <Snippet>
                            <Checkbox className="checkbox-normal" label="Option 1" checked="checked" inline="true" />
                            <Checkbox className="checkbox-normal" label="Option 2" inline="true" />
                            <Checkbox className="checkbox-normal" label="Option 3 (disabled)" disabled="disabled" inline="true" />
                            <Checkbox className="checkbox-normal" label="Option 4 (disabled + checked)" disabled="disabled" checked="checked" inline="true" />
                        </Snippet>

                        <br />
                        <h4>Checkboxes (tag style)</h4>
                        <p>
                            Checkboxes can also be rendered as buttons.
                            To do that, simply add the class "checkbox-tag".
                        </p>
                        <form>
                            <Checkbox className="checkbox-tag" label="Option 1" checked="checked" name="name1" />
                            <Checkbox className="checkbox-tag" label="Option 2" name="name1" />
                            <Checkbox className="checkbox-tag" label="Option 3 (disabled)" disabled="disabled" name="name2" />
                            <Checkbox className="checkbox-tag" label="Option 4 (disabled + checked)" disabled="disabled" checked="checked" name="name2" />
                        </form>

                        <Snippet>
                            <Checkbox className="checkbox-tag" label="Option 1" checked="checked" />
                            <Checkbox className="checkbox-tag" label="Option 2" />
                            <Checkbox className="checkbox-tag" label="Option 3 (disabled)" disabled="disabled" />
                            <Checkbox className="checkbox-tag" label="Option 4 (disabled + checked)" disabled="disabled" checked="checked" />
                        </Snippet>
                    </section>
                </section>

                <section id="other-form-elements" title="Other form elements" className="sg-section">

                    <h3>Other inputs</h3>

                    <section id="dropdown-buttons" className="sg-component">
                        <h4>Dropdown</h4>
                        <DropDown source={DropDownData} placeholder="Select a value"/>

                        <div className="sample">
                            <Snippet>
                                <DropDown source={DropDownData}/>
                            </Snippet>
                        </div>
                    </section>
                </section>
            </section>
        );
    }
});
