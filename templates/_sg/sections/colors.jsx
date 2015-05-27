'use strict';

var Color = require('../components/color.jsx');

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'Colors',

    /**
     * Renders the component.
     */
    render: function() {
        return (
            <section id="colors" title="Colors" className="sg-section">
                <h1 className="sg">Colors</h1>

                <section id="primary-color-samples" className="sg-component">
                    <h4>Primary Colors</h4>
                    <p>Used for buttons, callouts, text links, information.</p>
                    <div className="color-row">
                        <Color hex="#00B0C7" name="$blue" light="1" />
                    </div>
                    <div className="color-row">
                        <p>Used for Success</p>
                        <Color hex="#129F4E" name="$green" light="1" />
                    </div>
                    <div className="color-row">
                        <p>Used for Error</p>
                        <Color hex="#E9552E" name="$red" light="1" />
                    </div>
                    <div className="color-row">
                        <p>Used for Warning</p>
                        <Color hex="#FF8D07" name="$orange" light="1" />
                    </div>

                </section>

                <section id="monochromatic-samples" className="sg-component">
                    <h4>Shades of Grey</h4>
                    <p>Used for backgrounds, buttons, and text.</p>
                    <div className="color-row">
                        <Color hex="#EEE" name="$cloudy1" />
                        <Color hex="#CCC" name="$cloudy2" />
                        <Color hex="#999" name="$rainy1" light="1" />
                        <Color hex="#666" name="$rainy2" light="1" />
                        <Color hex="#444" name="$stormy1" light="1" />
                        <Color hex="#111" name="$stormy2" light="1" />
                    </div>
                </section>
            </section>
        );
    }
});
