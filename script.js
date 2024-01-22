document.addEventListener('DOMContentLoaded', function () {
  // Get clock hands elements
  const hourHand = document.querySelector('.hour-hand');
  const minHand = document.querySelector('.min-hand');
  const secondHand = document.querySelector('.second-hand');

  function updateClock() {
    // Get current time
     var date = new Date();
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hours = date.getHours();

    let hrPosition = hours*360/12 + ((minutes * 360/60)/12) ;
    let minPosition = (minutes * 360/60) + (seconds* 360/60)/60;
    let secPosition = seconds * 360/60;

    hourHand.style.transform = 'rotate(' + hrPosition + 'deg)';
    minHand.style.transform = 'rotate(' + minPosition + 'deg)';
    secondHand.style.transform = 'rotate(' + secPosition + 'deg)';
  }

  // Update clock every second
  setInterval(updateClock, 1000);

  // Initial update
  updateClock();
});
