import React from "react";
import ReactDOM from "react-dom";
import { useEffect, useState } from 'react';
import Meme from './components/Meme';
import Templates from './components/Template';
import './App.css';

const App = () => {
  const [templates, setTemplates] = useState([]);
  const [meme, setMeme] = useState(null);

  async function fetchAPI() {
    var res = await fetch("https://api.imgflip.com/get_memes");
    var data = await res.json();
    console.log(data.data.memes);
    setTemplates(data.data.memes);
  }

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div>
      <h1>Meme Generator App</h1>
      {meme === null ? (
        <Templates templates={templates} setMeme={setMeme} />
      ) : (
        <Meme meme={meme} setMeme={setMeme} />
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));