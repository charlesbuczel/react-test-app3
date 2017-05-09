const React = require('react');

class Popular extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: 'All'
    }
  }

  updateLanguage(lang) {
    this.setState({
      selectedLanguage: lang
    });
    /*this.setState(() => ({
      selectedLanguage: lang
    }))*/
  }

  render() {
    const languages = [
      'All',
      'JavaScript',
      'Ruby',
      'Java',
      'CSS',
      'Python'
    ];

    return (
      <ul className='languages'>
        {
          languages.map((lang) => {
            return (
              <li
                style={lang === this.state.selectedLanguage ? { color : '#d0021b' } : null}
                onClick={() => this.updateLanguage(lang)}
                key={lang}>
                {lang}
              </li>
            )
          })
        }
      </ul>
    )
  }
}

module.exports = Popular;
