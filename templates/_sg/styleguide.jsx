'use strict';

var Header = require('./header.jsx'),
    Nav = require('./nav.jsx'),
    Typography = require('./sections/typography.jsx'),
    Colors = require('./sections/colors.jsx'),
    Layout = require('./sections/layout.jsx'),
    Buttons = require('./sections/buttons.jsx'),
    Forms = require('./sections/forms.jsx'),
    UiComponents = require('./sections/ui-components.jsx'),
    Knewcons = require('./sections/knewcons.jsx'),
    Guidelines = require('./sections/guidelines.jsx');

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'Styleguide',

    /**
     * Renders the component.
     */
    render: function() {
        return (
            <div>
                <Header />
                <div className="main sg">
                    <Nav />
                    <div className="sg-sections">
                        <Typography />
                        <Colors />
                        <Layout />
                        <Buttons />
                        <Forms />
                        <UiComponents />
                        <Knewcons />
                        <Guidelines />
                    </div>
                </div>
            </div>
        );
    }
});
