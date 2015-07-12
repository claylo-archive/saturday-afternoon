'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var Frame = require('react-frame-component');

// CSS
require('normalize.css');
require('../styles/main.scss');

var imageURL = require('file!../img/hello.gif');

var SaturdayAfternoonApp = React.createClass({
  render: function() {
    return (
      <Frame>
      <div className="main">
        <ReactTransitionGroup transitionName="fade">
          <HelloPic greeting="Hello." />
        </ReactTransitionGroup>
      </div>
      </Frame>
    );
  }
});

var HelloPic = React.createClass({
  render: function() {
   return (
     <img src={imageURL} alt={this.props.greeting} />
   );
  }
});

module.exports = SaturdayAfternoonApp;
