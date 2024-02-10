
var plantButton = document.getElementById('plant-rose');
if (plantButton) {
    plantButton.addEventListener('click', function() {
         console.log('Plant button was clicked');
      var gardenEl = document.getElementById('garden');
        var rose = document.createElement('img');
        rose.src = 'rose.png'; // Make sure this path is correct
        rose.classList.add('rose');
        rose.style.top = Math.random() * (gardenEl.offsetHeight - 50) + 'px';
        rose.style.left = Math.random() * (gardenEl.offsetWidth - 50) + 'px';
        gardenEl.appendChild(rose);
    });
} else {
    console.error('Plant button not found');
}

