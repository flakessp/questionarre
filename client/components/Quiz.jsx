// Libraries
import React from 'react';

// Components
import Question from './Question.jsx';
import Result from './QuizResult.jsx';
import Header from './Header.jsx';


export default class Quiz extends React.Component {
  // static PropTypes = {
  //   questions: React.PropTypes.arrayOf(React.PropTypes.shape({
  //     id: React.PropTypes.number.isRequired,
  //     title: React.PropTypes.string,
  //     variants: React.PropTypes.array,
  //     correctAnswer: React.PropTypes.number.isRequired,
  //   })).isRequired
  // }

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
    this.handleAnswer = (summary) => {
      if(summary) {
        this.setState({
          correctAnswers: this.state.correctAnswers + 1,
        })
      }
    }
  }

  render() {
    const {currentQuestionId, correctAnswers} = this.state;

    let currentQuestion = this.props.route.questions[currentQuestionId-1];
    let totalQuestionsNum = this.props.route.questions.length;

    if(currentQuestionId > totalQuestionsNum) {
      return (
        <Result correct={correctAnswers} total={totalQuestionsNum}/>
      )
    }

    return (
      <div>
        <Header current={currentQuestionId} total={totalQuestionsNum} />
        <Question question={currentQuestion} handleAnswer={this.handleAnswer} nextQuestion={this.nextQuestion} key={currentQuestion.id}/>
      </div>
    )
  }
}
