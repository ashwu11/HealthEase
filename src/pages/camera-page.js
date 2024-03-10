import React from 'react';
import ImageGrid from '../components/logo';
import PersonIcon from '../components/person-icon';
import MicIcon from '../components/mic-icon';
import CameraIcon from '../components/camera-icon';
import ClipboardIcon from '../components/clipboard-icon';
import XIcon from '../components/x-icon';
import CameraComponent from '../components/camera-take';




function CameraPage() {
    return (
        <div className='CameraPage'>

            <div className='flex-header-name' >
                <XIcon />
                <h1 className='h1'>
                    Camera
                </h1>

                <div className='icon-qualities' style={{ width: '5vw', height: '5vw' }} >
                    <CameraIcon />
                </div>

            </div>

            <div>
                <CameraComponent />
            </div>



        </div>

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