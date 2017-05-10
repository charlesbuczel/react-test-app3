const React = require('react');
const SelectLanguage = require('./SelectLanguage');

class Popular extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: 'All'
    }

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(lang) {
    this.setState({
      selectedLanguage: lang
    });
  }

  render() {
    return (
      <div>
        <SelectLanguage
          selectedLanguage = {this.state.selectedLanguage}
          onSelect = {this.updateLanguage}/>
      </div>
    )
  }
}

module.exports = Popular;
