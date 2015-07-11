'use strict';

describe('SaturdayAfternoonApp', () => {
  let React = require('react/addons');
  let SaturdayAfternoonApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    SaturdayAfternoonApp = require('components/SaturdayAfternoonApp.js');
    component = React.createElement(SaturdayAfternoonApp);
  });

  it('should create a new instance of SaturdayAfternoonApp', () => {
    expect(component).toBeDefined();
  });
});
