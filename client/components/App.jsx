import React from 'react';
import Question from './Question.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.questions.map(function(question) {
          return <Question title={question.title} answers={question.variants}/>
        })}
      </div>
    )
  }
}

App.propTypes = {
  questions: React.PropTypes.arrayOf(React.PropTypes.shape({
    title: React.PropTypes.string,
    variants: React.PropTypes.array
  })).isRequired
}
