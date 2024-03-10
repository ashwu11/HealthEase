import React, { useState } from 'react';
import XIcon from '../components/x-icon';
import PersonIcon from '../components/person-icon';
import { useNavigate } from 'react-router-dom';

function SearchPage() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("How can we help?");
  var [serverResponse, setServerResponse] = useState(null); // State variable to store the server response
  const [isLoading, setIsLoading] = useState(false);

  const sendDataToServer = async () => {
    try {
        setIsLoading(true);
        const message = inputValue + " Summarize it in 3 sentences.";

      const response = await fetch('http://localhost:8000/send-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: message}),
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
    } finally {
        setIsLoading(false);
    }
  };
  
  function handleChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <div className='SearchPage'>
      <div className='search-page-top'>
        <div onClick={() => navigate('/home')}><XIcon /></div>
        <h2 style={{ textAlign: 'left', fontSize: '8vw', marginLeft: '8vw', marginRight: '10vw'}}>Search Page</h2>
      </div>

      <div>
        <input className="search-bar" onChange={handleChange} value={inputValue}></input>
        <button className="search-enter" onClick={sendDataToServer}>Enter</button>
      </div>

      {/* Display the loading indicator */}
      {isLoading && <p className='search-response'>Loading...</p>}

      {/* Display the server response as text */}
      {serverResponse && (
        <div className='search-response'>
            <h2 style={{fontSize: '6vw'}}>Answer: </h2>
            <p style={{fontSize: '3vw'}}>{serverResponse}</p>
        </div>
        )}

    </div>
  );
}

export default SearchPage;
