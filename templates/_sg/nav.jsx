'use strict';

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'Header',

    /**
     * Called when the component is mounted.
     */
    componentDidMount: function() {
        var sections = $('.sg-sections > .sg-section'),
            $nav = $('.sg-nav ul');

        var getLiHtmlForSection = function($s) {
            var title = $s.attr('title'),
                id = $s.attr('id');

            var subSections = $s.find('.sg-section');
            var subsectionHtml = '';
            if (subSections.length) {
                subsectionHtml = '<ul>';
                subSections.each(function(i) {
                    var $ss = $(subSections[i]);
                    subsectionHtml += getLiHtmlForSection($ss);
                });
                subsectionHtml += '</ul>';
            }

            var liHtml = '<li><a href="#' + id + '">' + title + '</a>' + subsectionHtml + '</li>';
            return liHtml;
        };

        sections.each(function(i) {
            var $s = $(sections[i]);
            var liHtml = getLiHtmlForSection($s);
            $nav.append(liHtml);
        });

        $('.sg-nav li a').on('click', function(e) {
            var $el = $(this),
                id = $el.attr('href');

            showPage(id);
        });
    },

    /**
     * Renders the component.
     */
    render: function() {
        return (
            <nav className="sg-nav">
                <ul></ul>
            </nav>
        );
    }
});
