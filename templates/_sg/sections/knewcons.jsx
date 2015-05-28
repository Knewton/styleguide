'use strict';

var Knewcon = require('../components/knewcon.jsx');

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'Knewcons',

    /**
     * Renders the component.
     */
    render: function() {
        return (
            <section id="knewcons" title="Knewton Icons" className="sg-section">
                <h1 className="sg">
                    Knewton Icons
                </h1>
                <p>
                    Icons are implemented using <a href="http://www.fontastic.me">Fontastic</a>,
                    a service that translates vector icons into a font. This allows to use unicode
                    to put them in place and style them with regular CSS.
                </p>
                <p>
                    To use one of these icons, it is enough to set a new div with a class name
                    like the one next each one of the following icons. The icon will be
                    automatically appended to the div content.
                </p>
                <pre><code>
                    &lt;div className="icon-settings"&gt;&lt;/div&gt;
                </code></pre>

                <div className="knewcons-display">
                    <Knewcon knewcon="icon-derived-topic" code="U+e007" name="" />
                    <Knewcon knewcon="icon-target-hex-solid" code="U+e00c" name="" />
                    <Knewcon knewcon="icon-target-topic" code="U+e00a" name="" />
                    <Knewcon knewcon="icon-arrow" code="U+e00f" name="" />
                    <Knewcon knewcon="icon-playback-pause" code="U+e026" name="" />
                    <Knewcon knewcon="icon-playback-play" code="U+e025" name="" />
                    <Knewcon knewcon="icon-mute" code="U+e028" name="" />
                    <Knewcon knewcon="icon-unmute" code="U+e027" name="" />
                    <Knewcon knewcon="icon-user" code="U+e002" name="" />
                    <Knewcon knewcon="icon-export" code="U+e00b" name="" />
                    <Knewcon knewcon="icon-right-open-big" code="U+e016" name="" />
                    <Knewcon knewcon="icon-left-open-big" code="U+e01c" name="" />
                    <Knewcon knewcon="icon-plus-circled" code="U+e024" name="" />
                    <Knewcon knewcon="icon-home" code="U+e011" name="" />
                    <Knewcon knewcon="icon-pencil" code="U+e012" name="" />
                    <Knewcon knewcon="icon-expand" code="U+e029" name="" />
                    <Knewcon knewcon="icon-history-current" code="U+e023" name="" />
                    <Knewcon knewcon="icon-history-sequence" code="U+e021" name="" />
                    <Knewcon knewcon="icon-history-single" code="U+e022" name="" />
                    <Knewcon knewcon="icon-check-thick" code="U+e006" name="" />
                    <Knewcon knewcon="icon-caret-right" code="U+e004" name="" />
                    <Knewcon knewcon="icon-learner" code="U+e019" name="" />
                    <Knewcon knewcon="icon-trash" code="U+e009" name="" />
                    <Knewcon knewcon="icon-trash-solid" code="U+e0015" name="" />
                    <Knewcon knewcon="icon-warning" code="U+e140" name="" />
                    <Knewcon knewcon="icon-activity" code="U+e180" name="" />
                    <Knewcon knewcon="icon-alert-solid" code="U+e170" name="" />
                    <Knewcon knewcon="icon-arrow-circle" code="U+e018" name="" />
                    <Knewcon knewcon="icon-browse" code="U+e017" name="" />
                    <Knewcon knewcon="icon-calendar" code="U+e00d" name="" />
                    <Knewcon knewcon="icon-check" code="U+e00" name="" />
                    <Knewcon knewcon="icon-close-large" code="U+e005" name="" />
                    <Knewcon knewcon="icon-close-small" code="U+e060" name="" />
                    <Knewcon knewcon="icon-complete-solid" code="U+e008" name="" />
                    <Knewcon knewcon="icon-ruler" code="U+e100" name="" />
                    <Knewcon knewcon="icon-preview-solid" code="U+e120" name="" />
                    <Knewcon knewcon="icon-popular-solid" code="U+e0200" name="" />
                    <Knewcon knewcon="icon-learn" code="U+e01b" name="" />
                    <Knewcon knewcon="icon-invite" code="U+e02b" name="" />
                    <Knewcon knewcon="icon-invite-solid" code="U+e015" name="" />
                    <Knewcon knewcon="icon-draft" code="U+e001" name="" />
                    <Knewcon knewcon="icon-create-content" code="U+e0a1" name="" />
                    <Knewcon knewcon="icon-content-video" code="U+e01d" name="" />
                    <Knewcon knewcon="icon-search" code="U+e030" name="" />
                    <Knewcon knewcon="icon-search-solid" code="U+e003" name="" />
                    <Knewcon knewcon="icon-settings-solid" code="U+ee" name="" />
                    <Knewcon knewcon="icon-support-solid" code="U+e014" name="" />
                    <Knewcon knewcon="icon-popular" code="U+e130" name="" />
                    <Knewcon knewcon="icon-content-text" code="U+e013" name="" />
                    <Knewcon knewcon="icon-complete" code="U+e000" name="" />
                    <Knewcon knewcon="icon-content-image" code="U+e00e" name="" />
                    <Knewcon knewcon="icon-cal-large" code="U+e01a" name="" />
                    <Knewcon knewcon="icon-cal-alert" code="U+e010" name="" />
                    <Knewcon knewcon="icon-cancel" code="U+e01e" name="" />
                    <Knewcon knewcon="icon-cancel-outlines" code="U+e01f" name="" />
                    <Knewcon knewcon="icon-active-course" code="U+e020" name="" />
                    <Knewcon knewcon="icon-active-goal" code="U+e02a" name="" />
                    <Knewcon knewcon="icon-goals-in-course" code="U+e02d" name="" />
                    <Knewcon knewcon="icon-small-collapse" code="U+e02c" name="" />
                    <Knewcon knewcon="icon-small-expand" code="U+e02e" name="" />
                    <Knewcon knewcon="icon-user-crane" code="U+e02f" name="" />
                    <Knewcon knewcon="icon-correct" code="U+e031" name="" />
                    <Knewcon knewcon="icon-filter" code="U+e032" name="" />
                    <Knewcon knewcon="icon-incorrect" code="U+e033" name="" />
                    <Knewcon knewcon="icon-instructional" code="U+e034" name="" />
                    <Knewcon knewcon="icon-skipped" code="U+e035" name="" />
                </div>
            </section>
        );
    }
});
