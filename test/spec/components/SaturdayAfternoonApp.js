'use strict';

describe('SaturdayAfternoonApp', () => {
  let React = require('react/addons');
  let SaturdayAfternoonApp, component, element, ref;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    SaturdayAfternoonApp = require('components/SaturdayAfternoonApp.js');
    component = React.createElement(SaturdayAfternoonApp);
    ref = React.render(component, container);
  });

  it('should create a new instance of SaturdayAfternoonApp', () => {
    expect(component).toBeDefined();
  });

  it('should render an iframe', () => {
    element = React.findDOMNode(ref);
    expect(element.tagName).toBe('IFRAME');
  });

  it('should render an iframe with an id of encapsulated', () => {
    element = React.findDOMNode(ref);
    expect(element.id).toBe('encapsulated');
  });

  it('should say hello from the iframe', () => {
    let body = ref.getDOMNode().contentDocument.body;
    expect(body.querySelector('img')).toBeDefined();
    expect(body.querySelector('img').alt).toContain('Hello.');
  });
});
