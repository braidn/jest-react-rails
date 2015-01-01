jest.dontMock("../DemoComponent");

describe('DemoComponent', function() {
  it('explains that it is a demo component', function() {
    var React = require('react/addons');
    var DemoComponent = require('../DemoComponent');
    var TestUtils = React.addons.TestUtils;

    var testComponent = TestUtils.renderIntoDocument(<DemoComponent/>);
    var div = TestUtils.findRenderedDOMComponentWithTag(testComponent, 'div')
    expect(div.props.children).toBe("Demo Component");
  });
});
