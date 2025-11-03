/**
 * SPACE MODAL - JavaScript
 * Orbital animations, planet selector, mission registration
 */

(function() {
  'use strict';

  const ModalState = { isOpen: false, focusedElementBeforeOpen: null, currentPlanet: 'mars' };

  const elements = {
    openBtn: document.getElementById('openModalBtn'),
    closeBtn: document.getElementById('closeModalBtn'),
    modal: document.getElementById('spaceModal'),
    modalContent: document.querySelector('.modal-content'),
    backdrop: document.querySelector('.modal-backdrop'),
    form: document.getElementById('missionForm'),
    toast: document.getElementById('toast'),
    toastMessage: document.querySelector('.toast-message'),
    planetBtns: document.querySelectorAll('.planet-btn'),
    planetPanels: document.querySelectorAll('.planet-panel'),
    statPanels: document.querySelectorAll('.stat-panel')
  };

  const config = {
    animationDuration: { orbital: 1200, content: 800, toast: 3000 },
    focusableSelectors: 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  };

  function openModal() {
    if (ModalState.isOpen) return;
    ModalState.focusedElementBeforeOpen = document.activeElement;
    ModalState.isOpen = true;
    elements.modal.hidden = false;
    elements.modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => {
      const firstFocusable = elements.modal.querySelector(config.focusableSelectors);
      if (firstFocusable) firstFocusable.focus();
      animateStatsOnOpen();
    }, config.animationDuration.orbital);

    triggerEvent('modalOpen');
  }

  function closeModal() {
    if (!ModalState.isOpen) return;
    elements.modal.classList.add('closing');
    elements.modal.setAttribute('aria-hidden', 'true');
    triggerEvent('modalClose');

    setTimeout(() => {
      ModalState.isOpen = false;
      elements.modal.hidden = true;
      elements.modal.classList.remove('closing');
      document.body.style.overflow = '';
      if (ModalState.focusedElementBeforeOpen) ModalState.focusedElementBeforeOpen.focus();
    }, config.animationDuration.orbital);
  }

  function switchPlanet(planet) {
    if (planet === ModalState.currentPlanet) return;
    
    elements.planetBtns.forEach(btn => {
      const isActive = btn.dataset.planet === planet;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive);
    });

    elements.planetPanels.forEach(panel => {
      panel.classList.toggle('active', panel.dataset.planetPanel === planet);
    });

    ModalState.currentPlanet = planet;
    triggerEvent('planetChange', { planet });
  }

  function initPlanetSelector() {
    elements.planetBtns.forEach(btn => {
      btn.addEventListener('click', () => switchPlanet(btn.dataset.planet));
    });
  }

  function animateStatsOnOpen() {
    elements.statPanels.forEach((panel, i) => {
      panel.style.opacity = '0';
      panel.style.transform = 'translateY(20px)';
      setTimeout(() => {
        panel.style.transition = 'all 0.6s ease';
        panel.style.opacity = '1';
        panel.style.transform = 'translateY(0)';
      }, config.animationDuration.orbital + (i * 100));
    });
  }

  function validateField(field) {
    const errorElement = field.parentElement.querySelector('.form-error');
    let errorMessage = '';

    if (field.hasAttribute('required') && !field.value.trim()) {
      errorMessage = 'FIELD REQUIRED';
    } else if (field.id === 'astronautName' && field.value.length < 3) {
      errorMessage = 'CALLSIGN TOO SHORT';
    } else if (field.id === 'launchDate' && field.value) {
      const selectedDate = new Date(field.value);
      const today = new Date();
      if (selectedDate < today) errorMessage = 'INVALID LAUNCH WINDOW';
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

  function handleFormSubmit(event) {
    event.preventDefault();
    const fields = elements.form.querySelectorAll('[required]');
    let isValid = true;

    fields.forEach(field => { if (!validateField(field)) isValid = false; });

    if (isValid) {
      const missionData = {
        callsign: document.getElementById('astronautName').value,
        role: document.getElementById('missionRole').value,
        launch: document.getElementById('launchDate').value,
        duration: document.querySelector('input[name="duration"]:checked').value,
        timestamp: new Date().toISOString()
      };

      console.log('Mission Registered:', missionData);
      showToast('🚀 MISSION CONFIRMED. PREPARE FOR LAUNCH.');
      elements.form.reset();
      
      setTimeout(() => closeModal(), 2500);
    } else {
      const firstInvalid = elements.form.querySelector('[aria-invalid="true"]');
      if (firstInvalid) firstInvalid.focus();
      showToast('⚠️ VALIDATION ERROR. CHECK ALL FIELDS.');
    }
  }

  function showToast(message) {
    elements.toastMessage.textContent = message;
    elements.toast.hidden = false;
    elements.toast.classList.add('show');

    setTimeout(() => {
      elements.toast.classList.remove('show');
      setTimeout(() => { elements.toast.hidden = true; }, 500);
    }, config.animationDuration.toast);
  }

  function handleKeydown(event) {
    if (event.key === 'Escape' && ModalState.isOpen) {
      event.preventDefault();
      closeModal();
    }
  }

  function triggerEvent(eventName, data = {}) {
    document.dispatchEvent(new CustomEvent(`spaceModal:${eventName}`, {
      detail: { modal: elements.modal, planet: ModalState.currentPlanet, timestamp: Date.now(), ...data }
    }));
  }

  function debounce(func, wait) {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  }

  function init() {
    if (!elements.openBtn || !elements.modal) return;

    elements.modal.setAttribute('aria-hidden', 'true');
    elements.openBtn.addEventListener('click', openModal);
    elements.closeBtn.addEventListener('click', closeModal);
    elements.backdrop.addEventListener('click', closeModal);
    document.addEventListener('keydown', handleKeydown);

    initPlanetSelector();

    const formInputs = elements.form.querySelectorAll('input, select, textarea');
    formInputs.forEach(input => {
      input.addEventListener('blur', () => validateField(input));
      input.addEventListener('input', debounce(() => validateField(input), 300));
    });

    elements.form.addEventListener('submit', handleFormSubmit);

    console.log('✓ Space Modal initialized');
  }

  window.SpaceModal = {
    open: openModal,
    close: closeModal,
    isOpen: () => ModalState.isOpen,
    switchPlanet: switchPlanet,
    showToast: showToast,
    onOpen: (cb) => document.addEventListener('spaceModal:modalOpen', cb),
    onClose: (cb) => document.addEventListener('spaceModal:modalClose', cb),
    onPlanetChange: (cb) => document.addEventListener('spaceModal:planetChange', cb)
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
