import React from 'react';

require('../styles/app.scss');

export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answerGiven: false
    }
    this.checkAnswer = (index) => {
      if(index == this.props.question.correctAnswer-1){
        this.props.handleAnswer(true)
      } else {
        this.props.handleAnswer(false)
      }
      this.setState({
            answerGiven: true
        })
    }
  } 
  render() {
    let answerGiven = this.props.answerGiven;
    let answerClasName = this.state.answerGiven ? 'disabled' : '';
    let answerVariants = this.props.question.variants.map((answer, index) => {
        return (
        <p className={answerClasName} 
          onClick={
            this.state.answerGiven 
            ? null 
            : this.checkAnswer.bind(this, index)
          } key={index}>{answer}
        </p>)
    });
    let question = this.props.question;

    return (
      <div className="question">
          <h2>{question.title}</h2>
        <div>
          {answerVariants}
          <button onClick={this.props.nextQuestion}>Следующий вопрос</button>
        </div>
      </div>
    )
  }
}

Question.propTypes = {
  question: React.PropTypes.object.isRequired
}
