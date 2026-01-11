// ===========================
// Mobile Navigation Toggle
// ===========================
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
  });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
  }
});

// ===========================
// Sticky Navigation on Scroll
// ===========================
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

// ===========================
// Smooth Scrolling for Navigation Links
// ===========================
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      const headerHeight = header.offsetHeight;
      const targetPosition = targetSection.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ===========================
// Contact Form Handling
// ===========================
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get form values
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;
  
  // Create WhatsApp message
  const whatsappMessage = `Hello BELLISSIMÀ!%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AMessage: ${encodeURIComponent(message)}`;
  
  // Open WhatsApp with pre-filled message
  window.open(`https://wa.me/260573107901?text=${whatsappMessage}`, '_blank');
  
  // Show success message
  alert('Thank you for your message! You will be redirected to WhatsApp to complete your inquiry.');
  
  // Reset form
  contactForm.reset();
});

// ===========================
// Scroll Animation for Elements
// ===========================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll('.collection-card, .step, .delivery-card, .contact-item, .about-text');

animateElements.forEach(element => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(30px)';
  element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(element);
});

// ===========================
// Active Navigation Link on Scroll
// ===========================
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset;
  
  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 150;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
    
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach(link => link.classList.remove('active'));
      if (navLink) {
        navLink.classList.add('active');
      }
    }
  });
});

// ===========================
// Initialize on Page Load
// ===========================
window.addEventListener('DOMContentLoaded', () => {
  // Add fade-in animation to hero content
  const heroContent = document.querySelector('.hero-content');
  heroContent.style.opacity = '0';
  heroContent.style.transform = 'translateY(30px)';
  
  setTimeout(() => {
    heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
    heroContent.style.opacity = '1';
    heroContent.style.transform = 'translateY(0)';
  }, 100);
  
  // Console message
  console.log('BELLISSIMÀ website loaded successfully! 🌟');
});