import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

const QUESTIONS = [
  {
    id: 1,
    title: "Какой атрибут указывает на путь к файлу для тега <img>",
    variants: [
      'alt', 'href', 'link', 'src'
    ]
  },
  {
    id: 2,
    title: "Что из следующего является ненумерованным списком?",
    variants: [
      '<ol>', '<ul>', '<a>', '<li>'
    ]
  },
]

ReactDOM.render(<App questions={QUESTIONS}/>, document.getElementById('root'));
