import React, { useState, useEffect } from 'react';
import './App.css';
import ReactFCCtest from 'react-fcctest';
import ReactMarkdown from 'react-markdown';

const App = () => {
  const markdownVariable = useState();
  let markdown = markdownVariable[0];
  let setMarkdown = markdownVariable[1];

  useEffect(() => {
    setMarkdown('hello world')
  }, []);

  return (
    <div className="App">
    <ReactFCCtest />
    <textarea id="editor" type="text"></textarea>
    <div id="preview">
      <ReactMarkdown children={markdown} />
    </div>
    </div>
  );
}

export default App;
