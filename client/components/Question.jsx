import React from 'react';
import Disclaimer from './Disclaimer.jsx'

export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answerGiven: false,
      selectedAnswer: null,
      answerIsCorrect: false,
    }
    this.checkAnswer = (index) => {
      if(index == this.props.question.correctAnswer-1){
        this.props.handleAnswer(true)
        this.setState({
          answerIsCorrect:true
        })
      } else {
        this.props.handleAnswer(false)
      }
      this.setState({
          answerGiven: true,
          selectedAnswer: index
      })
    }
  } 
  render() {
    let answerGiven = this.props.answerGiven;
    let answerVariants = this.props.question.variants.map((answer, index) => {
        return (
          <p className={this.state.selectedAnswer==index && this.state.answerGiven ? 'question__block selected' : 'question__block'} 

          onClick={this.state.answerGiven ? null : this.checkAnswer.bind(this, index)} key={index}> {answer} </p>
        )
    });
    let question = this.props.question;
    let button = <button onClick={this.props.nextQuestion} disabled={!this.state.answerGiven}>Следующий вопрос</button>

    return (
      <div className="question">
          <h2>{question.title}</h2>
          <Disclaimer correct={this.state.answerIsCorrect} answerIsGiven={this.state.answerGiven}/>
          {button}
        <div>
          {answerVariants}
        </div>
      </div>
    )
  }
}

Question.propTypes = {
  question: React.PropTypes.object.isRequired
}
