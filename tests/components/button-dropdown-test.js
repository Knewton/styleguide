jest.autoMockOff();

describe('ButtonDropDown', function() {
    var ButtonDropDown = require('styleguide/components/button-dropdown.jsx'),
        className = 'className',
        content = 'content',
        source = [{value: 1, text: '1'}, {value: 2, text: '2'}, {value: 3, text: '3'}],
        value = source[1].value,
        onChange,
        component,
        element;

    describe('dropdown with force value', function() {

        beforeEach(function() {
            onChange = jest.genMockFunction();
            component = TestUtils.renderIntoDocument(
                <ButtonDropDown className={className} source={source} value={value}
                        onChange={onChange}>
                    {content}
                </ButtonDropDown>
            );
            element = ReactDOM.findDOMNode(component);
        });

        it('should render properly', function() {
            expect(element.className).toEqual('button-dropdown ' + className);

            var button = TestUtils.findRenderedDOMComponentWithClass(component, 'dropdown-button');
            expect(ReactDOM.findDOMNode(button).textContent).toEqual(content);
        });

        it('should select the item with given value', function() {
            var options = TestUtils.scryRenderedDOMComponentsWithClass(component,
                'dropdown-option');
            expect(ReactDOM.findDOMNode(options[0]).getAttribute('data-selected')).toEqual('false');
            expect(ReactDOM.findDOMNode(options[1]).getAttribute('data-selected')).toEqual('true');
            expect(ReactDOM.findDOMNode(options[2]).getAttribute('data-selected')).toEqual('false');
        });

        it('should update selected item if value changes', function() {
            // update value
            component.setProps({
                value: source[2].value
            });

            var options = TestUtils.scryRenderedDOMComponentsWithClass(component,
                'dropdown-option');
            expect(ReactDOM.findDOMNode(options[0]).getAttribute('data-selected')).toEqual('false');
            expect(ReactDOM.findDOMNode(options[1]).getAttribute('data-selected')).toEqual('false');
            expect(ReactDOM.findDOMNode(options[2]).getAttribute('data-selected')).toEqual('true');
        });

        it('should call on change if an item is clicked', function() {
            var options = TestUtils.scryRenderedDOMComponentsWithClass(component,
                'dropdown-option');
            TestUtils.Simulate.click(ReactDOM.findDOMNode(options[0]));
            expect(onChange).toBeCalledWith(source[0].value);
        });

        it('should open dropdown when button is clicked', function() {
            var button = TestUtils.findRenderedDOMComponentWithClass(component, 'dropdown-button');
            TestUtils.Simulate.click(ReactDOM.findDOMNode(button));
            expect(component.state.opened).toEqual(true);
        });
    });

});
