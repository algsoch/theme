/**
 * INDIAN ARCHITECTURE MODAL - JavaScript
 * Modal Masters Challenge - Round 1: Base Implementation
 * 
 * Features:
 * - Accessible modal with ARIA attributes
 * - Keyboard navigation (Enter/Space to open, Escape to close)
 * - Focus trap within modal
 * - Ceremonial sliding door animation
 * - Form validation
 * - GSAP/Anime.js ready animation hooks
 * - Performance optimized
 */

(function() {
  'use strict';

  // ================================
  // STATE MANAGEMENT
  // ================================
  
  const ModalState = {
    isOpen: false,
    focusedElementBeforeOpen: null,
    firstFocusableElement: null,
    lastFocusableElement: null
  };

  // ================================
  // DOM ELEMENTS
  // ================================
  
  const elements = {
    openBtn: document.getElementById('openModalBtn'),
    closeBtn: document.getElementById('closeModalBtn'),
    modal: document.getElementById('architectureModal'),
    modalContent: document.querySelector('.modal-content'),
    backdrop: document.querySelector('.modal-backdrop'),
    form: document.getElementById('visitorForm'),
    toast: document.getElementById('toast'),
    toastMessage: document.querySelector('.toast-message')
  };

  // ================================
  // CONFIGURATION
  // ================================
  
  const config = {
    animationDuration: {
      door: 1200,      // Door sliding duration
      content: 1000,   // Content fade in
      toast: 3000      // Toast display time
    },
    focusableSelectors: 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  };

  // ================================
  // MODAL CONTROL FUNCTIONS
  // ================================

  /**
   * Open modal with ceremonial door animation
   */
  function openModal() {
    if (ModalState.isOpen) return;

    // Store currently focused element
    ModalState.focusedElementBeforeOpen = document.activeElement;

    // Update state
    ModalState.isOpen = true;

    // Show modal
    elements.modal.hidden = false;
    elements.modal.setAttribute('aria-hidden', 'false');

    // Prevent body scroll
    document.body.style.overflow = 'hidden';

    // Setup focus trap
    setupFocusTrap();

    // Focus first element after door animation completes
    setTimeout(() => {
      if (ModalState.firstFocusableElement) {
        ModalState.firstFocusableElement.focus();
      } else {
        elements.modalContent.focus();
      }

      // Announce to screen readers
      announceToScreenReader('Modal opened: The Taj Mahal architectural experience');
    }, config.animationDuration.door);

    // Animation hook for external libraries (GSAP/Anime.js)
    triggerAnimationHook('modalOpen');
  }

  /**
   * Close modal with reverse animation
   */
  function closeModal() {
    if (!ModalState.isOpen) return;

    // Add closing class for reverse animation
    elements.modal.classList.add('closing');

    // Update ARIA immediately
    elements.modal.setAttribute('aria-hidden', 'true');

    // Animation hook for external libraries
    triggerAnimationHook('modalClose');

    // Wait for door animation to complete
    setTimeout(() => {
      // Update state
      ModalState.isOpen = false;

      // Hide modal
      elements.modal.hidden = true;
      elements.modal.classList.remove('closing');

      // Restore body scroll
      document.body.style.overflow = '';

      // Return focus to trigger button
      if (ModalState.focusedElementBeforeOpen) {
        ModalState.focusedElementBeforeOpen.focus();
      }

      // Announce to screen readers
      announceToScreenReader('Modal closed');
    }, config.animationDuration.door);
  }

  // ================================
  // FOCUS TRAP
  // ================================

  /**
   * Setup focus trap within modal
   */
  function setupFocusTrap() {
    const focusableElements = elements.modal.querySelectorAll(config.focusableSelectors);
    const focusableArray = Array.from(focusableElements).filter(el => {
      return !el.hasAttribute('disabled') && 
             el.offsetParent !== null && 
             getComputedStyle(el).visibility !== 'hidden';
    });

    ModalState.firstFocusableElement = focusableArray[0];
    ModalState.lastFocusableElement = focusableArray[focusableArray.length - 1];
  }

  /**
   * Handle tab key for focus trap
   */
  function handleFocusTrap(event) {
    if (!ModalState.isOpen) return;

    const isTabPressed = event.key === 'Tab';
    if (!isTabPressed) return;

    if (event.shiftKey) {
      // Shift + Tab: Moving backwards
      if (document.activeElement === ModalState.firstFocusableElement) {
        event.preventDefault();
        ModalState.lastFocusableElement.focus();
      }
    } else {
      // Tab: Moving forwards
      if (document.activeElement === ModalState.lastFocusableElement) {
        event.preventDefault();
        ModalState.firstFocusableElement.focus();
      }
    }
  }

  // ================================
  // KEYBOARD NAVIGATION
  // ================================

  /**
   * Handle keyboard events
   */
  function handleKeydown(event) {
    // Open modal with Enter or Space on trigger button
    if (event.target === elements.openBtn) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openModal();
        return;
      }
    }

    // Close modal with Escape
    if (event.key === 'Escape' && ModalState.isOpen) {
      event.preventDefault();
      closeModal();
      return;
    }

    // Handle focus trap
    handleFocusTrap(event);
  }

  // ================================
  // FORM VALIDATION
  // ================================

  /**
   * Validate form field
   */
  function validateField(field) {
    const errorElement = field.parentElement.querySelector('.form-error');
    let errorMessage = '';

    if (field.hasAttribute('required') && !field.value.trim()) {
      errorMessage = 'This field is required';
    } else if (field.type === 'date' && field.value) {
      const selectedDate = new Date(field.value);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (selectedDate < today) {
        errorMessage = 'Please select a future date';
      }
    }

    if (errorMessage) {
      field.setAttribute('aria-invalid', 'true');
      errorElement.textContent = errorMessage;
      return false;
    } else {
      field.setAttribute('aria-invalid', 'false');
      errorElement.textContent = '';
      return true;
    }
  }

  /**
   * Handle form submission
   */
  function handleFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(elements.form);
    const fields = elements.form.querySelectorAll('[required]');
    let isValid = true;

    // Validate all required fields
    fields.forEach(field => {
      if (!validateField(field)) {
        isValid = false;
      }
    });

    if (isValid) {
      // Collect form data
      const visitorData = {
        name: document.getElementById('visitorName').value,
        date: document.getElementById('visitDate').value,
        count: document.getElementById('visitorCount').value,
        timestamp: new Date().toISOString()
      };

      // Simulate successful submission
      console.log('Visitor Information Submitted:', visitorData);

      // Show success toast
      showToast('🎉 Your visit has been reserved! We look forward to welcoming you.');

      // Reset form
      elements.form.reset();
      
      // Clear validation states
      fields.forEach(field => {
        field.setAttribute('aria-invalid', 'false');
        const errorElement = field.parentElement.querySelector('.form-error');
        if (errorElement) errorElement.textContent = '';
      });

      // Close modal after delay
      setTimeout(() => {
        closeModal();
      }, 2000);
    } else {
      // Focus first invalid field
      const firstInvalid = elements.form.querySelector('[aria-invalid="true"]');
      if (firstInvalid) {
        firstInvalid.focus();
      }
      
      showToast('⚠️ Please correct the errors in the form');
    }
  }

  // ================================
  // TOAST NOTIFICATIONS
  // ================================

  /**
   * Show toast notification
   */
  function showToast(message) {
    elements.toastMessage.textContent = message;
    elements.toast.hidden = false;
    elements.toast.classList.add('show');

    // Hide after duration
    setTimeout(() => {
      elements.toast.classList.remove('show');
      setTimeout(() => {
        elements.toast.hidden = true;
      }, 300);
    }, config.animationDuration.toast);
  }

  // ================================
  // ACCESSIBILITY UTILITIES
  // ================================

  /**
   * Announce message to screen readers
   */
  function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    announcement.style.cssText = 'position: absolute; left: -10000px; width: 1px; height: 1px; overflow: hidden;';
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }

  // ================================
  // ANIMATION HOOKS (for GSAP/Anime.js)
  // ================================

  /**
   * Trigger animation hook for external libraries
   * Usage: Listen to 'architectureModal:open' or 'architectureModal:close' events
   */
  function triggerAnimationHook(eventName) {
    const customEvent = new CustomEvent(`architectureModal:${eventName}`, {
      detail: {
        modal: elements.modal,
        content: elements.modalContent,
        timestamp: Date.now()
      }
    });
    
    document.dispatchEvent(customEvent);
  }

  // Example GSAP integration (uncomment if using GSAP):
  /*
  document.addEventListener('architectureModal:modalOpen', (e) => {
    gsap.from('.info-card', {
      duration: 0.6,
      y: 30,
      opacity: 0,
      stagger: 0.1,
      ease: 'power2.out',
      delay: 1.2
    });
  });
  */

  // Example Anime.js integration (uncomment if using Anime.js):
  /*
  document.addEventListener('architectureModal:modalOpen', (e) => {
    anime({
      targets: '.feature-item',
      translateX: [50, 0],
      opacity: [0, 1],
      delay: anime.stagger(100, {start: 1200}),
      easing: 'easeOutExpo',
      duration: 800
    });
  });
  */

  // ================================
  // PERFORMANCE OPTIMIZATION
  // ================================

  /**
   * Debounce function for event handlers
   */
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  /**
   * Check if reduced motion is preferred
   */
  function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  // Adjust animations if reduced motion is preferred
  if (prefersReducedMotion()) {
    config.animationDuration.door = 10;
    config.animationDuration.content = 10;
  }

  // ================================
  // EVENT LISTENERS
  // ================================

  /**
   * Initialize all event listeners
   */
  function initEventListeners() {
    // Open modal
    elements.openBtn.addEventListener('click', openModal);

    // Close modal
    elements.closeBtn.addEventListener('click', closeModal);
    
    // Close on backdrop click
    elements.backdrop.addEventListener('click', closeModal);

    // Keyboard navigation
    document.addEventListener('keydown', handleKeydown);

    // Form validation on blur
    const formInputs = elements.form.querySelectorAll('input, select, textarea');
    formInputs.forEach(input => {
      input.addEventListener('blur', () => validateField(input));
      input.addEventListener('input', debounce(() => validateField(input), 300));
    });

    // Form submission
    elements.form.addEventListener('submit', handleFormSubmit);

    // Prevent backdrop click from closing during animation
    elements.modal.addEventListener('click', (event) => {
      if (event.target === elements.modal) {
        closeModal();
      }
    });

    // Handle window resize (debounced)
    window.addEventListener('resize', debounce(() => {
      if (ModalState.isOpen) {
        setupFocusTrap();
      }
    }, 250));
  }

  // ================================
  // INITIALIZATION
  // ================================

  /**
   * Initialize modal system
   */
  function init() {
    // Verify required elements exist
    if (!elements.openBtn || !elements.modal) {
      console.error('Required modal elements not found');
      return;
    }

    // Set initial ARIA states
    elements.modal.setAttribute('aria-hidden', 'true');
    elements.openBtn.setAttribute('aria-haspopup', 'dialog');

    // Initialize event listeners
    initEventListeners();

    console.log('✓ Indian Architecture Modal initialized successfully');
  }

  // ================================
  // PUBLIC API (for external control)
  // ================================

  window.ArchitectureModal = {
    open: openModal,
    close: closeModal,
    isOpen: () => ModalState.isOpen,
    showToast: showToast,
    
    // Configuration
    config: config,
    
    // Animation utilities
    onOpen: (callback) => {
      document.addEventListener('architectureModal:modalOpen', callback);
    },
    onClose: (callback) => {
      document.addEventListener('architectureModal:modalClose', callback);
    }
  };

  // ================================
  // AUTO-INITIALIZE
  // ================================

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
