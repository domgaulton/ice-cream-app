import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [list, createList] = useState([]);

  useEffect(() => {
    // Make a request for a user with a given ID
    axios
      .get('https://ice-creams-api.herokuapp.com/')
      .then(response => createList(response.data))
      .catch(error => console.log(error))
      .then(function () {
        // always executed
    });
  }, []);

  return (
    <div className="App">
      {list.map(item => {
        return (
          <div className="ice-cream-card">
            <h4>Name: {item.name}</h4>
            <p>Rating: {item.rating}</p>
            <img src={item.image} alt='alt'/>
            <p>DG Says: {item.tasting_notes}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
