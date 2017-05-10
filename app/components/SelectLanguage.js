const React = require('react');
const PropTypes = require('prop-types');

function SelectLanguage (props) {
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
            style={lang === props.selectedLanguage ? { color : '#d0021b' } : null}
            onClick={() => props.onSelect(lang)}
            key={lang}>
            {lang}
          </li>
        )
      })
    }
    </ul>
  )
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

module.exports = SelectLanguage;
