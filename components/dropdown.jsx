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
            selected = this.props.value || this.props.defaultValue;

        return {
            selected: selected,
        };
    },

    componentWillReceiveProps: function(nextProps) {
        if (nextProps.hasOwnProperty('value')) {
            this.setState({
                selected: _.find(this.props.source, {value: nextProps.value})
            });
        }
    },

    onSelectChange: function(event) {
        this.setState({
            selected: event.target.value
        });

        // call onChange prop if specified
        if (this.props.onChange) {
            this.props.onChange(event.target.value);
        }
    },

    /**
     * Returns the selected value.
     */
    getValue: function() {
        var selected = this.state.selected;
        if (selected) {
            return selected;
        }
    },

    /**
     * Renders the options.
     */
    renderOptions: function(source) {
        if (source.length) {
            return source.map(function(item) {
                return (
                    <option key={item.value} value={item.value}>
                        {item.text}
                    </option>
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
        return ret.join(' ');
    },

    renderPlaceholder: function() {
        if (this.props.placeholder) {
            return <option disabled>{this.props.placeholder}</option>
        }
    },

    /**
     * Renders the component.
     */
    render: function() {
        var source = this.props.source;

        return (
            <div className={this.rootClassName()}>
                <select name={this.props.name} onChange={this.onSelectChange}
                    value={this.state.selected ? this.state.selected: ''}
                    defaultValue={this.props.value || this.props.defaultValue}>
                    {this.renderPlaceholder()}
                    {this.renderOptions(source)}
                </select>
            </div>
        );
    }
});
