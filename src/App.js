import './App.css';
import axios from 'axios';
import React from 'react';
import {useState,useEffect} from 'react' 

function App() {

  const [data, setData] = useState();



  return (
    <div className="App">
      <header className="App-header">
      <button>
        Log In with Spotify
      </button>
      
      </header>
    </div>
  );
}

export default App;