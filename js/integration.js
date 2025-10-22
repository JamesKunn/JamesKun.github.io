document.addEventListener('DOMContentLoaded', function () {
  try {
    if (window.jQuery && jQuery().owlCarousel) {
      jQuery('.projects-carousel').owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        dots:true
      });
    }
  } catch (e) { console.warn('owl carousel init failed', e); }

  // Typing effect for the hero text
  function initTypingEffect() {
    const typedElement = document.querySelector('.typed');
    if (!typedElement) {
      console.warn('Typed element not found');
      return;
    }

    // Define the text to be typed
    const textToType = 'I build clean websites and reliable automations.';
    console.log('Text to type:', textToType);
    console.log('Text length:', textToType.length);
    
    // Ensure the element is empty initially
    typedElement.innerHTML = '';
    
    // Wait a bit for all scripts to load
    setTimeout(() => {
      if (window.Typed) {
        try {
           // Destroy any existing instance
          if (typedElement.typed) {
            typedElement.typed.destroy();
          }
          
          const typed = new Typed('.typed', { 
            strings: [textToType], 
            typeSpeed: 80, 
            backSpeed: 40, 
            loop: true,
            showCursor: true,
            cursorChar: '|',
            fadeOut: false,
            startDelay: 1000,
            backDelay: 3000,
            smartBackspace: false,
            shuffle: false,
            onStringTyped: function() {
              console.log('String typed completely', textToType);
            },
            onComplete: function() {
              console.log('Typing animation completed');
            },
            onBegin: function() {
              console.log('Typing animation started');
            },
             onLastStringBackspaced: function() {
              console.log('Last string backspaced');
            }
          });
          
          // Store reference for cleanup
          typedElement.typed = typed;
          
        } catch (error) {
          console.warn('Typed.js failed to initialize:', error);
          // Fallback: just show the text
          typedElement.textContent = textToType;
        }
      } else {
        console.warn('Typed.js library not loaded');
        // Fallback: just show the text
        typedElement.textContent = textToType;
      }
    }, 1500);
  }
  
  // Initialize typing effect
  initTypingEffect();

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.querySelector('.nav-menu');
  
  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-open');
      mobileMenuBtn.classList.toggle('active');
    });
  }

  // Navigation active state management
  function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  // Update active nav on scroll
  window.addEventListener('scroll', updateActiveNav);
  
  // Update active nav on page load
  updateActiveNav();

  // Smooth scrolling for navigation links
  document.querySelectorAll('.nav-link[data-scroll]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (navMenu.classList.contains('mobile-open')) {
          navMenu.classList.remove('mobile-open');
          mobileMenuBtn.classList.remove('active');
        }
      }
    });
  });

  // Smooth scroll for intro CTA buttons (if present)
  document.querySelectorAll('.intro-cta a[data-scroll]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });

  // Tech stack modal functionality
  const techData = {
    "PHP": "I use PHP to build dynamic and functional web applications. I’ve worked on real-life projects like a Loan Tracking System and custom features for a Moodle-based LMS. I focus on writing clean, reusable code and applying MVC principles for better structure and maintainability.",
   "JavaScript": "JavaScript is what I use to make websites interactive and user-friendly. I apply it for form validation, dynamic content updates, AJAX requests, and improving UI/UX in my Laravel and portfolio projects. I have experience using both vanilla JavaScript and libraries.",
    "Laravel": "Laravel is my main framework for backend development. I’ve built fully functional systems like a Loan Tracking System with authentication, CRUD operations, role management, and database handling. I also worked on creating dashboards and integrating Blade templates, controllers, and models to deliver clean and scalable applications.",
    "MySQL": "I use MySQL to design and manage databases for web applications. I’ve created relational databases for systems like loan tracking and LMS platforms, using proper table relationships, foreign keys, and optimized queries. I’m comfortable with migrations, seeding, and database CRUD operations.",
    "Wordpress": "I work with WordPress to create responsive websites and customize themes for portfolios and simple business sites. I understand how to install plugins, modify themes using PHP, and manage content through the WordPress dashboard. I can also integrate forms, custom pages, and basic SEO setup..",
  };

  const modal = document.getElementById('tech-modal');
  const modalTitle = document.getElementById('tech-modal-title');
  const modalDescription = document.getElementById('tech-modal-description');
  const modalIcon = document.getElementById('tech-modal-icon');
  const closeBtn = document.querySelector('.tech-modal-close');

  // Open modal
  document.querySelectorAll('.tech-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const tech = btn.getAttribute('data-tech');
      const description = techData[tech] || 'No details available.';
      const img = btn.querySelector('img');
      
      modalTitle.textContent = tech;
      modalDescription.textContent = description;
      modalIcon.src = img.src;
      modalIcon.alt = tech;
      
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
    });
  });

  // Close modal
  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }

  closeBtn.addEventListener('click', closeModal);
  
  // Close modal when clicking outside
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close modal with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
      closeModal();
    }
  });

  // Project carousel functionality
  function initProjectCarousels() {
    const carousels = document.querySelectorAll('.project-carousel');
    
    carousels.forEach(carousel => {
      const slides = carousel.querySelectorAll('.carousel-slide');
      const projectId = carousel.getAttribute('data-project');
      
      if (slides.length <= 1) return; // Skip if only one slide
      
      let currentSlide = 0;
      
      // Add navigation buttons
      const prevBtn = document.createElement('button');
      prevBtn.className = 'carousel-nav prev';
      prevBtn.innerHTML = '‹';
      prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateCarousel();
      });
      
      const nextBtn = document.createElement('button');
      nextBtn.className = 'carousel-nav next';
      nextBtn.innerHTML = '›';
      nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateCarousel();
      });
      
      // Add dots
      const dotsContainer = document.createElement('div');
      dotsContainer.className = 'carousel-dots';
      
      slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = 'carousel-dot';
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
          currentSlide = index;
          updateCarousel();
        });
        dotsContainer.appendChild(dot);
      });
      
      carousel.appendChild(prevBtn);
      carousel.appendChild(nextBtn);
      carousel.appendChild(dotsContainer);
      
      // Update carousel function
      function updateCarousel() {
        slides.forEach((slide, index) => {
          slide.classList.toggle('active', index === currentSlide);
        });
        
        const dots = carousel.querySelectorAll('.carousel-dot');
        dots.forEach((dot, index) => {
          dot.classList.toggle('active', index === currentSlide);
        });
      }
      
      // Auto-play (optional)
      setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateCarousel();
      }, 4000);
      
      // Initialize
      updateCarousel();
    });
  }
  
  // Initialize project carousels
  initProjectCarousels();

  // Theme toggle functionality
  const themeRadios = document.querySelectorAll('input[name="theme"]');
  const body = document.body;
  const profileImg = document.querySelector('.intro-photo');

  // Load saved theme or default to light
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.querySelector(`input[value="${savedTheme}"]`).checked = true;
  body.setAttribute('data-theme', savedTheme);

  // Update profile image based on theme
  function updateProfileImage(theme) {
    if (profileImg) {
      const newSrc = theme === 'light' ? 'images/prof-light.png' : 'images/prof.png';
      profileImg.src = newSrc;
    }
  }

  // Theme change handler
  themeRadios.forEach(radio => {
    radio.addEventListener('change', function() {
      const theme = this.value;
      body.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
      updateProfileImage(theme);
    });
  });

  // Initialize profile image
  updateProfileImage(savedTheme);

   // Resume download handling
  const resumeBtn = document.getElementById('btnResume');
  if (resumeBtn) {
    resumeBtn.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Show loading state
      const originalText = this.textContent;
      this.textContent = 'Downloading...';
      this.style.opacity = '0.7';
      
      // Method 1: Try direct download with fetch
      fetch('files/jameskunresume.pdf')
        .then(response => {
          if (response.ok) {
            return response.blob();
          }
          throw new Error('Network response was not ok');
        })
        .then(blob => {
          // Create blob URL and download
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = 'James_Kun_Resume.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
          
          showDownloadMessage('Resume downloaded successfully!', 'success');
        })
        .catch(error => {
          console.warn('Fetch download failed, trying fallback method:', error);
          
          // Method 2: Fallback to direct link
          const link = document.createElement('a');
          link.href = 'files/jameskunresume.pdf';
          link.download = 'James_Kun_Resume.pdf';
          link.target = '_blank';
          
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          
          showDownloadMessage('Resume download started! Check your downloads folder.', 'info');
        })
        .finally(() => {
          // Reset button state
          setTimeout(() => {
            this.textContent = originalText;
            this.style.opacity = '1';
          }, 2000);
        });
    });
  }
  
  // Helper function to show download messages
  function showDownloadMessage(message, type = 'success') {
    const successMsg = document.createElement('div');
    const bgColor = type === 'success' ? '#28a745' : type === 'info' ? '#17a2b8' : '#dc3545';
    
    successMsg.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${bgColor};
      color: white;
      padding: 12px 20px;
      border-radius: 8px;
      z-index: 10000;
      font-weight: 500;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      animation: slideIn 0.3s ease;
      max-width: 300px;
      word-wrap: break-word;
    `;
    successMsg.textContent = message;
    document.body.appendChild(successMsg);
    
    // Remove message after 4 seconds
    setTimeout(() => {
      successMsg.style.animation = 'slideOut 0.3s ease';
      setTimeout(() => {
        if (successMsg.parentNode) {
          successMsg.parentNode.removeChild(successMsg);
        }
      }, 300);
    }, 4000);
  }

  // Contact form handling
  const contactForm = document.getElementById('contactForm');
  const contactStatus = document.getElementById('contactStatus');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent default form submission
      
      const submitBtn = document.getElementById('sendMessage');
      const originalText = submitBtn.value;
      
      // Show loading state
      submitBtn.value = 'Sending...';
      submitBtn.disabled = true;
      contactStatus.textContent = '';
      
      // Get form data
      const formData = new FormData(contactForm);
      
      // Submit to StaticForms
      fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        body: formData
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .then(data => {
        // StaticForms returns success even if there's a message
        contactStatus.textContent = 'Message sent successfully! I\'ll get back to you soon.';
        contactStatus.style.color = '#28a745';
        contactForm.reset(); // Clear the form
      })
      .catch(error => {
        console.error('Error:', error);
        contactStatus.textContent = 'Sorry, there was an error sending your message. Please try again.';
        contactStatus.style.color = '#dc3545';
      })
      .finally(() => {
        // Reset button state
        submitBtn.value = originalText;
        submitBtn.disabled = false;
      });
    });
  }
});
