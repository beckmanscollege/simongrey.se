let debounceTimer;
let lastScrollY = 0; // To track the scroll direction

window.onload = function() {
  const randomizeBtn = document.querySelector('.randomize-btn');
  const randomizeBtnRight = document.querySelector('.randomize-btn-right');
  
  // Initially hide both buttons on page load
  randomizeBtn.style.visibility = 'hidden';
  randomizeBtn.style.opacity = 0;
  randomizeBtnRight.style.visibility = 'hidden';
  randomizeBtnRight.style.opacity = 0;
};

document.addEventListener('DOMContentLoaded', () => {
  const randomizeBtn = document.querySelector('.randomize-btn');
  const randomizeBtnRight = document.querySelector('.randomize-btn-right');
  
  // Event listener for the Randomize button (left button)
  randomizeBtn.addEventListener('click', () => {
    document.querySelectorAll('.carousel').forEach((carousel) => {
      const images = carousel.querySelectorAll('img');
      images.forEach(image => image.classList.remove('active'));
      const randomIndex = Math.floor(Math.random() * images.length);
      images[randomIndex].classList.add('active');
    });
  });

  // Event listener for the right randomize button to open a new website
  randomizeBtnRight.addEventListener('click', () => {
    // Function to open the website (replace with your URL)
    window.open('https://www.emotion101.se/', '_blank');
  });
});

window.addEventListener('scroll', () => {
  // Clear any previous debounce timer to avoid multiple triggers
  clearTimeout(debounceTimer);

  // Set a new debounce timer
  debounceTimer = setTimeout(() => {
    const randomizeBtn = document.querySelector('.randomize-btn');
    const randomizeBtnRight = document.querySelector('.randomize-btn-right');
    const currentScrollY = window.scrollY;
    
    // Show buttons when scrolling down and hide them when scrolling up
    if (currentScrollY > lastScrollY) { // Scrolling down
      // Show buttons
      randomizeBtn.style.visibility = 'visible';
      randomizeBtn.style.opacity = 1;
      randomizeBtn.style.transition = 'opacity 1s ease';
      randomizeBtnRight.style.visibility = 'visible';
      randomizeBtnRight.style.opacity = 1;
      randomizeBtnRight.style.transition = 'opacity 1s ease';
    } else if (currentScrollY < lastScrollY) { // Scrolling up
      // Hide buttons
      randomizeBtn.style.opacity = 0;
      randomizeBtn.style.transition = 'opacity 1s ease';
      randomizeBtnRight.style.opacity = 0;
      randomizeBtnRight.style.transition = 'opacity 1s ease';
      
      // Hide buttons completely after the transition
      randomizeBtn.addEventListener('transitionend', () => {
        if (currentScrollY <= lastScrollY) {
          randomizeBtn.style.visibility = 'hidden';
          randomizeBtnRight.style.visibility = 'hidden';
        }
      }, { once: true });
    }

    // Update lastScrollY to the current scroll position
    lastScrollY = currentScrollY;
  }, 150);  // 150ms debounce delay
});

  // Previous and Next buttons functionality (your original code)
  document.querySelectorAll('.prev').forEach((button) => {
    button.addEventListener('click', () => {
      const carousel = button.closest('.grid-item-wrapper').querySelector('.carousel');
      let activeImg = carousel.querySelector('.active');
      let nextImg = activeImg.previousElementSibling || carousel.lastElementChild;
      activeImg.classList.remove('active');
      nextImg.classList.add('active');
    });
  });

  document.querySelectorAll('.next').forEach((button) => {
    button.addEventListener('click', () => {
      const carousel = button.closest('.grid-item-wrapper').querySelector('.carousel');
      let activeImg = carousel.querySelector('.active');
      let nextImg = activeImg.nextElementSibling || carousel.firstElementChild;
      activeImg.classList.remove('active');
      nextImg.classList.add('active');
    });
  });
