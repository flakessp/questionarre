import React from 'react';
import Question from './Question.jsx';
import Result from './QuizResult.jsx';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestionId: 1,
      correctAnswers: 0,
    }
    this.nextQuestion = () => {
      this.setState({
        currentQuestionId: this.state.currentQuestionId+1,
      })
    }
    this.checkAnswer = (index) => {
      if(index == this.props.questions[this.state.currentQuestionId-1].correctAnswer-1){
        this.setState({
            correctAnswers: this.state.correctAnswers + 1
        })
      }
      else console.log('wrong!');
    }
  }

  render() {
    var selectedId = this.state.currentQuestionId;
    var question = this.props.questions[selectedId-1];

    if(selectedId > this.props.questions.length) {
      return (
        <Result correct={this.state.correctAnswers} total={this.props.questions.length}/>
      )
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
