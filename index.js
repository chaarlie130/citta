function scrollto(height) {
  window.scroll({
    top: height,
    left: 0,
    behavior: 'smooth' // Use 'auto' instead of 'smooth' for instant scrolling
  });
}
function goHome() {
  location.href = 'index.html';
}


const logo = document.getElementById('myLogo');
let rotation = 0;

function animate() {
  // Update the rotation angle
  rotation += 2.5;
  logo.setAttribute('transform', `rotate(${rotation} 0 0)`);

  // Request the next frame
  requestAnimationFrame(animate);
}

animate();


function clickNextButton() {
  nxtbtn.click();
}

// Set an interval to click the button every 6 seconds (6000 milliseconds)
const intervalId = setInterval(() => {
  clickNextButton();
  setTimeout(() => {
    // Clear the interval and start it again after a delay
    clearInterval(intervalId);
    intervalId = setInterval(clickNextButton, 3000);
  }, 2000); // Adjust the delay as needed
}, 6000);
