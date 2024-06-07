function rollDice() {
const cube = document.getElementById('cube');

// Generate a random number between 1 and 6
const randomNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

// Update the number box with the rolled number after rolling
setTimeout(() => {
document.getElementById('number').innerText = randomNumber;
},3000);

// Randomly rotate the cube to simulate rolling for 3 seconds
cube.style.transition = 'transform 4s';
cube.style.transform = 'rotateX(' + (Math.random() * 1800 + 360) + 'deg) rotateY(' + (Math.random() * 1800 + 360) + 'deg)';
}
