import React, { useState, useEffect } from 'react';
import './App.css';
import ReactFCCtest from 'react-fcctest';
import ReactMarkdown from 'react-markdown';

const INITIAL_MARKDOWN = `# H1 header  
## H2 sub header  
[react-markdown](https://github.com/remarkjs/react-markdown)  
This is an inline code: \`import { useState, useEffect } from 'react'\`  
\`\`\`
// Multi-line code block!!:

const App = () => {
  const [message, setMessage] = useState();
  useEffect = (() => {
    setMessage('React Hooks are awesome.')
  }, [])

  return (
    <h1>{message}</h1>
  );
}
\`\`\`
* Mandatory list item  
> Mandatory block quote  

![](https://raw.githubusercontent.com/khoaHyh/portfolio-v2/master/static/portfolio-v2-screenshot.png)  
**Mandatory Bold Text!**
`;

const App = () => {
  const [textValue, setTextValue] = useState();
  const [markdown, setMarkdown] = useState(`${INITIAL_MARKDOWN}`);

  // On page load, display initial markdown
  useEffect(() => {
    setTextValue(INITIAL_MARKDOWN);
  }, []);

  // Uses textarea input and passes the value to function that handles markdown state
  const handleChange = (event) => {
    setTextValue(event.target.value);
    setMarkdown(`${event.target.value}`);
  }

  return (
    <div className="App">
      <ReactFCCtest />
      <textarea id="editor" type="text" value={textValue} onChange={handleChange}></textarea>
      <div id="preview">
        <ReactMarkdown children={markdown} />
      </div>
    </div>
  );
}

export default App;
