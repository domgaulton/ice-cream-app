import React, {useState, useEffect} from 'react';
import Loading from './Loading';
import axios from 'axios';
import './App.css';

function App() {
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios
      .get('https://ice-creams-api.herokuapp.com/')
      .then(response => {
        setList(response.data)
        const timer = setTimeout(() => {
          setIsLoaded(true)
        }, 1200);
        return () => clearTimeout(timer);
      })
      .catch(error => console.log(error))
      .then(function () {
        // always executed
    });
  }, []);

  useEffect(() => {
    const sortArray = key => {
      let sort = key
      if (key === 'reset') {
        sort = 'date';
      }
      const sorted = [...list].sort((a, b) => b[sort] < a[sort] ? -1 : b[sort] > a[sort] ? 1 : 0);
      if ( key === 'name' || key === 'reset' ) {
        console.log('reset')
        sorted.reverse();
      }
      setList(sorted);
    };

    sortArray(filter);

  }, [filter, setList]);



  const updateFilter = e => {
    const sortType = e.target.dataset.filterType
    setFilter(sortType)
  }

  return isLoaded ? (
    <div className="App">
      <header>
        <h1>Quarnatine Ice Cream Challenge</h1>
        <p><b>Total</b> {list.length}</p>
        <div className="header-buttons">
          <button data-filter-type="reset" onClick={(e) => updateFilter(e)}>Reset</button>
          <button data-filter-type="name" onClick={(e) => updateFilter(e)}>A-Z</button>
          <button data-filter-type="date" onClick={(e) => updateFilter(e)}>Recent</button>
          <button data-filter-type="rating" onClick={(e) => updateFilter(e)}>Favourite</button>
        </div>
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
              <h4>{item.name} ({item.brand})</h4>
              <p><b>Rating:</b> {item.rating}</p>
              <p><b>DG Says:</b> {item.tasting_notes}</p>
              <p className="meta">{item.brand}</p>
              <p className="meta"><b>Scoff Date:</b> {date}</p>
              <div className="category">
                {item.categories.map(category => {
                  return <span key={category}>{category}</span>
                })}
              </div>
            </div>
            </div>
          )
        })}
      </main>
    </div>
  ) : <Loading />;
}

export default App;
