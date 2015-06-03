jest.autoMockOff();

describe('SidePanel', function() {
    var SidePanel = require('styleguide/components/side-panel.jsx'),
        className = 'className',
        content = 'content',
        contentComponent,
        component,
        element;

    describe('side panel with simple element', function() {

        beforeEach(function() {
            contentComponent = <div className={className}>{content}</div>;
            component = SidePanel.show(contentComponent);
            element = React.findDOMNode(component);
        });

        it('should contain the given component', function() {
            var found = TestUtils.findRenderedDOMComponentWithClass(component, 'panel-content');
            expect(React.findDOMNode(found).textContent).toEqual(content);
        });

        it('should should be visible', function() {
            expect(React.findDOMNode(component).className).toContain('visible');
        });

        it('should should hide and remove content after hide is called', function() {
            component.hide();
            expect(React.findDOMNode(component).className).not.toContain('visible');

            // content still visible while hiding
            var found = TestUtils.findRenderedDOMComponentWithClass(component, 'panel-content');
            expect(React.findDOMNode(found).textContent).toEqual(content);

            // content removed after a little whilte
            jest.runAllTimers()
            var found = TestUtils.findRenderedDOMComponentWithClass(component, 'panel-content');
            expect(React.findDOMNode(found).textContent).toEqual('');
        });

        it('should should hide when clicking on hide', function() {
            var closeButton = TestUtils.findRenderedDOMComponentWithClass(component, 'panel-close');
            TestUtils.Simulate.click(React.findDOMNode(closeButton));
            expect(React.findDOMNode(component).className).not.toContain('visible');
        });

    });

});
