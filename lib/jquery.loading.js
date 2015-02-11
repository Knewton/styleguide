'use strict';
/*!
 * jQuery loading
 */

(function($, window, document) {

    // Create the defaults once
    var pluginName = 'loading',
        defaults = {
            text: 'Loading...'
        };

    function Loading(element, options) {
        this.element = element;
        this.$el = $(this.element);

        this._defaults = defaults;
        this._name = pluginName;
        this.init(options);
    }

    Loading.prototype = {
        init: function(options) {
            this.options = $.extend({}, defaults, options) ;

            // backwards compat, I want it called text now
            if (this.options.buttonLoadingText) {
                this.options.text = this.options.buttonLoadingText;
            }

            this.type = this.findElementType();
            this.loadingOn();
        },

        loadingOn: function() {
            this.$el.addClass('loading');

            if (this.type === 'BUTTON') {
                // Save the current html and replace with loading
                if (!this.$el.data('ld_button_backup')) {
                    // Only backup the first time
                    this.$el.data('ld_button_backup', this.$el.html());
                }
                this.$el.prop('disabled', true).addClass('disabled');
                this.$el.html(this.options.text);
            }
        },

        loadingOff: function() {
            this.$el.removeClass('loading');

            if (this.type === 'BUTTON') {
                this.$el.prop('disabled', false).removeClass('disabled');
                // Restore html
                this.$el.html(this.$el.data('ld_button_backup'));
            }
        },

        findElementType: function() {
            var tagName = this.element.tagName;
            if (tagName === 'BUTTON' || this.$el.hasClass('button') || this.$el.hasClass('short') || this.$el.hasClass('medium') || this.$el.hasClass('long')) {
                return 'BUTTON';
            }

            if (this.element === document) {
                return 'DOCUMENT';
            }

            return 'OTHER';
        }
    };

    $.fn[pluginName] = function (options) {
        return this.each(function() {
            if (!$.data(this, 'ld_' + pluginName)) {
                $.data(this, 'ld_' + pluginName,
                new Loading(this, options));
            } else {
                if (options === 'off') {
                    $.data(this, 'ld_' + pluginName).loadingOff();
                } else {
                    $.data(this, 'ld_' + pluginName).init(options);
                }
            }
        });
    };

})(jQuery, window, document);
