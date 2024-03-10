// CameraComponent.js
import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

function CameraComponent() {
    const webcamRef = useRef(null);
    const [imgSrc, setImgSrc] = useState(null); // State to store the URL of the captured image

    const capture = () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc); // Update the state with the URL of the captured image
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
                    style={{ width: '100%', height: 'auto' }}
                />
            )}
            <button onClick={capture}>Capture Photo</button>
        </div>
    );
}

export default CameraComponent;
