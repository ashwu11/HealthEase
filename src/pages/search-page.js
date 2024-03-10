import React, { useState } from 'react';
import XIcon from '../components/x-icon';
import PersonIcon from '../components/person-icon';
import { useNavigate } from 'react-router-dom';

function SearchPage() {

    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState("How can we help?");

    const sendDataToServer = async () => {
        try {
          const response = await fetch('http://localhost:8000/send-data', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: inputValue }),
          });

          console.log(response);

          if (response.ok) {
            console.log('Data sent successfully');
          } else {
            console.error('Failed to send data to server');
          }
        } catch (error) {
          console.error('Error sending data to server:', error);
        }
      };
    
    function handleChange(e) {
        setInputValue(e.target.value);
    }

  return (
    <div className='Page'>
        <div className='search-page-top'>
            <div onClick={() => navigate('/home')}><XIcon/></div>
            <h1>Search Page</h1>
            <PersonIcon />
        </div>
        
        <div>
            <input className="search-bar" onChange={handleChange} value={inputValue}></input>
            <button onClick={sendDataToServer}>Enter</button>
        </div>
        
    </div>
  );
};

export default SearchPage;