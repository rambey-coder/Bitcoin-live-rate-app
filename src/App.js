 import React, { useState, useEffect } from 'react'
 import './App.css';
 import axios from 'axios'
import Coin from './Coin';

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')

    .then (res => {
      setCoins(res.data);
    })

    .catch(err => alert('error in loading content'))
  },[]);

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filterCoins = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLocaleLowerCase())
    )

 window.setInterval('refresh()', 10000);

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>
        <form>
          <input type="text"
           className="coin-input"
           placeholder='Search'
           onChange={handleChange} />
        </form>
      </div>
    <div className='general-container'>
    {
      filterCoins.map(coin => {
        return (
          <Coin key={coin.id}
          name={coin.name}
          image={coin.image}
          symbol={coin.symbol}
          marketcap={coin.market_cap}
          price={coin.current_price}
          priceChange={coin.price_change_percentage_24h}
          volume={coin.total_volume}/>
        )
      })
    }
    </div>
    </div>
  );
}

export default App;
