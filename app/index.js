var React = require('react');
var ReactDom = require('react-dom');
require('./index.css');

class Badge extends React.Component {
  render () {
    return(
      <div>
        <img
          src={this.props.img}
          alt='Avatar'
          style={{width: 100, height: 100}}
        ></img>
        <h1>Name: {this.props.name}</h1>>
        <h3>username: {this.props.username}</h3>
      </div>
    );
  }
}

ReactDom.render(
  <Badge
    name='Charles'
    username='charlesbuczel'
    img='https://avatars0.githubusercontent.com/u/950505'
  />,
  document.getElementById('root')
);
