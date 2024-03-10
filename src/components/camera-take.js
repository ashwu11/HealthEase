// CameraComponent.js
import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

function CameraComponent() {
    const webcamRef = useRef(null);
    const [imgSrc, setImgSrc] = useState(null); // State to store the URL of the captured image

    const capture = () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc); // Update the state with the URL of the captured image
        console.log(imageSrc);
    };


    return (
        <div>

            {imgSrc ? (
                <img src={imgSrc} alt="webcam" />
            ) : (
                <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    style={{ width: '75vw', height: '50vw' }}
                />
            )}
            <div>
                <button className='sign-up-button'
                    onClick={capture}>Capture Photo</button>
            </div>
        </div>
    );
}

export default CameraComponent;
