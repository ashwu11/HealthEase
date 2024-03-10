import React from 'react';
import ImageGrid from '../components/logo';
import CameraIcon from '../components/camera-icon';
import MicIcon from '../components/mic-icon';
import ClipboardIcon from '../components/clipboard-icon';
import PersonIcon from '../components/person-icon';

function Home() {
  return (
    <div className='HomePage'>
      <h1>Home page start</h1>
      <ImageGrid/>

      <div>
        <h1 className='Title'>Health Ease</h1>
        <h3>Health made for everyone</h3>
      </div>

      <div className='Button-grid'>
        <div className='Button-row'>
          <CameraIcon/>
          <MicIcon/>
        </div>
        <div className='Button-row'>
          <PersonIcon/>
          <ClipboardIcon/>
        </div>

      </div>

      <h1>Home page end</h1>
    </div>
  );
};

export default Home;