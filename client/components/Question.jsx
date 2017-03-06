import React from 'react';

export default class Question extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>{this.props.title}</h2>
            <p className="lead">{this.props.body}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <form action="">
            {
              this.props.answers.map(function(answer) {
                return <p className="lead">{answer}</p>
              })
            }
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
