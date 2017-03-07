import React from 'react';

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

  componentDidUpdate(){
    this.setState({
      answerGiven: false
    })
  }

  render() {
    let answerGiven = this.props.answerGiven
    let answerVariants = this.props.answers.map((answer, index) => {
        return <p onClick={this.state.answerGiven ? null : this.checkAnswer.bind(this, index)} key={index}>{answer}</p>
    })

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h6>Вопрос {this.props.index} из {this.props.length}</h6>
            <h2>{this.props.title}</h2>
            <p className="lead">{this.props.body}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {answerVariants}
            <button className="btn btn-default" onClick={this.props.nextQuestion}>Следующий вопрос</button>
          </div>
        </div>
      </div>
    )
  }
}

Question.propTypes = {
  answers: React.PropTypes.array.isRequired,
  title: React.PropTypes.string.isRequired,
  index: React.PropTypes.number.isRequired,
  length: React.PropTypes.number.isRequired,
  nextQuestion: React.PropTypes.func.isRequired,
  handleAnswer: React.PropTypes.func.isRequired,
  question: React.PropTypes.object.isRequired
}
