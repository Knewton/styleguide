'use strict';

var Snippet = require('../snippet.jsx'),
    Helpers = require('../components/helpers.jsx'),
    DigitFlag = require('../components/digit-flag.jsx'),
    Button = require('../components/button.jsx'),
    Label = require('../components/label.jsx'),
    Modal = require('../components/simple-modal.jsx'),
    Container = require('../components/container.jsx'),
    MessagingInline = require('../components/messaging-inline.jsx'),
    LoadingJavaScript = require('./loading.txt'),
    LoadingExampleJavaScript = require('./loading-example.txt'),
    Script = require('../script.jsx'),
    AlertJavaScript = require('./alert.txt'),
    AlertExampleJavaScript = require('./alert-example.txt');

var SidePanel = require('../../../components/side-panel.jsx'),
    Tooltip = require('../../../components/tooltip.jsx');

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'UiComponents',

    getInitialState: function() {
        return {
            current: 0,
            max: 0
        };
    },

    steps: [],

    go: function(step) {
        var max = step > this.state.max ? step : this.state.max;
        this.setState({
            current: step,
            max: max
        });
    },

    /**
     * Renders the component.
     */
    render: function() {
        var self = this;
        return (
            <section id="ui_components" title="Other UI components" className="sg-section">
                <h1 className="sg">UI components</h1>

                <section className="sg-component">
                    <h2>Global messaging</h2>

                    <p>We use <a href="http://github.hubspot.com/messenger/">Hubspot's Messenger</a> library for global messaging. Global messaging is displayed below the header, which is fixed at the top.</p>

                    <Button label="Info" className="alert-info-btn" />
                    <Button label="Success" className="alert-succ-btn" />
                    <Button label="Warning" className="alert-warn-btn" />
                    <Button label="Error" className="alert-error-btn" />

                    <Script content={AlertJavaScript} />
                    <Snippet type="javascript" text={AlertExampleJavaScript} />
                </section>

                <section className="sg-component">
                    <h2>Modal</h2>
                    <p>
                        We use Boostrap for creating modals with our custom skin.<br />
                        More info can be found on <a href="http://getbootstrap.com/javascript/#modals">http://getbootstrap.com/javascript/#modals</a>.
                    </p>

                    <a href="#" onClick={function () { Modal.show({ message: "Here's a simple modal." }); }}>Trigger a modal.</a>

                    <Snippet>
                        <Modal />
                    </Snippet>
                </section>

                <section className="sg-component">
                    <h2>Messaging containers</h2>
                    <p>
                        A generic container with a title and a content.<br />
                        The following colors are supported: orange, green. Just add those to the element
                        with the class "container-wrapper" to switch type.
                    </p>
                    <Container color="green" />

                    <Snippet>
                        <Container color="green" />
                    </Snippet>

                    <p>An alternate design is available in blue:</p>
                    <MessagingInline />

                    <Snippet>
                        <MessagingInline />
                    </Snippet>
                </section>

                <section className="sg-component">
                    <h2>Tooltip</h2>
                    <p>
                        We use Boostrap for creating tooltips with our custom skin.<br />
                        More info can be found on <a href="http://getbootstrap.com/javascript/#tooltips">http://getbootstrap.com/javascript/#tooltips</a>.<br />
                        <u>WARN</u>: tooltip conflicts with jquery-ui tooltip. Make sure that jquery-ui is not in the same page or is injected before bootstrap's tooltip.
                    </p>
                    <Tooltip placement="bottom" content="Some explanatory content" >
                        <p className="heading">
                            <i>Here's something unclear that needs an explanation. Hover over me.</i>
                        </p>
                    </Tooltip>
                </section>

                <section className="sg-component">
                    <h2>Loading</h2>
                    <p>
                        To give feedback to the user that something is happening, you can use the
                        loading plugin on either a block or a button element.
                    </p>
                    <div className="loading-demo">
                        <div className="loading-demo-menu">
                            <button id="loading-on" className="button short">On</button>
                            <button id="loading-off" className="button short">Off</button>
                        </div>
                        <div className="loading-demo-block">Block element</div>
                        <div className="loading-demo-button-container">
                            <input type="text" id="loading-demo-text" placeholder="Custom text"></input>
                            <button className="loading-demo-button" type="button">Submit</button>
                        </div>
                    </div>
                    <Script content={LoadingJavaScript} />
                    <Snippet type="javascript" text={LoadingExampleJavaScript} />
                </section>

                <section className="sg-component">

                    <h2>Side Panel</h2>

                    <p>
                        A side panel can be triggered for additional information
                        or functionality, such as additional analytics or some
                        form. The side panel requires a React component to be passed
                        into it.
                    </p>

                    <a href="#" className="student" onClick={function () { SidePanel.show(<Button label="Some content" />); }}>
                        <span className="display-name">Click here.</span>
                    </a>

                </section>

                <section className="sg-component">
                    <h2>Flags and notifications</h2>
                    <p>
                        Some simple information will be displayed in a colored label.
                    </p>
                    <DigitFlag />

                    <Snippet>
                        <DigitFlag />
                    </Snippet>

                    <Label />
                    <Snippet>
                        <Label />
                    </Snippet>
                </section>

                <section className="sg-component">
                    <h2>Helper Icons</h2>
                    <p>
                        Helper icons are little icons that can be used to explain things to the user.
                    </p>
                    <Helpers />

                    <Snippet>
                        <Helpers />
                    </Snippet>
                </section>
            </section>
        );
    },
});
