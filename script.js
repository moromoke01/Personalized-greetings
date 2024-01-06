document.addEventListener('DOMContentLoaded', function () {
    const nameForm = document.getElementById('nameForm');
    const greetingText = document.getElementById('greetingText');
    const clearNameButton = document.getElementById('clearName');
    const inputName = document.getElementById("name");

    // Check if the user's name is stored in local storage
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      greetingText.textContent = `Hello, ${storedName}!`;
    }

    // Submit event listener for the name form
    nameForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const userName = document.getElementById('name').value;

      // Store the user's name in local storage
      localStorage.setItem('userName', userName);

      inputName.value = " ";


      // Update the greeting
      greetingText.textContent = `Hello, ${userName}!`;
    });

    // Clear name event listener
    clearNameButton.addEventListener('click', function () {
      // Remove the user's name from local storage
      localStorage.removeItem('userName');
      
      // Update the greeting to the default
      greetingText.textContent = 'Hello, guest!';
    });
  });