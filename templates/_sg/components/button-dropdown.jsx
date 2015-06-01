'use strict';

/**
 * parameters:
 *   value:
 *   onChange: callback
 *   children:
 *   className:
 *   source:
 */
module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'ButtonDropDown',

    /**
     * Returns the initial state of the component.
     */
    getInitialState: function() {
        return {
            opened: false,
            value: this.props.value
        };
    },

    /**
     * Called when a user clicks on the filter button.
     */
    onClickButton: function() {
        this.setState({
            opened: !this.state.opened
        });
    },

    /**
     * Called before render when the props have changed.
     */
    componentWillReceiveProps: function(nextProps) {
        // update value if set in props
        if (_.has(nextProps, 'value')) {
            this.setState({
                value: nextProps.value
            });
        }
    },

    /**
     * Called when a user clicks on one of the items of the menu.
     */
    onClickItem: function(item) {
        // update value if not set in props
        if (!_.has(this.props, 'value')) {
            this.setState({
                value: item.value
            });
        }

        // call callback
        if (this.props.onChange) {
            this.props.onChange(item.value);
        }

        // close dropdown
        this.setState({
            opened: false
        });
    },

    /**
     * Returns the className for the root element.
     */
    rootClassName: function() {
        var ret = ['button-dropdown'];
        if (this.state.opened) {
            ret.push('opened');
        }
        if (this.props.className) {
            ret.push(this.props.className);
        }
        return ret.join(' ');
    },

    /**
     * Renders the items.
     */
    renderOptions: function(items) {
        return items.map(function(item) {
            return (
                <div className="dropdown-option" data-selected={this.state.value === item.value}
                        data-value={item.value} onClick={this.onClickItem.bind(this, item)}
                        key={item.value}>
                    {item.text}
                </div>
            );
        }, this);
    },

    /**
     * Renders the component.
     */
    render: function() {
        var source = this.props.source;
        return (
            <div className={this.rootClassName()}>
                <div className="dropdown-button" onClick={this.onClickButton}>
                    {this.props.children}
                </div>
                <div className="dropdown-options">
                    {this.renderOptions(source)}
                </div>
            </div>
        );
    }
});
