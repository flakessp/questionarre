import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

const QUESTIONS = [
  {
    title: "Какой атрибут указывает на путь к файлу для тега <img>",
    variants: [
      'alt', 'href', 'link', 'src'
    ]
  },
  {
    title: "Что из следующего является ненумерованным списком?",
    variants: [
      '<ol>', '<ul>', '<a>', '<li>'
    ]
  },
]

ReactDOM.render(<App questions={QUESTIONS} body="тело вопроса"/>, document.getElementById('root'));
