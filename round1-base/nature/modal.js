/**
 * NATURE MODAL - JavaScript
 * Modal Masters Challenge - Round 1: Base Implementation
 * 
 * Features:
 * - Accessible modal with ARIA attributes
 * - Blooming petal animation (6-petal organic reveal)
 * - Season selector with dynamic content switching
 * - Keyboard navigation and focus trap
 * - Form validation for conservation actions
 * - Spring physics-ready animation hooks
 * - Ecosystem card interactions
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
    lastFocusableElement: null,
    currentSeason: 'spring'
  };

  // ================================
  // DOM ELEMENTS
  // ================================
  
  const elements = {
    openBtn: document.getElementById('openModalBtn'),
    closeBtn: document.getElementById('closeModalBtn'),
    modal: document.getElementById('natureModal'),
    modalContent: document.querySelector('.modal-content'),
    backdrop: document.querySelector('.modal-backdrop'),
    form: document.getElementById('conservationForm'),
    toast: document.getElementById('toast'),
    toastMessage: document.querySelector('.toast-message'),
    seasonBtns: document.querySelectorAll('.season-btn'),
    seasonPanels: document.querySelectorAll('.season-panel'),
    ecoCards: document.querySelectorAll('.eco-card')
  };

  // ================================
  // CONFIGURATION
  // ================================
  
  const config = {
    animationDuration: {
      bloom: 1600,      // Petal blooming duration
      content: 1400,    // Content fade in
      season: 800,      // Season transition
      toast: 3000       // Toast display time
    },
    focusableSelectors: 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    seasons: {
      spring: { color: '#E8F5E9', emoji: '🌸' },
      summer: { color: '#FFF9C4', emoji: '☀️' },
      autumn: { color: '#FFE0B2', emoji: '🍂' },
      winter: { color: '#E3F2FD', emoji: '❄️' }
    }
  };

  // ================================
  // MODAL CONTROL FUNCTIONS
  // ================================

  /**
   * Open modal with blooming animation
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

    // Focus first element after bloom animation completes
    setTimeout(() => {
      if (ModalState.firstFocusableElement) {
        ModalState.firstFocusableElement.focus();
      } else {
        elements.modalContent.focus();
      }

      // Announce to screen readers
      announceToScreenReader('Modal opened: Nature ecosystem experience');
    }, config.animationDuration.bloom);

    // Animation hook for external libraries
    triggerAnimationHook('modalOpen');

    // Add ecosystem card entrance animations
    animateEcoCards();
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

    // Wait for animation to complete
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
    }, config.animationDuration.bloom);
  }

  // ================================
  // SEASON SELECTOR
  // ================================

  /**
   * Switch season content
   */
  function switchSeason(season) {
    if (season === ModalState.currentSeason) return;

    // Update active button
    elements.seasonBtns.forEach(btn => {
      const isActive = btn.dataset.season === season;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive);
    });

    // Switch panels with fade transition
    elements.seasonPanels.forEach(panel => {
      const isActive = panel.dataset.seasonPanel === season;
      panel.classList.toggle('active', isActive);
    });

    // Update background color subtly
    const seasonColor = config.seasons[season]?.color || '#F1F8E9';
    document.documentElement.style.setProperty('--season-active', seasonColor);

    // Update state
    ModalState.currentSeason = season;

    // Animation hook
    triggerAnimationHook('seasonChange', { season });

    // Announce to screen readers
    announceToScreenReader(`Season changed to ${season}`);
  }

  /**
   * Initialize season selector
   */
  function initSeasonSelector() {
    elements.seasonBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const season = btn.dataset.season;
        switchSeason(season);
      });
    });
  }

  // ================================
  // ECOSYSTEM CARD ANIMATIONS
  // ================================

  /**
   * Animate ecosystem cards on modal open
   */
  function animateEcoCards() {
    elements.ecoCards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        card.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, config.animationDuration.bloom + (index * 100));
    });
  }

  /**
   * Add interactive hover effects to eco cards
   */
  function initEcoCardInteractions() {
    elements.ecoCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        const element = this.dataset.element;
        triggerAnimationHook('ecoCardHover', { element });
      });

      card.addEventListener('click', function() {
        const element = this.dataset.element;
        const icon = this.querySelector('.eco-icon').textContent;
        showToast(`${icon} You're exploring the ${element} ecosystem!`);
      });
    });
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
    } else if (field.id === 'userName' && field.value.length < 2) {
      errorMessage = 'Name must be at least 2 characters';
    } else if (field.id === 'actionType' && !field.value) {
      errorMessage = 'Please select a conservation action';
    }

    if (errorMessage) {
      field.setAttribute('aria-invalid', 'true');
      if (errorElement) errorElement.textContent = errorMessage;
      return false;
    } else {
      field.setAttribute('aria-invalid', 'false');
      if (errorElement) errorElement.textContent = '';
      return true;
    }
  }

  /**
   * Handle form submission
   */
  function handleFormSubmit(event) {
    event.preventDefault();

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
      const conservationData = {
        name: document.getElementById('userName').value,
        action: document.getElementById('actionType').value,
        commitment: document.querySelector('input[name="commitment"]:checked').value,
        timestamp: new Date().toISOString()
      };

      // Simulate successful submission
      console.log('Conservation Action Committed:', conservationData);

      // Show success toast
      showToast('🌱 Thank you! Your commitment to nature makes a difference!');

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
      }, 2500);
    } else {
      // Focus first invalid field
      const firstInvalid = elements.form.querySelector('[aria-invalid="true"]');
      if (firstInvalid) {
        firstInvalid.focus();
      }
      
      showToast('⚠️ Please complete all required fields');
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
      }, 400);
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
   */
  function triggerAnimationHook(eventName, data = {}) {
    const customEvent = new CustomEvent(`natureModal:${eventName}`, {
      detail: {
        modal: elements.modal,
        content: elements.modalContent,
        season: ModalState.currentSeason,
        timestamp: Date.now(),
        ...data
      }
    });
    
    document.dispatchEvent(customEvent);
  }

  // Example Spring Physics integration (uncomment if using libraries):
  /*
  document.addEventListener('natureModal:modalOpen', () => {
    // Using Anime.js spring physics
    anime({
      targets: '.eco-card',
      scale: [0.8, 1],
      opacity: [0, 1],
      duration: 1200,
      delay: anime.stagger(150, {start: 1600}),
      easing: 'spring(1, 80, 10, 0)'
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
    config.animationDuration.bloom = 10;
    config.animationDuration.content = 10;
    config.animationDuration.season = 10;
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

    // Initialize season selector
    initSeasonSelector();

    // Initialize ecosystem card interactions
    initEcoCardInteractions();

    // Initialize event listeners
    initEventListeners();

    console.log('✓ Nature Modal initialized successfully');
  }

  // ================================
  // PUBLIC API (for external control)
  // ================================

  window.NatureModal = {
    open: openModal,
    close: closeModal,
    isOpen: () => ModalState.isOpen,
    showToast: showToast,
    switchSeason: switchSeason,
    
    // Configuration
    config: config,
    
    // Animation utilities
    onOpen: (callback) => {
      document.addEventListener('natureModal:modalOpen', callback);
    },
    onClose: (callback) => {
      document.addEventListener('natureModal:modalClose', callback);
    },
    onSeasonChange: (callback) => {
      document.addEventListener('natureModal:seasonChange', callback);
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
