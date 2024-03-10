import React, { useState } from 'react';

function SearchPage() {

    let [input, setInput] = useState("How can we help?");
    
    function handleClick() {
        alert(input);

    }

    function handleChange(e) {
        setInput(e.target.value);
    }

  return (
    <div className='search-page'>
        <h1>Search Page</h1>
        <input onChange={handleChange} value={input}></input>
        <button onClick={handleClick}>Enter</button>
    </div>
  );
};

export default SearchPage;