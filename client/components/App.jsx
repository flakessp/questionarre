import React from 'react';
import Question from './Question.jsx';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentQuestion: 1
    }
  }
  render() {
    return (
      // return question according to state
      <div>
        {this.props.questions.map(function(question, index, array) {
          return <Question title={question.title} answers={question.variants} index={index+1} length={array.length} key={question.id}/>
        })}
      </div>
    )
  }
}

App.propTypes = {
  questions: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    title: React.PropTypes.string,
    variants: React.PropTypes.array
  })).isRequired
}
