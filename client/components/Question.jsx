import React from 'react';
import Disclaimer from './Disclaimer.jsx'

export default class Question extends React.Component {
  static PropTypes = {
    question: React.PropTypes.object.isRequired
  }
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
    const {question, nextQuestion} = this.props,
          {selectedAnswer, answerGiven, answerIsCorrect} = this.state;
    
    let answerVariants = this.props.question.variants.map((answer, index) => {
        return (
          <p className={selectedAnswer==index && answerGiven ? 'question__block selected' : 'question__block'} 

          onClick={answerGiven ? null : this.checkAnswer.bind(this, index)} key={index}> {answer} </p>
        )
    });
    let button = <button onClick={nextQuestion} disabled={!answerGiven}>Следующий вопрос</button>

    return (
      <div className="question">
          <h2>{question.title}</h2>
          <Disclaimer correct={answerIsCorrect} answerIsGiven={answerGiven}/>
          {button}
        <div>
          {answerVariants}
        </div>
      </div>
    )
  }
}


