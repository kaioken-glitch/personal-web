//function to remove a div of class name  userNameCollector div when user name is entered in the input field and the button with id submitUserName is clicked evaluating the input value
function removeUserNameCollector() {
  const userNameCollector = document.querySelector('.userNameCollector');
  const userNameInput = document.querySelector('#userNameInput');
  const submitUserNameButton = document.querySelector('#submitUserName');

  submitUserNameButton.addEventListener('click', () => {
    if (userNameInput.value.trim() !== '') {
      userNameCollector.remove();
    } else {
      alert('Please enter a valid username.');
    }
  });
}
// Call the function to set up the event listener
removeUserNameCollector();

//function to pass collected name into element with id visitor
function displayVisitorName() {
  const userNameInput = document.querySelector('#userNameInput');
  const visitorElement = document.querySelector('#visitor');

  userNameInput.addEventListener('input', () => {
    visitorElement.textContent = userNameInput.value.trim();
  });
}
// Call the function to set up the input event listener
displayVisitorName();

//function to append visitorDiv for each page visitor into the element with class name  visitorList and append for each visitor the name, time spent and visit date
function appendVisitorDiv() {
  const visitorList = document.querySelector('.visitorList');
  const userNameInput = document.querySelector('#userNameInput');
  const submitUserNameButton = document.querySelector('#submitUserName');   

  submitUserNameButton.addEventListener('click', () => {
    const userName = userNameInput.value.trim();
    if (userName !== '') {
      const visitorDiv = document.createElement('div');
      visitorDiv.classList.add('visitorDiv');
      visitorDiv.innerHTML = `
        <p class="userName">${userName}</p>
        <p class="timeSpent">${new Date().toLocaleTimeString()}</p>
        <p class="visitDate">${new Date().toLocaleDateString()}</p>
      `;
      visitorList.appendChild(visitorDiv);
    }
  });
}

//function to log user name of visitor to page in a json file called visitor.json and then use the stored data to display the collected names in elements of the following class names userName,timeSpent and visitDate
function logVisitorName() {
  const userNameInput = document.querySelector('#userNameInput');
  const submitUserNameButton = document.querySelector('#submitUserName');

  submitUserNameButton.addEventListener('click', () => {
    const userName = userNameInput.value.trim();
    if (userName !== '') {
      const visitorData = {
        name: userName,
        timeSpent: new Date().toLocaleTimeString(),
        visitDate: new Date().toLocaleDateString()
      };

      // Simulate logging to a JSON file (in a real application, this would involve a server-side operation)
      console.log('Visitor Data:', JSON.stringify(visitorData));

      // Display the collected data
      document.querySelector('.userName').textContent = visitorData.name;
      document.querySelector('.timeSpent').textContent = visitorData.timeSpent;
      document.querySelector('.visitDate').textContent = visitorData.visitDate;
    } else {
      alert('Please enter a valid username.');
    }
  });
}
// Call the function to set up the logging
logVisitorName();
//function to display the current date and time in the element with id currentDateTime
function displayCurrentDateTime() {
  const currentDateTimeElement = document.querySelector('#currentDateTime');
  const now = new Date();

  // Format the date and time
  const formattedDate = now.toLocaleDateString();
  const formattedTime = now.toLocaleTimeString();

  currentDateTimeElement.textContent = `Current Date: ${formattedDate}, Current Time: ${formattedTime}`;
}
// Call the function to display the current date and time
displayCurrentDateTime();

//function to display the current date and time in the element with id currentDateTime every second
function updateCurrentDateTime() {
  const currentDateTimeElement = document.querySelector('#currentDateTime');

  setInterval(() => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();

    currentDateTimeElement.textContent = `Current Date: ${formattedDate}, Current Time: ${formattedTime}`;
  }, 1000);
}
// Call the function to update the current date and time every second
updateCurrentDateTime();

