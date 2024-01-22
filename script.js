//your code here
document.addEventListener('DOMContentLoaded', function () {
  // Get clock hands elements
  const hourHand = document.querySelector('.hour-hand');
  const minHand = document.querySelector('.min-hand');
  const secondHand = document.querySelector('.second-hand');

  function updateClock() {
    // Get current time
    const now = new Date();
    const hours = now.getHours() % 12; // Convert to 12-hour format
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Calculate rotation angles for clock hands
    const hourRotation = (360 / 12) * (hours + minutes / 60);
    const minRotation = (360 / 60) * (minutes + seconds / 60);
    const secondRotation = (360 / 60) * seconds;

    // Apply rotation to clock hands
    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minHand.style.transform = `rotate(${minRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
  }

  // Update clock every second
  setInterval(updateClock, 1000);

  // Initial update
  updateClock();
});
