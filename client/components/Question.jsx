import React from 'react';

export default class Question extends React.Component {
  constructor(props) {
    super(props)


  }
  render() {
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
            {this.props.answers.map(function(answer, index) {
                return <p className="lead" key={index}>{answer}</p>
            })}
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
  nextQuestion: React.PropTypes.func.isRequired
}
