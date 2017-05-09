const React = require('react');

class Popular extends React.Component {
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
              <li key={lang}>
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
