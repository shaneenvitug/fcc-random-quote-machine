import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState();
  const [randomNumber, setRandomNumber] = useState(Math.ceil(Math.random() * 50));

  useEffect(
    () => {
      // Start it off by assuming the component is still mounted
      let mounted = true;

      const loadData = async () => {
        const response = await axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');
        // We have a response, but let's first check if component is still mounted
        if (mounted) {
          setData(response.data);
        }
      };
      loadData();

      return () => {
        // When cleanup is called, toggle the mounted variable to false
        mounted = false;
      };
    },
    []
  );

  if (!data) {
    return <div>Loading data...</div>;
  }

  function getRandomNumber () {
    setRandomNumber(Math.floor(Math.random() * data.quotes.length))
  }

  const currentQuote = data.quotes[randomNumber].quote;
  const currentAuthor = data.quotes[randomNumber].author;

  return (
    <div className = 'App'>
    {data && data.quotes &&
      <div id="quote-box">
          <div id="text"><p>{currentQuote}</p></div>
          <br />
          <div id="author">- {currentAuthor}</div>
          <br />
          <div id="flex-box">
            <a className="twitter-share-button" id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${currentQuote} - ${currentAuthor}`} target="_blank" title="Tweet this quote!">
              <div id="flex-box2"><img src="twitter.png" alt="twitter icon"/> <p><strong> Share</strong></p></div>
            </a>
            <button id="new-quote" onClick={getRandomNumber}><strong>New Quote</strong></button>
          </div>
      </div>
    }
    </div>
  );
}
export default App;
