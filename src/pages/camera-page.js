import React from 'react';
import ImageGrid from '../components/logo';
import PersonIcon from '../components/person-icon';
import MicIcon from '../components/mic-icon';
import CameraIcon from '../components/camera-icon';
import ClipboardIcon from '../components/clipboard-icon';
import XIcon from '../components/x-icon';

function CameraPage() {
    return (

        <header>
            <div class="Button-row">
                <XIcon />

                <h1 className='h1'>
                    Camera
                </h1>
                <CameraIcon style={{ size: '30%' }} />

            </div>

        </header>

        //         {/* <h2>
        //             <XIcon />
        //         </h2> */}

        // {/* <h1>My App</h1>
        //         <ImageGrid />

        //         <h2>trial icon</h2>
        //         <PersonIcon />

        //         <h2>mic icon</h2>
        //         <MicIcon />

        //         <h2>camera icon</h2>
        //         <CameraIcon />

        //         <h2>clipboard icon</h2>
        //         <ClipboardIcon /> */}
    );
};

export default CameraPage;