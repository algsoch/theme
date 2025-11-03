// MYTHOLOGY THEME - Progressive Reveal & Deity Switching
(function() {
  'use strict';

  // State management
  const state = {
    modalOpen: false,
    currentDeity: 'zeus',
    focusBeforeModal: null
  };

  // DOM cache
  const dom = {
    overlay: null,
    container: null,
    openBtn: null,
    closeBtn: null,
    deityBtns: null,
    storyPanels: null,
    form: null,
    toast: null
  };

  // Initialize
  function init() {
    cacheDom();
    bindEvents();
    dispatchCustomEvent('mythologyModalReady', { state, dom });
  }

  function cacheDom() {
    dom.overlay = document.getElementById('mythModalOverlay');
    dom.container = document.getElementById('mythModal');
    dom.openBtn = document.getElementById('openMythModal');
    dom.closeBtn = document.getElementById('closeModalBtn');
    dom.deityBtns = Array.from(document.querySelectorAll('.deity-btn'));
    dom.storyPanels = Array.from(document.querySelectorAll('.story-panel'));
    dom.form = document.getElementById('heroForm');
    dom.toast = document.getElementById('toast');
  }

  function bindEvents() {
    dom.openBtn?.addEventListener('click', openModal);
    dom.closeBtn?.addEventListener('click', closeModal);
    dom.overlay?.addEventListener('click', handleOverlayClick);
    document.addEventListener('keydown', handleKeyDown);
    
    dom.deityBtns.forEach(btn => {
      btn.addEventListener('click', () => switchDeity(btn.dataset.deity));
    });

    dom.form?.addEventListener('submit', handleFormSubmit);
  }

  // Modal control
  function openModal() {
    if (state.modalOpen) return;

    state.focusBeforeModal = document.activeElement;
    state.modalOpen = true;

    dom.overlay.setAttribute('aria-hidden', 'false');
    dom.container.setAttribute('aria-modal', 'true');
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      dom.closeBtn?.focus();
      setupFocusTrap();
    }, 1000);

    dispatchCustomEvent('mythologyModalOpened', { deity: state.currentDeity });
  }

  function closeModal() {
    if (!state.modalOpen) return;

    state.modalOpen = false;
    dom.overlay.setAttribute('aria-hidden', 'true');
    dom.container.removeAttribute('aria-modal');
    document.body.style.overflow = '';

    if (state.focusBeforeModal) {
      state.focusBeforeModal.focus();
    }

    dispatchCustomEvent('mythologyModalClosed', { deity: state.currentDeity });
  }

  function handleOverlayClick(e) {
    if (e.target === dom.overlay) closeModal();
  }

  function handleKeyDown(e) {
    if (!state.modalOpen) return;

    if (e.key === 'Escape') {
      e.preventDefault();
      closeModal();
    }
  }

  // Focus trap
  function setupFocusTrap() {
    const focusableElements = dom.container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    dom.container.addEventListener('keydown', (e) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    });
  }

  // Deity switching
  function switchDeity(deityId) {
    state.currentDeity = deityId;

    dom.deityBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.deity === deityId);
      btn.setAttribute('aria-pressed', btn.dataset.deity === deityId);
    });

    dom.storyPanels.forEach(panel => {
      panel.classList.toggle('active', panel.dataset.deity === deityId);
    });

    dispatchCustomEvent('mythologyDeitySwitched', { deity: deityId });
  }

  // Form handling
  function handleFormSubmit(e) {
    e.preventDefault();

    const formData = {
      heroName: dom.form.heroName.value.trim(),
      questType: dom.form.questType.value,
      patron: dom.form.patron.value
    };

    if (!validateForm(formData)) return;

    showToast(`⚡ Welcome, ${formData.heroName}! Your ${formData.questType} begins under ${formData.patron}'s blessing. ⚡`);

    dispatchCustomEvent('mythologyFormSubmitted', formData);

    setTimeout(() => {
      dom.form.reset();
      closeModal();
    }, 2500);
  }

  function validateForm(data) {
    if (!data.heroName || data.heroName.length < 2) {
      showToast('⚠️ A hero needs a worthy name (at least 2 characters)');
      return false;
    }
    return true;
  }

  function showToast(message) {
    const toastText = dom.toast.querySelector('.toast-message');
    if (toastText) {
      toastText.textContent = message;
    }
    dom.toast.classList.add('show');

    setTimeout(() => {
      dom.toast.classList.remove('show');
    }, 3000);
  }

  // Custom events for GSAP/Anime.js integration
  function dispatchCustomEvent(eventName, detail) {
    window.dispatchEvent(new CustomEvent(eventName, { detail }));
  }

  // Public API for external animation libraries
  window.MythologyModal = {
    open: openModal,
    close: closeModal,
    switchDeity: switchDeity,
    getState: () => ({ ...state }),
    getDom: () => ({ ...dom })
  };

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

// Example GSAP/Anime.js integration hooks:
// window.addEventListener('mythologyModalOpened', (e) => {
//   // Custom animations for deity reveal
//   console.log('Modal opened for deity:', e.detail.deity);
// });
// window.addEventListener('mythologyDeitySwitched', (e) => {
//   // Animate deity transition
//   console.log('Switched to deity:', e.detail.deity);
// });
