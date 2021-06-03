
import './App.css';

import {useEffect} from 'react';

import {useDispatch} from 'react-redux';

import {loadGames} from './actions/gamesAction'

function App() {
  
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(loadGames());
  })

  return (
    <div className="App">
      <h1>REACT REDUX</h1>
    </div>
  );
}

export default App;
