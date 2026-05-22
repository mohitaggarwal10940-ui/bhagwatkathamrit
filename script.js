document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Fade-up and Feature Line Animations
  const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const fadeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add a slight delay based on index for staggered feature lines
        if (entry.target.classList.contains('feature-line')) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 100);
        } else {
          entry.target.classList.add('visible');
        }
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-up, .feature-line').forEach(el => {
    fadeObserver.observe(el);
  });

  // 2. Navbar Scroll Effect
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // 3. Drawer Menu Logic
  const drawerMenu = document.querySelector('.drawer-menu');
  const drawerOverlay = document.querySelector('.drawer-overlay');
  const toggleButtons = document.querySelectorAll('.toggle-drawer');
  const closeButtons = document.querySelectorAll('.close-drawer');

  if (drawerMenu && drawerOverlay) {
    const openDrawer = (e) => {
      e.preventDefault();
      drawerMenu.classList.add('active');
      drawerOverlay.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    };

    const closeDrawer = () => {
      drawerMenu.classList.remove('active');
      drawerOverlay.classList.remove('active');
      document.body.style.overflow = '';
    };

    toggleButtons.forEach(btn => btn.addEventListener('click', openDrawer));
    closeButtons.forEach(btn => btn.addEventListener('click', closeDrawer));
  }

  // 4. Accordion Logic (Know Bhagwat)
  const accordions = document.querySelectorAll('.accordion-header');
  accordions.forEach(acc => {
    acc.addEventListener('click', function() {
      // Close others (optional, but good for UX)
      accordions.forEach(other => {
        if (other !== this) {
          other.parentElement.classList.remove('active');
        }
      });
      // Toggle current
      this.parentElement.classList.toggle('active');
    });
  });

});
