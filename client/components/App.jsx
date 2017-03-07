import React from 'react';
import Question from './Question.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestionId: 1
    }
    this.nextQuestion = () => {
      this.setState({
        currentQuestionId: this.state.currentQuestionId+1
      })
    }
  }

  render() {
    var selectedId = this.state.currentQuestionId;
    var question = this.props.questions[selectedId-1];

    if(selectedId > this.props.questions.length) {
      // если вопросы закончились вернуть страницу результатов
      return null
    }

    return (
      <Question answers={question.variants} title={question.title} index={question.id} length={this.props.questions.length} nextQuestion={this.nextQuestion}/>
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
