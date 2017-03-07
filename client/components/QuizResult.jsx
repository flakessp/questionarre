import React from 'react';

export default class Result extends React.Component {
  render(){
    return (
      <div>
        Правильных ответов {this.props.correct} из {this.props.total}
      </div>
    )
  }
}

Result.propTypes = {
  correct: React.PropTypes.number.isRequired,
  total : React.PropTypes.number.isRequired
}
