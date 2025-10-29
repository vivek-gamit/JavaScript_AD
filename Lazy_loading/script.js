// Select all lazy images
const lazyImages = document.querySelectorAll('.lazy');

// Create IntersectionObserver instance
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    // If the image is visible
    if (entry.isIntersecting) {
      const img = entry.target;

      // Load the real image
      img.src = img.dataset.src;

      // When the image is fully loaded, fade it in
      img.onload = () => {
        img.classList.add('loaded');
      };

      // Stop observing this image
      observer.unobserve(img);
    }
  });
});

// Observe each image
lazyImages.forEach(img => observer.observe(img));
