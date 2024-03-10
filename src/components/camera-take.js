// CameraComponent.js
import React, { useRef } from 'react';
import Webcam from 'react-webcam';

function CameraComponent() {
    const webcamRef = useRef(null);

    const capture = () => {
        const imageSrc = webcamRef.current.getScreenshot();
        // Do something with the captured image
        console.log(imageSrc);
    };

    return (
        <div>
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                style={{ width: '100%', height: 'auto' }}
            />
            <button onClick={capture}>Capture Photo</button>
        </div>
    );
}

export default CameraComponent;
