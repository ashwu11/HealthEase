import React from 'react';
import Logo from '../components/logo';
import CameraIcon from '../components/camera-icon';
import MicIcon from '../components/mic-icon';
import ClipboardIcon from '../components/clipboard-icon';
import PersonIcon from '../components/person-icon';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className='Page'>

      <div>
        <h1 className='Title'>Health Ease</h1>
        <h3 className='Description'>Health made easy for everyone</h3>
      </div>

      <div className='Button-grid'>
        <div className='Button-row'>
          <div onClick={() => navigate('/camera')}><CameraIcon /></div>
          <div onClick={() => navigate('/audio')}><MicIcon /></div>
        </div>
        <div className='Button-row'>
          <div onClick={() => navigate('/search')}><PersonIcon /></div>
          <div onClick={() => navigate('/history')}><ClipboardIcon /></div>
        </div>
      </div>

      <div className='home-footer'>
        <button className='sign-up-button'>No Account? Sign Up</button>
      </div>


    </div>
  );
};

export default HomePage;