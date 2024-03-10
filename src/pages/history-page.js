import React from 'react';
import XIcon from '../components/x-icon';
import { useNavigate } from 'react-router-dom';

function HistoryPage() {
    const navigate = useNavigate();

  return (
    <div className='Page'>
        <div className='search-page-top'>
        <div onClick={() => navigate('/home')}><XIcon /></div>
        <h1 style={{margin: '5vw', marginLeft: '10vw'}}>History Page</h1>
        </div>
    </div>
  );
};

export default HistoryPage;