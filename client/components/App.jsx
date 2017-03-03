import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Вопрос</h2>
            <p className="lead">Тело вопроса</p>
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
