import React from 'react';
import XIcon from '../components/x-icon';
import MicIcon from '../components/mic-icon';

function AudioPage() {

  return (
    <div className='AudioPage'>
      <div className='flex-header-name' >
        <XIcon />
        <h1 className='h1'>
          Translate
        </h1>

        <div className='icon-qualities' style={{ width: '5vw', height: '5vw' }} >
          <MicIcon />
        </div>

      </div>
    </div>
  );
};

export default AudioPage;