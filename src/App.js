import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div id="quote-box">
        <div id="text">Never give up!</div>
        <div id="author">--Winston Churchill</div>
        <button id="new-quote"></button>
        <a id="tweet-quote" href="twitter.com/intent/tweet"></a>
      </div>
    </div>
  );
}

export default App;
