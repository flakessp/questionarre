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
              <p className="lead">Вариант 1</p>
              <p className="lead">Вариант 2</p>
              <p className="lead">Вариант 3</p>
              <p className="lead">Вариант 4</p>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
