'use strict';

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'DropDown',

    /**
     * Gets the initial data from the analytics store.
     */
    getInitialState: function() {
        // find value in source
        var source = this.props.source,
            selected = _.find(source, {value: this.props.defaultValue});

        return {
            selected: selected,
            opened: false
        };
    },

    /**
     * Called when a user has clicked in the page and the dropdown was opened.
     */
    onClickBody: function(event) {
        var dropdown = $(event.target).closest('.dropdown-input')[0],
            element = React.findDOMNode(this);
        if (dropdown !== element) {
            // close the dropdown
            this.setState({
                opened: false
            });

            // stop watching for clicks
            this.setWatchClicks(false);
        }
    },

    /**
     * Starts or stops watching for dom events on body.
     */
    setWatchClicks: function(watch) {
        $('body')[watch ? 'on' : 'off']('click', this.onClickBody);
    },

    /**
     * Called when a user clicks on an item.
     */
    onClickItem: function(item, event) {
        // update selection
        this.setState({
            selected: item,
            opened: false
        });

        // stop watching for clicks
        this.setWatchClicks(false);

        // call onChange prop if specified
        if (this.props.onChange) {
            this.props.onChange(item.value);
        }

        // stop propagation
        event.stopPropagation();
    },

    /**
     * Called when a user clicks on the dropdown.
     */
    onClick: function() {
        // switch between open and closed
        this.setState({
            opened: !this.state.opened
        });

        // temporary listen to click on document to close the dropdown
        if (!this.state.opened) {
            this.setWatchClicks(true);
        }
    },

    /**
     * Returns the selected value.
     */
    getValue: function() {
        var selected = this.state.selected;
        if (selected) {
            return selected.value;
        }
    },

    /**
     * returns the className for the option elements.
     */
    optionClassName: function(item) {
        var ret = ['dropdown-option'];
        if (this.state.selected === item) {
            ret.push('selected');
        }
        return ret.join(' ');
    },

    /**
     * Renders the options.
     */
    renderOptions: function(source) {
        if (source.length) {
            return source.map(function(item) {
                return (
                    <div key={item.value} data-value={item.value}
                            className={this.optionClassName(item)}
                            onClick={this.onClickItem.bind(this, item)}>
                        {item.text}
                    </div>
                );
            }, this);
        }
    },

    /**
     * Returns the classNames for the root element
     */
    rootClassName: function() {
        var ret = ['dropdown-input'];
        if (this.props.className) {
            ret.push(this.props.className);
        }
        if (this.state.opened) {
            ret.push('opened');
        }
        return ret.join(' ');
    },

    /**
     * Renders the component.
     */
    render: function() {
        var source = this.props.source,
            state = this.state;
        return <div className={this.rootClassName()}>
            <div className="dropdown-hidden-input">
                <input type="text" name={this.props.name} readOnly={true}
                    value={state.selected ? state.selected.value : ''} />
            </div>
            <div className="dropdown-selected" onClick={this.onClick}>
                <div className="dropdown-arrow"></div>
                <div className="dropdown-text">
                    {state.selected ? state.selected.text : this.props.placeholder}
                </div>
            </div>
            <div className="dropdown-options">
                {this.renderOptions(source)}
            </div>
        </div>;
    }
});
