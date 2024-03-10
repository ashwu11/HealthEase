function createCircularButton() {
    // Create button element
    const button = document.createElement('button');

    // Set button attributes and styles
    button.classList.add('circular-button');
    button.innerHTML = '<i class="fas fa-microphone"></i>';

    // Append button to the body or any desired container
    document.body.appendChild(button);
}

// Call the function to create the circular button
createCircularButton();