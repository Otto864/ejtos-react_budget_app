import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { dispatch } = useContext(AppContext);
    const changeCurrency = (value) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: value,
        })
    }

    return (
        <div>
        <div className='alert alert-secondary' style={{ 
            backgroundColor: '#b3ffb3',
            color: 'white',
            display: 'inline-block',
            fontSize: '1.5em',
        }}>
            <span>Currency 
        <select name="Currency" id="CurrencyDropdown" onChange={(event) => changeCurrency(event.target.value)} style={{ 
            backgroundColor: '#b3ffb3',
            color: 'white',
            display: 'inline-block',
            fontSize: '1.1em',
            borderColor: '#b3ffb3',
            
            }}>
            <option value="£" name="Pound">£ Pound</option>
            <option value="$" name="Dollar">$ Dollar</option>
            <option value="€" name="Euro">€ Euro</option>
            <option value="₹" name="Ruppee">₹ Ruppee</option>
        </select></span>
        </div>
        </div>
    );
};
export default Currency;
