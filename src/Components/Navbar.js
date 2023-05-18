import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Images/clipart2355890.png';
import axios from 'axios';
import { useGlobalContext } from '../Context/context';

const API_ENDPOINT = 'https://ticket-booking-app-backend.onrender.com/api/v1/booking';

const Navbar = () => {
    const [value, setValue] = useState();
    const { data, isLoadong, setData } = useGlobalContext();
    //console.log(value)

    const handleClick =async () => {
        const response = await axios.post(API_ENDPOINT, {seats : value});
        setData(response.data.data);
    }

  return (
    <div className='header' >
      {/* Input */}
      {/* button */}

        <div className="header__logo">
            <img src={logo} alt="" className='header__logoImage' />
            <a href="/" className='header__logoName' >Book a Seat</a>
        </div>

        <div className="header__post">
            <input type="text" className='header__input' onChange={(e) => {setValue(e.target.value)}}  />
            <button className='header__submit' onClick={handleClick} >Book Now!!!</button>
        </div>

    </div>
  )
}

export default Navbar


