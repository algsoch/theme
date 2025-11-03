// INDIAN ARCHITECTURE THEME - Comprehensive Architecture Showcase
(function() {
  'use strict';

  // Comprehensive Architecture Data covering all aspects of Indian architecture
  const architectureData = {
    'temples': {
      title: 'Temple Architecture',
      subtitle: 'Sacred Spaces & Divine Geometry',
      era: 'Ancient to Modern • 500 BCE - Present',
      description: 'Indian temple architecture represents the pinnacle of spiritual and artistic expression, where every element—from the towering shikhara to the intricate jali work—embodies cosmic principles. With distinct regional styles evolving over millennia, temples are not mere buildings but three-dimensional diagrams of the universe, translating philosophy into stone.',
      styles: [
        { name: 'Nagara (North India)', features: 'Beehive-shaped shikhara, cruciform base, ornate mandapa halls', example: 'Khajuraho, Konark Sun Temple, Lingaraja' },
        { name: 'Dravida (South India)', features: 'Pyramidal gopuram towers, enclosed courtyards, massive temple complexes', example: 'Meenakshi Temple, Brihadeeswarar, Ranganathaswamy' },
        { name: 'Vesara (Deccan)', features: 'Hybrid of Nagara and Dravida, star-shaped platforms, elaborate carvings', example: 'Hoysala Temples, Chennakesava Temple' }
      ],
      materials: '🪨 Sandstone, Granite, Marble, Laterite, Basalt',
      techniques: [
        'Vastu Shastra principles for cosmic alignment',
        'Shilpa Shastra (traditional sculpture and architecture texts)',
        'Intricate stone carving and bronze casting',
        'Acoustic engineering for sound resonance',
        'Astronomical alignments and solar calendars',
        'Fresco and mural paintings'
      ],
      elements: [
        '🕉️ Garbhagriha: Sacred inner sanctum housing the deity',
        '🎨 Mandapa: Pillared congregation hall for rituals',
        '⛰️ Shikhara/Vimana: Tower symbolizing Mount Meru',
        '🚪 Gopuram: Monumental gateway towers',
        '💧 Temple tanks: Sacred water bodies for purification',
        '🔔 Dhvajastambha: Ceremonial flag pillar',
        '🌸 Divine sculptures and celestial beings'
      ],
      quote: '"The temple is not just a building—it is a threshold between earth and cosmos, where stone becomes prayer and geometry becomes divinity." — Ancient Shilpa Texts'
    },
    'forts': {
      title: 'Forts & Palaces',
      subtitle: 'Power, Pride & Architectural Grandeur',
      era: 'Medieval to Colonial • 300 BCE - 1900 CE',
      description: 'Indian forts and palaces are magnificent testaments to military engineering fused with aesthetic splendor. From hilltop citadels commanding strategic heights to water-moated fortresses and opulent desert palaces, each structure tells stories of valor, romance, and architectural innovation spanning diverse dynasties across millennia.',
      styles: [
        { name: 'Hill Forts (Rajasthan)', features: 'Multiple defensive walls, water harvesting systems, strategic elevation', example: 'Mehrangarh, Amber, Chittorgarh, Kumbhalgarh' },
        { name: 'Coastal Forts', features: 'Sea-facing bastions, naval defense, lighthouse integration', example: 'Murud-Janjira, Bekal Fort, Sindhudurg' },
        { name: 'Desert Palaces', features: 'Passive cooling, jharokhas, courtyards, water architecture', example: 'Jaisalmer Fort, Umaid Bhawan, City Palace Jaipur' }
      ],
      materials: '🏗️ Red Sandstone, Yellow Sandstone, Limestone, Granite, Marble',
      techniques: [
        'Concentric defensive walls and strategic fortification',
        'Underground tunnels and secret escape routes',
        'Advanced water management (baolis, tanks, channels)',
        'Jali work (lattice screens) for ventilation and privacy',
        'Mirror work (sheesh mahal) creating optical illusions',
        'Fresco paintings and miniature Rajasthani art'
      ],
      elements: [
        '🏰 Massive gateways with elephant-proof spiked doors',
        '🗼 Watchtowers and corner bastions for surveillance',
        '🪟 Jharokhas: Overhanging carved balconies',
        '💎 Sheesh Mahal: Palaces adorned with mirror mosaics',
        '🌳 Baradari: Twelve-pillared garden pavilions',
        '🎭 Rang Mahal: Colorfully painted royal chambers',
        '⚔️ Armory halls and victory pillars'
      ],
      quote: '"These stones remember emperors and warriors, sieges and celebrations—each carving echoes with the grandeur of kingdoms and the poetry of power." — Rajput Chronicles'
    },
    'stepwells': {
      title: 'Stepwells (Baolis/Vavs)',
      subtitle: 'Descending into Water & Wonder',
      era: 'Medieval India • 600 CE - 1900 CE',
      description: 'Stepwells are India\'s extraordinary contribution to water architecture—functional structures that transcend utility to become architectural masterpieces. These multi-story subterranean marvels combine hydraulic engineering, artistic vision, and social space, with intricate carvings adorning descending corridors that lead to life-giving underground water.',
      styles: [
        { name: 'Gujarati Vavs', features: 'Deep wells with ornate pavilions, sculptural galleries, geometric precision', example: 'Rani ki Vav (UNESCO), Adalaj Stepwell, Dada Hari' },
        { name: 'Rajasthani Baolis', features: 'Rectangular design, multiple levels, community gathering spaces', example: 'Chand Baori (3,500 steps), Neemrana, Toorji' },
        { name: 'Delhi Baolis', features: 'Mughal-influenced, simpler design, arched corridors', example: 'Agrasen ki Baoli, Rajon ki Baoli, Gandhak ki Baoli' }
      ],
      materials: '💧 Sandstone, Marble, Laterite with intricate relief carvings',
      techniques: [
        'Groundwater recharge and aquifer management',
        'Temperature regulation (10-15°C cooler inside)',
        'Precise geometric calculations for step descent',
        'Underground galleries with natural light wells',
        'Rainwater harvesting and natural filtration',
        'Sculptural storytelling on pillars and walls'
      ],
      elements: [
        '💧 Multiple levels descending to groundwater',
        '🏛️ Pillared pavilions at various depths',
        '🎨 Intricate carvings of deities and apsaras',
        '🌡️ Natural cooling chambers and rest areas',
        '🪜 Symmetrical staircases creating geometric patterns',
        '⛲ Underground water storage tanks',
        '🌿 Integration with temple and palace complexes'
      ],
      quote: '"Where engineering meets poetry—each step down is a meditation, a journey through carved stone and shadow, culminating in the sacred embrace of water." — Heritage Architectural Scholar'
    },
    'vernacular': {
      title: 'Vernacular Architecture',
      subtitle: 'Climate-Responsive Indigenous Wisdom',
      era: 'Timeless Traditions • Ancient - Present',
      description: 'India\'s vernacular architecture embodies profound understanding of climate, topography, materials, and community. Built with locally sourced resources using time-tested techniques passed through generations, these structures represent true sustainability—from Kerala\'s sloping-roofed tharavad homes to Ladakh\'s fortress-like stone dwellings and tribal bamboo stilt houses.',
      styles: [
        { name: 'Kerala Architecture', features: 'Sloping tiled roofs, wooden construction, central courtyards, carved pillars', example: 'Nalukettu homes, Padmanabhapuram Palace, Mattancherry' },
        { name: 'Himalayan Architecture', features: 'Stone and timber, insulated walls, minimal windows, flat roofs for snow', example: 'Ladakhi houses, Kinnauri architecture, Spiti dwellings' },
        { name: 'Tribal Architecture', features: 'Bamboo, thatch, mud, stilt houses, circular huts, communal spaces', example: 'Gond homes, Toda huts, Assamese chang ghar, Khasi houses' },
        { name: 'Desert Architecture', features: 'Thick mud walls, wind catchers, small openings, courtyards for cooling', example: 'Jaisalmer havelis, Kutch bhungas, Thar village homes' }
      ],
      materials: '♻️ Mud, Bamboo, Thatch, Laterite, Stone, Lime Plaster, Terracotta, Wood',
      techniques: [
        'Passive cooling through courtyards and cross-ventilation',
        'Thermal mass using mud and stone for temperature regulation',
        'Rainwater harvesting integrated into roof design',
        'Zero-mile architecture using hyper-local materials',
        'Earthquake-resistant bamboo and timber construction',
        'Natural insulation using mud-straw composite',
        'Solar orientation for optimal sunlight and wind patterns'
      ],
      elements: [
        '🏡 Central courtyards for light, air, and family gatherings',
        '🪵 Carved wooden pillars and decorative brackets',
        '🧱 Mud walls providing natural temperature regulation',
        '🌾 Thatched roofs with excellent insulation',
        '🪟 Strategic window placement for cross-ventilation',
        '🎨 Traditional motifs reflecting local culture',
        '♻️ Biodegradable, sustainable, and eco-friendly materials'
      ],
      quote: '"Before there were architects, there were master builders who listened to the land, understood the climate, and created homes that breathed with nature—this is the eternal wisdom of vernacular architecture."'
    },
    'modern': {
      title: 'Modern Indian Architecture',
      subtitle: 'Innovation Rooted in Heritage',
      era: 'Contemporary India • 1950 CE - Present',
      description: 'Post-independence Indian architecture navigates the delicate balance between modernist principles and cultural identity. From Le Corbusier\'s Chandigarh to contemporary sustainable designs, modern Indian architects create iconic structures addressing rapid urbanization while honoring traditional wisdom—proving that modernity need not abandon heritage.',
      styles: [
        { name: 'Brutalist Modernism', features: 'Exposed concrete, geometric honesty, functional design, raw textures', example: 'IIM Ahmedabad (Louis Kahn), Chandigarh Capitol, IIMA' },
        { name: 'Contemporary Sustainable', features: 'Green architecture, vernacular fusion, climate-responsive, net-zero designs', example: 'Pearl Academy (Morphogenesis), ITC Green Centre, Suzlon' },
        { name: 'Neo-Traditional', features: 'Modern construction with traditional aesthetics, cultural symbolism', example: 'Lotus Temple, Akshardham, Jaipur Metro stations' }
      ],
      materials: '🏗️ Concrete, Glass, Steel, Bamboo, Recycled Materials, Sustainable Alternatives',
      techniques: [
        'Green building certification (LEED, GRIHA standards)',
        'Solar passive design and renewable energy integration',
        'Modular construction and prefabrication',
        'Smart building technologies and automation',
        'Adaptive reuse of heritage structures',
        'Bamboo as structural material (tensile strength)',
        'Vertical gardens, green roofs, and urban forests'
      ],
      elements: [
        '🌿 Sustainable and eco-friendly design principles',
        '☀️ Solar panels and renewable energy systems',
        '💧 Rainwater harvesting and greywater recycling',
        '🏗️ Earthquake-resistant and climate-adaptive structures',
        '🎨 Fusion of traditional motifs with contemporary forms',
        '🌐 Smart city integration and IoT connectivity',
        '♻️ Recycled materials and circular economy principles'
      ],
      notable: [
        '🪷 Lotus Temple (Bahai House of Worship) - Flower-inspired parametric design',
        '🏛️ Parliament House Complex - Colonial evolution to contemporary democracy',
        '🌆 Infosys & Tech Campuses - Silicon Valley of India meets sustainability',
        '🎭 National Museum of Indian Cinema - Curved narratives in concrete',
        '📚 IIM Bangalore - Louis Kahn\'s granite masterpiece',
        '🏨 Taj Mahal Palace restoration - Heritage conservation excellence',
        '🌳 CEPT University - Balkrishna Doshi\'s Pritzker-winning vision',
        '🚇 Delhi & Jaipur Metro - Infrastructure as art'
      ],
      quote: '"Modern Indian architecture is not about rejecting the past—it is about reinterpreting timeless wisdom through contemporary lenses, creating spaces that are globally relevant yet locally rooted, universally modern yet distinctly Indian." — Charles Correa'
    }
  };

  // State management
  const state = {
    modalOpen: false,
    currentCategory: 'temples',
    focusBeforeModal: null
  };

  // DOM cache
  const dom = {
    overlay: null,
    container: null,
    openBtn: null,
    closeBtn: null,
    categoryBtns: null,
    modalTitle: null,
    modalSubtitle: null,
    categoryEra: null,
    categoryContent: null,
    categoryQuote: null
  };

  // Initialize
  function init() {
    cacheDom();
    bindEvents();
    renderCategory(state.currentCategory);
    dispatchCustomEvent('architectureModalReady', { state, dom });
  }

  function cacheDom() {
    dom.overlay = document.getElementById('architectureModal');
    dom.container = dom.overlay?.querySelector('.modal-container');
    dom.openBtn = document.getElementById('openModalBtn');
    dom.closeBtn = document.getElementById('closeModalBtn');
    dom.categoryBtns = Array.from(document.querySelectorAll('.monument-btn'));
    dom.modalTitle = document.getElementById('modalTitle');
    dom.modalSubtitle = dom.overlay?.querySelector('.modal-subtitle');
    dom.categoryEra = dom.overlay?.querySelector('.monument-era');
    dom.categoryContent = document.getElementById('monumentContent');
    dom.categoryQuote = document.getElementById('monumentQuote');
  }

  function bindEvents() {
    dom.openBtn?.addEventListener('click', openModal);
    dom.closeBtn?.addEventListener('click', closeModal);
    dom.overlay?.addEventListener('click', handleOverlayClick);
    document.addEventListener('keydown', handleKeyDown);
    
    dom.categoryBtns.forEach(btn => {
      btn.addEventListener('click', () => switchCategory(btn.dataset.monument));
    });
  }

  // Modal control
  function openModal() {
    if (state.modalOpen) return;

    state.focusBeforeModal = document.activeElement;
    state.modalOpen = true;

    dom.overlay.removeAttribute('hidden');
    dom.overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      dom.closeBtn?.focus();
      setupFocusTrap();
    }, 300);

    dispatchCustomEvent('architectureModalOpened', { category: state.currentCategory });
  }

  function closeModal() {
    if (!state.modalOpen) return;

    state.modalOpen = false;
    dom.overlay.setAttribute('aria-hidden', 'true');
    setTimeout(() => {
      dom.overlay.setAttribute('hidden', '');
    }, 300);
    document.body.style.overflow = '';

    if (state.focusBeforeModal) {
      state.focusBeforeModal.focus();
    }

    dispatchCustomEvent('architectureModalClosed', { category: state.currentCategory });
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

  // Category switching
  function switchCategory(categoryId) {
    if (state.currentCategory === categoryId) return;
    
    state.currentCategory = categoryId;

    // Update button states
    dom.categoryBtns.forEach(btn => {
      const isActive = btn.dataset.monument === categoryId;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive);
    });

    // Render new category content
    renderCategory(categoryId);

    dispatchCustomEvent('categorySwitched', { category: categoryId });
  }

  // Render category content
  function renderCategory(categoryId) {
    const category = architectureData[categoryId];
    if (!category) return;

    // Update header
    if (dom.modalTitle) dom.modalTitle.textContent = category.title;
    if (dom.modalSubtitle) dom.modalSubtitle.textContent = category.subtitle;
    if (dom.categoryEra) dom.categoryEra.textContent = category.era;

    // Build styles HTML
    const stylesHTML = category.styles ? `
      <div class="content-section architecture-styles">
        <h3 class="section-title">✨ Architectural Styles & Regional Variations</h3>
        <div class="styles-grid">
          ${category.styles.map(style => `
            <div class="style-card">
              <h4 class="style-name">${style.name}</h4>
              <p class="style-features"><strong>Features:</strong> ${style.features}</p>
              <p class="style-example"><strong>Examples:</strong> ${style.example}</p>
            </div>
          `).join('')}
        </div>
      </div>
    ` : '';

    // Build techniques HTML
    const techniquesHTML = category.techniques ? `
      <div class="content-section architecture-techniques">
        <h3 class="section-title">🔨 Construction Techniques & Innovation</h3>
        <ul class="techniques-list">
          ${category.techniques.map(technique => `<li>${technique}</li>`).join('')}
        </ul>
      </div>
    ` : '';

    // Build elements HTML
    const elementsHTML = category.elements ? `
      <div class="content-section architecture-elements">
        <h3 class="section-title">🏛️ Key Architectural Elements</h3>
        <ul class="elements-grid">
          ${category.elements.map(element => `<li>${element}</li>`).join('')}
        </ul>
      </div>
    ` : '';

    // Build notable examples HTML (for modern architecture)
    const notableHTML = category.notable ? `
      <div class="content-section architecture-notable">
        <h3 class="section-title">🌟 Notable Examples</h3>
        <ul class="notable-grid">
          ${category.notable.map(item => `<li>${item}</li>`).join('')}
        </ul>
      </div>
    ` : '';

    // Update content
    if (dom.categoryContent) {
      dom.categoryContent.innerHTML = `
        <div class="monument-content category-showcase">
          <div class="content-section intro-section">
            <div class="section-ornament top" aria-hidden="true">✦ ◆ ✦</div>
            
            <p class="content-text category-description">
              ${category.description}
            </p>

            <div class="info-highlight">
              <div class="info-icon-large">🏗️</div>
              <div>
                <h4 class="info-label">Building Materials</h4>
                <p class="info-value">${category.materials}</p>
              </div>
            </div>

            <div class="section-ornament bottom" aria-hidden="true">◆ ✦ ◆</div>
          </div>

          ${stylesHTML}
          ${techniquesHTML}
          ${elementsHTML}
          ${notableHTML}
        </div>
      `;
    }

    // Update quote
    if (dom.categoryQuote) {
      dom.categoryQuote.innerHTML = category.quote;
    }
  }

  // Custom events
  function dispatchCustomEvent(eventName, detail) {
    window.dispatchEvent(new CustomEvent(eventName, { detail }));
  }

  // Public API
  window.ArchitectureModal = {
    open: openModal,
    close: closeModal,
    switchCategory: switchCategory,
    getState: () => ({ ...state }),
    getDom: () => ({ ...dom }),
    getCategories: () => ({ ...architectureData })
  };

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
