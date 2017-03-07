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
        currentQuestionId: this.state.currentQuestionId+1,
      })
    }
    this.checkAnswer = (index) => {  
      if(index == this.props.questions[this.state.currentQuestionId].correctAnswer-1)
        console.log('correct');
      else console.log('wrong!');
    }
  }

  render() {
    var selectedId = this.state.currentQuestionId;
    var question = this.props.questions[selectedId-1];

    if(selectedId > this.props.questions.length) {
      return (<div>Конец теста</div>)
    }

    return (
      <Question answers={question.variants} title={question.title} index={question.id} length={this.props.questions.length} nextQuestion={this.nextQuestion} checkAnswer={this.checkAnswer}/>
    )
  }
}

App.propTypes = {
  questions: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    title: React.PropTypes.string,
    variants: React.PropTypes.array,
    correctAnswer: React.PropTypes.number.isRequired,
  })).isRequired
}
