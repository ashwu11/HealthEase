import React, { useState } from 'react';
import XIcon from '../components/x-icon';
import PersonIcon from '../components/person-icon';
import { useNavigate } from 'react-router-dom';

function SearchPage() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("How can we help?");
  var [serverResponse, setServerResponse] = useState(null); // State variable to store the server response

  const sendDataToServer = async () => {
    try {
      const response = await fetch('http://localhost:8000/send-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: inputValue }),
      });

      console.log(response.text);
  
      if (response.ok) {
        const data = await response.text(); // Retrieve the response as text
        console.log(data);
        setServerResponse(data); // Store the response in the state variable
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
        <div onClick={() => navigate('/home')}><XIcon /></div>
        <h1>Search Page</h1>
        <PersonIcon />
      </div>

      <div>
        <input className="search-bar" onChange={handleChange} value={inputValue}></input>
        <button onClick={sendDataToServer}>Enter</button>
      </div>

      {/* Display the server response as text */}
      {serverResponse && (
        <div>
            <h2>Server Response:</h2>
            <p>{serverResponse}</p>
        </div>
        )}

    </div>
  );
}

export default SearchPage;
