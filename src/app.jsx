const React = require('react');
const ReactDOM = require('react-dom');

const App = React.createClass({
  render: function(){
    return (
      <div>Hi There</div>
    );
  }
});

ReactDOM.render(
    <App/>, document.getElementById('app'));
