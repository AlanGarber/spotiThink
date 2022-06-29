import './App.css';
import axios from 'axios';
import React from 'react';
import {useState,useEffect} from 'react' 
import {logIn} from './axiosClient.js'

function App() {

  const [data, setData] = useState();



  return (
    <div className="App">
      <header className="App-header">
      <button onClick={logIn}>
        Log In with Spotify
      </button>
      
      </header>
    </div>
  );
}

export default App;