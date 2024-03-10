import React from 'react';
import XIcon from '../components/x-icon';
import MicIcon from '../components/mic-icon';
import { useNavigate } from 'react-router-dom';

function AudioPage() {
  const navigate = useNavigate();

  return (
    <div className='Page'>
      <div className='flex-header-name' >
        <div onClick={() => navigate('/home')}> <XIcon /></div>

        <h1 className='h1'>
          Translate
        </h1>

        <div className='icon-qualities' style={{ width: '5vw', height: '5vw' }} >
          <MicIcon />
        </div>

      </div>

      <div>
        <button> </button>
      </div>

    </div>
  );
};

export default AudioPage;