//initialize elements we'll use
const recordButton = document.getElementById('recordButton');
const recordButtonImage = recordButton.firstElementChild;
const recordedAudioContainer = document.getElementById('recordedAudioContainer');
const discardAudioButton = document.getElementById('discardButton');
const saveAudioButton = document.getElementById('saveButton');

let chunks = []; //will be used later to record audio
let mediaRecorder = null; //will be used later to record audio
let audioBlob = null; //the blob that will hold the recorded audio

function record() {
    //check if browser supports getUserMedia
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert('Your browser does not support recording!');
        return;
    }

    // browser supports getUserMedia
    // change image in button
    recordButtonImage.src = `/images/${mediaRecorder && mediaRecorder.state === 'recording' ? 'microphone' : 'stop'}.png`;
    if (!mediaRecorder) {
        // start recording
        navigator.mediaDevices.getUserMedia({
        audio: true,
        })
        .then((stream) => {
            mediaRecorder = new MediaRecorder(stream);
            mediaRecorder.start();
            mediaRecorder.ondataavailable = mediaRecorderDataAvailable;
            mediaRecorder.onstop = mediaRecorderStop;
        })
        .catch((err) => {
            alert(`The following error occurred: ${err}`);
            // change image in button
            recordButtonImage.src = '/images/microphone.png';
        });
    } else {
        // stop recording
        mediaRecorder.stop();
    }
  }

  recordButton.addEventListener('click', record);

  function mediaRecorderDataAvailable(e) {
    chunks.push(e.data);
  }

  function mediaRecorderStop () {
    //check if there are any previous recordings and remove them
    if (recordedAudioContainer.firstElementChild.tagName === 'AUDIO') {
      recordedAudioContainer.firstElementChild.remove();
    }
    //create a new audio element that will hold the recorded audio
    const audioElm = document.createElement('audio');
    audioElm.setAttribute('controls', ''); //add controls
    //create the Blob from the chunks
    audioBlob = new Blob(chunks, { type: 'audio/mp3' });
    const audioURL = window.URL.createObjectURL(audioBlob);
    audioElm.src = audioURL;
    //show audio
    recordedAudioContainer.insertBefore(audioElm, recordedAudioContainer.firstElementChild);
    recordedAudioContainer.classList.add('d-flex');
    recordedAudioContainer.classList.remove('d-none');
    //reset to default
    mediaRecorder = null;
    chunks = [];
  }

  function discardRecording () {
    //show the user the prompt to confirm they want to discard
    if (confirm('Are you sure you want to discard the recording?')) {
      //discard audio just recorded
      resetRecording();
    }
  }

  function resetRecording () {
    if (recordedAudioContainer.firstElementChild.tagName === 'AUDIO') {
      //remove the audio
      recordedAudioContainer.firstElementChild.remove();
      //hide recordedAudioContainer
      recordedAudioContainer.classList.add('d-none');
      recordedAudioContainer.classList.remove('d-flex');
    }
    //reset audioBlob for the next recording
    audioBlob = null;
  }

  //add the event listener to the button
  discardAudioButton.addEventListener('click', discardRecording);

  function saveRecording () {
    //the form data that will hold the Blob to upload
    const formData = new FormData();
    //add the Blob to formData
    formData.append('audio', audioBlob, 'recording.mp3');
    //send the request to the endpoint
    fetch('/record', {
      method: 'POST',
      body: formData
    })
    .then((response) => response.json())
    .then(() => {
      alert("Your recording is saved");
      //reset for next recording
      resetRecording();
      //TODO fetch recordings
    })
    .catch((err) => {
      console.error(err);
      alert("An error occurred, please try again later");
      //reset for next recording
      resetRecording();
    })
  }

  //add the event handler to the click event
  saveAudioButton.addEventListener('click', saveRecording);