import React from 'react';
import ImageGrid from '../components/logo';
import PersonIcon from '../components/person-icon';
import MicIcon from '../components/mic-icon';
import CameraIcon from '../components/camera-icon';
import ClipboardIcon from '../components/clipboard-icon';

function CameraPage() {
    return (
        <div>
            <h1>My App</h1>
            <ImageGrid />

            <h2>trial icon</h2>
            <PersonIcon />

            <h2>mic icon</h2>
            <MicIcon />

            <h2>camera icon</h2>
            <CameraIcon />

            <h2>clipboard icon</h2>
            <ClipboardIcon />
        </div>
    );
};

export default CameraPage;