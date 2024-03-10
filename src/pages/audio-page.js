import React from 'react';
import XIcon from '../components/x-icon';
import MicIcon from '../components/mic-icon';
import { useNavigate } from 'react-router-dom';
import MicButton from '../components/mic-button';

function AudioPage() {
  const navigate = useNavigate();

  return (
    <div className='Page'>
      <div className='page-top' >
        <div onClick={() => navigate('/home')}> <XIcon /></div>

        <h2 style={{ textAlign: 'left', fontSize: '8vw', marginLeft: '8vw', marginRight: '10vw' }}>Translate Page</h2>

      </div>

      <div>
        <div onClick={() => navigate('/home')}> <MicButton /> </div>
        <div>

        </div>
      </div>

    </div>
  );
};

export default AudioPage;