import React from 'react';
import Question from './Question.jsx';

export default class App extends React.Component {
  render() {
    return (
      <Question/>
    )
  }
}

App.propTypes = {
  questions: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
}
