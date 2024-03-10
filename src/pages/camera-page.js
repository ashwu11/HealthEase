import React, { useState } from 'react';
import Logo from '../components/logo';
import PersonIcon from '../components/person-icon';
import MicIcon from '../components/mic-icon';
import CameraIcon from '../components/camera-icon';
import ClipboardIcon from '../components/clipboard-icon';
import XIcon from '../components/x-icon';
import CameraComponent from '../components/camera-take';
import setImgSrc from '../components/camera-take';
import TextBubble from '../components/text-bubble';
import { useNavigate } from 'react-router-dom';



function CameraPage() {
    const navigate = useNavigate();
    const [dataFromChild, setDataFromChild] = useState(null);
    var [serverResponse, setServerResponse] = useState(null); // State variable to store the server response
    const [isLoading, setIsLoading] = useState(false);

    const sendDataToServer = async (data) => {
        debugger;
        try {
            setIsLoading(true);
    
          const response = await fetch('http://localhost:8080/send-data', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data : dataFromChild}),
          });
    
          console.log(response.text);
      
          if (response.ok) {
            const data = await response.text(); // Retrieve the response as text
            console.log(data);
            setServerResponse(data); // Store the response in the state variable
            console.log('Data sent successfully');
          } else {
            console.error('Failed to send data to server');
          }
        } catch (error) {
          console.error('Error sending data to server:', error);
        } finally {
            setIsLoading(false);
        }
      };

    // Callback function to receive data from the child
    const handleDataFromChild = (data) => {
        console.log('Received data from child:', data);
        sendDataToServer(data);
    };
    
    return (
        <div className='Page'>

            <div className='flex-header-name' >
                <div onClick={() => navigate('/home')}><XIcon/></div>
                <h1 className='h1'>
                    Camera
                </h1>

                <div className='icon-qualities' style={{ width: '5vw', height: '5vw' }} >
                    <CameraIcon />
                </div>

            </div>


            <div>
                <CameraComponent onDataFromChild={handleDataFromChild} />
            </div>

            <div>
                {/* change text to be ai returning */}
                <TextBubble text="Hello, this is a text bubble!" />
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