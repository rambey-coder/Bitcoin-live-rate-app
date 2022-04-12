import React from 'react'
import './Coin.css'

const Coin = ({ name, image, symbol, price, volume, priceChange, marketcap }) => {
  return (
    <div className="coin-container">
        <div className="coin-row">

            <div className="coin">
                <img src={image} alt="crypto" />
                <div>
                <h1>{name}</h1>
                <p className="coin-symbol">{symbol}</p>
                </div>
            </div>

            <div className="coin-data">
                <p className="coin-price">${price}</p>
                    <div className='datas'>
                        <p className="coin-volume">
                        <span className='small-text'>VOL </span>
                            ${volume.toLocaleString()}</p>
                        {
                            priceChange < 0 ? (
                                <p className='coin-percent reds'>
                                    <span className='small-text'>CHG </span>  
                                    {priceChange.toFixed(2)}%</p>
                            ) : (
                                <p className='coin-percent grens'>
                                    <span className='small-text'>CHG </span>
                                    {priceChange.toFixed(2)}%</p>
                            )}

                            <p className="coin-marketcap">
                                <span className='small-text'>Mkt Cap:</span> 
                                ${marketcap.toLocaleString()}
                            </p>
                        </div>
            </div>
        </div>
    </div>
  )
}

export default Coin