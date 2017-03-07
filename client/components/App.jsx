import React from 'react';
import Question from './Question.jsx';
import Result from './QuizResult.jsx';
import Header from './Header.jsx';


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
    this.handleAnswer = (summary) => {
      if(summary) {
        this.setState({
          correctAnswers: this.state.correctAnswers + 1,
        })
      }
    }
  }

  render() {
    let currentQuestionId = this.state.currentQuestionId;
    let currentQuestion = this.props.questions[currentQuestionId-1];
    let totalQuestionsNum = this.props.questions.length;

    if(currentQuestionId > totalQuestionsNum) {
      return (
        <Result correct={this.state.correctAnswers} total={totalQuestionsNum}/>
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

App.propTypes = {
  questions: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    title: React.PropTypes.string,
    variants: React.PropTypes.array,
    correctAnswer: React.PropTypes.number.isRequired,
  })).isRequired
}
