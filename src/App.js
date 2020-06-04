import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [list, createList] = useState([]);
  const [filter, setFilter] = useState('')

  useEffect(() => {
    // Make a request for a user with a given ID
    axios
      .get(`https://ice-creams-api.herokuapp.com/${filter}`)
      .then(response => createList(response.data))
      .catch(error => console.log(error))
      .then(function () {
        // always executed
    });
  }, [filter]);

  const updateFilter = e => {
    const filterType = e.target.dataset.filterType
    console.log(e.target.dataset.filterType)
    setFilter(filterType)
  }

  return (
    <div className="App">
      <header>
        <h1>Quarnatine Ice Cream Challenge</h1>
        <p><b>Total</b> {list.length}</p>
        <button data-filter-type="" onClick={(e) => updateFilter(e)}>Reset</button>
        <button data-filter-type="recent" onClick={(e) => updateFilter(e)}>Recent</button>
        <button data-filter-type="worst" onClick={(e) => updateFilter(e)}>Worst</button>
        <button data-filter-type="favourite" onClick={(e) => updateFilter(e)}>Favourite</button>
      </header>
      <main>
        {list.length && list.map((item, index) => {

          const date = item.date.split('T')[0]
          return (
            <div
              key={`${item.name}-${index}`}
              className="ice-cream-card"
            >
            <div className="ice-cream-card__image">
              <img src={item.image} alt='alt'/>
            </div>
            <div className="ice-cream-card__text">
              <h4><b>Name:</b> {item.name}</h4>
              <p><b>Rating:</b> {item.rating}</p>
              <p><b>DG Says:</b> {item.tasting_notes}</p>
              <p className="meta"><b>Website</b> <a href="{item.url}">{item.name}</a></p>
              <p className="meta"><b>Scoff Date:</b> {date}</p>
            </div>
            </div>
          )
        })}
      </main>
    </div>
  );
}

export default App;
