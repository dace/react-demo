var React = require('react');

var Badge = React.createClass({
  render: function(){
    return (
        <button className="btn btn-primary" type="button">
          {this.props.title} <span className="badge">{this.props.number}</span>
        </button>
      );
  }
});

var options = {
  title: 'Inbox',
  number: 32
};

var element = React.createElement(Badge, options);
React.render(element, document.getElementById('app'));