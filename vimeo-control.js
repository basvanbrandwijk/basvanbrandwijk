document.addEventListener("DOMContentLoaded", function() {
  const iframe = document.getElementById('vimeo-video');
  const muteButton = document.getElementById('mute-button');

  // Create a new Vimeo Player object
  const player = new Vimeo.Player(iframe);

  // Start with the video muted
  let isMuted = true;

  // Add event listener for the button click
  muteButton.addEventListener('click', function() {
    if (isMuted) {
      // Unmute the video
      player.setVolume(1); // Set volume to 100%
      muteButton.textContent = 'Mute'; // Change button text to 'Mute'
    } else {
      // Mute the video
      player.setVolume(0); // Set volume to 0%
      muteButton.textContent = 'Unmute'; // Change button text to 'Unmute'
    }
    
    // Toggle the muted state
    isMuted = !isMuted;
  });
});
