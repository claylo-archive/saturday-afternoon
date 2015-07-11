'use strict';

var SaturdayAfternoonApp = require('./SaturdayAfternoonApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route handler={SaturdayAfternoonApp}>
    <Route name="/" handler={SaturdayAfternoonApp}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
