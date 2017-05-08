const React = require('react');
const ReactDom = require('react-dom');
const PropTypes = require('prop-types');


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

Badge.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
}

ReactDom.render(
  <Badge
    name='Charles'
    username='charlesbuczel'
    img='https://avatars0.githubusercontent.com/u/950505'
  />,
  document.getElementById('root')
);
