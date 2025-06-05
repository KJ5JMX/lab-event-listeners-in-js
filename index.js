// Handle Button Clicks
document.addEventListener('DOMContentLoaded', () => { 
  document.body.style.backgroundColor = 'white'

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange']
  const randomColor = colors[Math.floor(Math.random() * colors.length)]
  document.body.style.backgroundColor = randomColor
}
const button = document.getElementById('changeColorButton');
button.addEventListener('click', changeBackgroundColor);
document
  .getElementById('changeColorButton')
  .addEventListener('click', changeBackgroundColor)


// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  document.body.style.backgroundColor = 'white'
  document.getElementById('textInput').value = '' // Clear the text input
  document.getElementById('keyDisplay').textContent = '' // Clear the key display
}
// Attach event listener to reset background color when the body is double-clicked
document
  .getElementById('resetColorButton')
  .addEventListener('dblclick', resetBackgroundColor)

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  const keyDisplay = document.getElementById('keyPressDisplay')
  keyDisplay.textContent = `You pressed: ${event.key}`
  // Optionally, you can also log the key to the console
  console.log(`Key pressed: ${event.key}`)
  
}
document.addEventListener('keydown', displayKeyPress);

// Process Text Input

// Function to display user input in real-time
function displayUserInput() {
  const textInput = document.getElementById('textInput')
  const textInputDisplay = document.getElementById('textInputDisplay')
  textInputDisplay.textContent = `You typed: ${textInput.value}`
  // Optionally, you can also log the input to the console
  console.log(`User input: ${textInput.value}`)
}
// Attach event listener to display user input in real-time as they type
document.getElementById('textInput').addEventListener('input', displayUserInput)

//type the color of the background color you want in the text input field
function displayUserInput() {
  const textInput = document.getElementById('textInput');
  const textInputDisplay = document.getElementById('textInputDisplay');
  const value = textInput.value.toLowerCase();

  textInputDisplay.textContent = `You typed: ${value}`;

  const validColors = ['black','red', 'green', 'blue', 'yellow', 'purple', 'orange', 'white'];
  if (validColors.includes(value)) {
    document.body.style.backgroundColor = value;
  }
}

//changing the background color button to the color that the background is 
function changeBackgroundColor() {
  const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  document.body.style.backgroundColor = randomColor;

  const button = document.getElementById('changeColorButton');
  button.style.backgroundColor = randomColor;
  button.style.color = (randomColor === 'yellow') ? 'black' : 'white';
}

// Attach Event Listeners

// Attach event listener to change background color when the button is clicked




// Attach event listener to display key pressed when a key is pressed down



});