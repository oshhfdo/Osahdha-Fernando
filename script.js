document.querySelectorAll('.project').forEach(project => {
  const modal = project.querySelector('.modal');
  let timer;

  // Show modal on hover
  project.addEventListener('mouseenter', () => {
    clearTimeout(timer);
    modal.style.display = 'flex';
    modal.style.opacity = '1';
  });

  // Hide modal on mouse leave
  project.addEventListener('mouseleave', () => {
    timer = setTimeout(() => {
      modal.style.opacity = '0';
      setTimeout(() => {
        if (modal.style.opacity === '0') {
          modal.style.display = 'none';
        }
      }, 500); // Match this timeout with the CSS transition duration
    }, 300); // Delay before fading out
  });
});



// Wait for the page to load
window.addEventListener('load', () => {
  setTimeout(() => {
    const overlay = document.querySelector('.loading-overlay');
    overlay.style.opacity = '0';
    // Remove the overlay from the DOM after fade-out transition
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 1000); // Match this timeout with the CSS transition duration
  }, 1000); // Duration of the loading screen
});


document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('contact-form');
  var popup = document.getElementById('thank-you-popup');
  var closeBtn = document.querySelector('.popup-close');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Show the popup
    popup.style.display = 'flex';

    // Optionally, you can handle form submission here (e.g., send data to server)

    // Reset the form after showing the popup
    form.reset();
  });

  closeBtn.addEventListener('click', function() {
    popup.style.display = 'none';
  });

  // Close popup if clicking outside of the popup content
  window.addEventListener('click', function(event) {
    if (event.target === popup) {
      popup.style.display = 'none';
    }
  });
});

