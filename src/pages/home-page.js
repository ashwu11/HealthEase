import React from 'react';
import ImageGrid from '../components/logo';
import Button from '../components/button';

function Home() {
  return (
    <div className='HomePage'>
      <h1>Home page start</h1>
      <ImageGrid/>

      <div className='Title'>
        <h1 className='Name'>Health Ease</h1>
        <p>Health made for everyone</p>
      </div>

      <div className='Button-grid'>
        <div className='Button-row'>
          <Button/>
          <Button/>
        </div>
        <div className='Button-row'>
          <Button/>
          <Button/>
        </div>

      </div>

      <h1>Home page end</h1>
    </div>
  );
};

export default Home;