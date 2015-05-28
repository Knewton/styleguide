'use strict';

var Snippet = require('../snippet.jsx'),
    Helpers = require('../components/helpers.jsx'),
    DigitFlag = require('../components/digit-flag.jsx'),
    Label = require('../components/label.jsx'),
    Modal = require('../components/modal.jsx'),
    Container = require('../components/container.jsx'),
    Tooltip = require('../components/tooltip.jsx'),
    MessagingInline = require('../components/messaging-inline.jsx'),
    LoadingJavaScript = require('./loading.txt'),
    LoadingExampleJavaScript = require('./loading-example.txt'),
    Script = require('../script.jsx'),
    AlertJavaScript = require('./alert.txt'),
    AlertExampleJavaScript = require('./alert-example.txt');

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'UiComponents',

    /**
     * Renders the component.
     */
    render: function() {
        return (
            <section id="ui_components" title="Other UI components" className="sg-section">
                <h1 className="sg">UI components</h1>

                <section className="sg-component">
                    <h2>Global messaging</h2>

                    <p>We use <a href="http://github.hubspot.com/messenger/">Hubspot's Messenger</a> library for global messaging. Global messaging is displayed below the header, which is fixed at the top.</p>

                    <button type="button" className="alert-info-btn">
                        Info
                    </button>
                    <button type="button" className="alert-succ-btn">
                        Success
                    </button>
                    <button type="button" className="alert-warn-btn">
                        Warning
                    </button>
                    <button type="button" className="alert-error-btn">
                        Error
                    </button>

                    <Script content={AlertJavaScript} />
                    <Snippet type="javascript" text={AlertExampleJavaScript} />
                </section>

                <section className="sg-component">
                    <h2>Modal</h2>
                    <p>
                        We use Boostrap for creating modals with our custom skin.<br />
                        More info can be found on <a href="http://getbootstrap.com/javascript/#modals">http://getbootstrap.com/javascript/#modals</a>.
                    </p>
                    <Modal />
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
                    <Tooltip />

                    <Snippet>
                        <Tooltip />
                    </Snippet>
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

                <section className="sg-component">
                    <h2>Loading</h2>
                    <p>
                        To give feedback to the user that something is happening, you can use the
                        loading plugin on either a block or a button element.
                    </p>
                    <div className="loading-demo">
                        <div className="loading-demo-menu"><button id="loading-on" className="button short">On</button> <button id="loading-off" className="button short">Off</button></div>
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
                    <h2>Loading animations</h2>
                    ...
                </section>

                <section className="sg-component">
                    <h2>Transitions</h2>
                    ...
                </section>
            </section>
        );
    }
});
