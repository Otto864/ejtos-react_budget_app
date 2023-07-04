import React, { useContext, useState } from 'react';
import { TiThLarge } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { selectedCurrency } = useContext(AppContext);
    return (
        <div>
        <div className='alert alert-secondary' style={{ 
            backgroundColor: '#b3ffb3',
            color: 'white',
            display: 'inline-block',
            fontSize: '1.5em'
        }}>
            <span>Currency{selectedCurrency}</span>
        </div>
        <div className='alert alert-secondary' style={{
            display: 'block',
            position: 'absolute',
            backgroundColor: '#b3ffb3',
            fontSize: '1.2em',
            padding: '12px 16px'
        }}>

        <select className="custom-select" id="inputGroupSelect04" onChange={(event) => setAction(event.target.value)}>
            <option defaultValue value="£ Pound" name="Pound">£ Pound</option>
            <option value="$ Dollar" name="Dollar">$ Dollar</option>
            <option value="€ Euro" name="Euro">€ Euro</option>
            <option value="₹ Ruppee" name="Ruppee">₹ Ruppee</option>
        </select>
        </div>
        </div>
    );
};
export default Currency;
