import React from 'react';
import ImageGrid from '../components/logo';
import CameraIcon from '../components/camera-icon';
import MicIcon from '../components/mic-icon';
import ClipboardIcon from '../components/clipboard-icon';
import PersonIcon from '../components/person-icon';

function HomePage() {
  return (
    <div className='HomePage'>

      <ImageGrid />

      <div>
        <h1 className='Title'>Health Ease</h1>
        <h3 className='Description'>Health made easy for everyone</h3>
      </div>

      <div className='Button-grid'>
        <div className='Button-row'>
          <CameraIcon />
          <MicIcon />
        </div>
        <div className='Button-row'>
          <PersonIcon />
          <ClipboardIcon />
        </div>
      </div>

      <div className='home-footer'>
        <p>No Account?</p>
        <p className='sign-up-button'>Sign Up</p>
      </div>


    </div>
  );
};

export default HomePage;