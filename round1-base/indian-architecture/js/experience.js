// INDIAN ARCHITECTURE - INTERACTIVE STORYTELLING EXPERIENCE
// Fast, smooth, innovative - tells a story visually

console.log('=================================================');
console.log('🔥 EXPERIENCE.JS FILE LOADED!');
console.log('=================================================');

(function() {
  'use strict';
  
  console.log('✅ IIFE Started');

  // STORY CHAPTERS - Immersive visual storytelling beyond monuments
  const chapters = [
    {
      id: 0,
      title: "The Artisans: Hands That Built Wonders",
      description: "Meet the forgotten heroes - stone carvers who spent lifetimes mastering one technique, learning from fathers and grandfathers. A single pillar? 3 years of hand-carving by 20 craftsmen. This isn't construction - it's devotion turned into art.",
      highlights: [
        "👷 Generational knowledge: Skills passed down for 1000+ years",
        "🔨 One chisel, infinite patience: 8-hour days carving a single flower",
        "🎨 Women artisans painting frescoes using natural pigments from rocks"
      ],
      imageUrl: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
      story: "In Khajuraho, archaeologists found tools from 1000 CE still sharp enough to carve marble. The secret? Tempering techniques modern science only discovered in 1950."
    },
    {
      id: 1,
      title: "Materials That Tell Stories",
      description: "Forget boring concrete. Indian builders used red sandstone that changes color at sunrise, black granite that survives 2000 years, marble so pure it glows in moonlight. Each material chosen for meaning, not just strength.",
      highlights: [
        "🪨 Sandstone from Rajasthan desert: Turns golden at sunset",
        "⚫ Basalt from volcanic hills: Carved into 10-ton temple pillars",
        "� White marble from Makrana: Same quarries as Taj Mahal, still working 400 years later"
      ],
      imageUrl: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800",
      story: "The Meenakshi Temple uses 14 different types of stone from 14 different regions - a geological map of India built in 1600 CE.",
      visual: `
        <svg viewBox="0 0 400 400" class="visual-svg">
          <rect x="50" y="150" width="300" height="200" fill="#8B4513" rx="10">
            <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite"/>
          </rect>
          <rect x="80" y="100" width="60" height="100" fill="#A0522D"/>
          <rect x="260" y="100" width="60" height="100" fill="#A0522D"/>
          <polygon points="110,100 110,50 140,50" fill="#654321"/>
          <polygon points="290,100 290,50 320,50" fill="#654321"/>
          <circle cx="200" cy="250" r="20" fill="#FFD700" opacity="0.8">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
          </circle>
        </svg>
      `
    },
    {
      id: 2,
      title: "Water Engineers of the Desert",
      description: "In 50°C heat with no rivers, communities built stepwells - underground palaces that store water and stay cool. These weren't engineers with degrees. They were villagers who understood physics through generations of trial and death.",
      highlights: [
        "💧 Rani ki Vav: 7 stories deep, 800 sculptures, still collecting groundwater",
        "🧮 Mathematical precision: Stairs angled exactly 17° for optimal coolness",
        "👥 Community project: Entire village carved one stepwell over 20 years"
      ],
      imageUrl: "https://images.unsplash.com/photo-1609920658906-8223bd289001?w=800",
      story: "Chand Baori stepwell has 3,500 steps and 13 stories. If you fell from the top, you'd fall for 6 full seconds before hitting water 100 feet down.",
      visual: `
        <svg viewBox="0 0 400 400" class="visual-svg">
          <defs>
            <linearGradient id="waterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style="stop-color:#87CEEB"/>
              <stop offset="100%" style="stop-color:#4682B4"/>
            </linearGradient>
          </defs>
          <path d="M100,100 L300,100 L280,350 L120,350 Z" fill="url(#waterGrad)" opacity="0.8">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0;0,5;0,0"
              dur="4s"
              repeatCount="indefinite"/>
          </path>
          <line x1="120" y1="150" x2="280" y2="150" stroke="#fff" stroke-width="3" opacity="0.6"/>
          <line x1="130" y1="200" x2="270" y2="200" stroke="#fff" stroke-width="3" opacity="0.6"/>
          <line x1="140" y1="250" x2="260" y2="250" stroke="#fff" stroke-width="3" opacity="0.6"/>
          <circle cx="200" cy="320" r="20" fill="#FFD700" opacity="0.5">
            <animate attributeName="r" values="20;25;20" dur="3s" repeatCount="indefinite"/>
          </circle>
        </svg>
      `
    },
    {
      id: 3,
      title: "Climate Warriors of 1200 CE",
      description: "No electricity. No AC. Yet buildings stayed 15°C cooler inside. Wind catchers, water channels, thick walls, courtyards that create natural convection - they understood physics without formulas.",
      highlights: [
        "🌬️ Hawa Mahal's 953 windows: Natural air conditioning using Venturi effect",
        "💨 Wind towers in Gujarat: Pull hot air out, push cool air in",
        "�️ Massive thermal mass: Thick walls absorb heat during day, release at night"
      ],
      imageUrl: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800",
      story: "Fatehpur Sikri (1571 CE) uses evaporative cooling so effective that its chambers stay at 22°C even when outside temperature hits 48°C. Zero electricity. Just water channels and geometry.",
      visual: `
        <svg viewBox="0 0 400 400" class="visual-svg">
          <circle cx="200" cy="200" r="120" fill="none" stroke="#DAA520" stroke-width="4" opacity="0.6">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 200 200"
              to="360 200 200"
              dur="20s"
              repeatCount="indefinite"/>
          </circle>
          <circle cx="200" cy="200" r="80" fill="none" stroke="#C19A6B" stroke-width="3" opacity="0.6">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="360 200 200"
              to="0 200 200"
              dur="15s"
              repeatCount="indefinite"/>
          </circle>
          <circle cx="200" cy="200" r="50" fill="#DAA520" opacity="0.7">
            <animate attributeName="opacity" values="0.5;0.9;0.5" dur="3s" repeatCount="indefinite"/>
          </circle>
          <text x="200" y="210" text-anchor="middle" fill="#fff" font-size="24" font-weight="bold">✨</text>
        </svg>
      `
    },
    {
      id: 4,
      title: "What We Lost (And Are Finding Again)",
      description: "We built skyscrapers that need AC 24/7. Then realized: ancient Indians built cooler buildings with zero electricity. Today's architects are desperately rediscovering what grandmothers knew.",
      highlights: [
        "�️ IIM Bangalore uses 800-year-old jaali (lattice) screens: 50% less AC needed",
        "🌱 Laurie Baker's mud architecture: Houses that cost 1/10th of concrete but last longer",
        "� The Pearl Academy (2014): Stepwell-inspired design, uses 100% passive cooling"
      ],
      imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      story: "The Infosys Mysore campus (2008) copied ancient temple cooling systems. Result? 25% lower electricity bills while housing 13,500 employees. Ancient wisdom, modern scale.",
      visual: `
        <svg viewBox="0 0 400 400" class="visual-svg">
          <rect x="80" y="150" width="60" height="200" fill="#333" opacity="0.8">
            <animate attributeName="height" values="200;220;200" dur="4s" repeatCount="indefinite"/>
          </rect>
          <rect x="170" y="100" width="60" height="250" fill="#555" opacity="0.9">
            <animate attributeName="height" values="250;270;250" dur="3s" repeatCount="indefinite"/>
          </rect>
          <rect x="260" y="130" width="60" height="220" fill="#333" opacity="0.8">
            <animate attributeName="height" values="220;240;220" dur="5s" repeatCount="indefinite"/>
          </rect>
          <circle cx="200" cy="80" r="30" fill="#DAA520" opacity="0.7">
            <animate attributeName="cy" values="80;70;80" dur="3s" repeatCount="indefinite"/>
          </circle>
        </svg>
      `
    }
  ];

  // DOM elements cache
  const dom = {
    loadingScreen: null,
    particlesContainer: null,
    hero: null,
    startBtn: null,
    exploreBtn: null,
    experienceContainer: null,
    monumentExplorer: null,
    exitBtn: null,
    closeExplorer: null,
    chapterViewer: null,
    prevBtn: null,
    nextBtn: null,
    navDots: [],
    particles: [],
    shareFab: null,
    fabToggle: null,
    fabMenu: null
  };  // State
  let currentChapter = 0;

  // Initialize
  function init() {
    console.log('🏛️ Initializing Architecture Experience...');
    
    // Cache DOM elements
    dom.loadingScreen = document.getElementById('loadingScreen');
    dom.particlesContainer = document.getElementById('particles');
    dom.hero = document.querySelector('.hero-section');
    dom.startBtn = document.getElementById('startJourney');
    dom.exploreBtn = document.getElementById('exploreMonuments');
    dom.experienceContainer = document.getElementById('experienceContainer');
    dom.monumentExplorer = document.getElementById('monumentExplorer');
    dom.exitBtn = document.getElementById('exitExperience');
    dom.closeExplorer = document.getElementById('closeExplorer');
    dom.chapterViewer = document.querySelector('.chapter-viewer');
    dom.prevBtn = document.getElementById('prevChapter');
    dom.nextBtn = document.getElementById('nextChapter');
    dom.navDots = Array.from(document.querySelectorAll('.nav-dot'));
    dom.shareFab = document.querySelector('.share-fab');
    dom.fabToggle = document.querySelector('.fab-toggle');
    dom.fabMenu = document.querySelector('.fab-menu');
    
    console.log('✅ DOM elements cached:', {
      loadingScreen: !!dom.loadingScreen,
      hero: !!dom.hero,
      startBtn: !!dom.startBtn,
      exploreBtn: !!dom.exploreBtn
    });
    
    // Hide loading screen after delay
    hideLoadingScreen();
    
    // Create particles
    createParticles();
    
    // Bind events
    bindEvents();
    
    console.log('🎉 Architecture Experience Ready!');
  }
  
  // Hide loading screen
  function hideLoadingScreen() {
    setTimeout(() => {
      if (dom.loadingScreen) {
        dom.loadingScreen.classList.add('hidden');
        console.log('✅ Loading screen hidden');
      }
    }, 2000); // 2 second delay to show the animation
  }  // Create floating particles
  function createParticles() {
    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 8 + 's';
      particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
      dom.particlesContainer.appendChild(particle);
    }
  }

    // Bind events
  function bindEvents() {
    console.log('🔗 Binding events...');
    console.log('Start button element:', dom.startBtn);
    console.log('Explore button element:', dom.exploreBtn);
    
    if (dom.startBtn) {
      console.log('✅ Adding click listener to Start button');
      dom.startBtn.addEventListener('click', () => {
        console.log('🎬 Start button clicked!');
        startExperience();
      });
      console.log('✅ Start button listener added');
    } else {
      console.error('❌ Start button NOT FOUND!');
    }
    
    if (dom.exploreBtn) {
      console.log('✅ Adding click listener to Explore button');
      dom.exploreBtn.addEventListener('click', () => {
        console.log('🏛️ Explore monuments clicked!');
        openMonumentExplorer();
      });
      console.log('✅ Explore button listener added');
    } else {
      console.error('❌ Explore button NOT FOUND!');
    }
    
    if (dom.exitBtn) {
      dom.exitBtn.addEventListener('click', exitExperience);
    }
    
    if (dom.closeExplorer) {
      dom.closeExplorer.addEventListener('click', closeMonumentExplorer);
    }
    
    if (dom.prevBtn) {
      dom.prevBtn.addEventListener('click', () => navigate(-1));
    }
    
    if (dom.nextBtn) {
      dom.nextBtn.addEventListener('click', () => navigate(1));
    }
    
    // Share FAB
    if (dom.fabToggle) {
      dom.fabToggle.addEventListener('click', toggleShareMenu);
    }
    
    // Share buttons
    document.querySelectorAll('.fab-item').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const action = e.currentTarget.dataset.share;
        handleShare(action);
      });
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (!experienceActive) return;
      
      if (e.key === 'ArrowLeft') navigate(-1);
      if (e.key === 'ArrowRight') navigate(1);
      if (e.key === 'Escape') exitExperience();
    });
    
    // Nav dots
    dom.navDots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        if (experienceActive) {
          currentChapter = index;
          renderChapter(currentChapter);
          updateNavigation();
        }
      });
    });
    
    console.log('✅ Events bound successfully');
  }
  
  // Monument Data
  const monuments = {
    'taj-mahal': {
      name: 'Taj Mahal',
      location: 'Agra, Uttar Pradesh',
      year: '1632-1653',
      description: 'Emperor Shah Jahan built this white marble mausoleum for his beloved wife Mumtaz Mahal. 20,000 artisans worked for 21 years, using precious stones from across Asia.',
      icon: '🕌',
      color: 'linear-gradient(135deg, #E8DCC8 0%, #C19A6B 100%)',
      facts: [
        'Changes color throughout the day - pink at dawn, white at noon, golden at sunset',
        'Made from white marble transported 300km from Makrana',
        'Took 1,000 elephants to transport materials',
        'Perfect symmetry - even minarets tilt outward to prevent collapse on the main tomb'
      ]
    },
    'konark': {
      name: 'Konark Sun Temple',
      location: 'Konark, Odisha', 
      year: '1250 CE',
      description: 'A massive stone chariot with 24 wheels, pulled by 7 horses. The wheels function as sundials, accurately telling time. Built by King Narasimhadeva I.',
      icon: '☀️',
      color: 'linear-gradient(135deg, #FFB74D 0%, #FF9800 100%)',
      facts: [
        '24 stone wheels represent the 24 hours of a day',
        'Wheels were designed as functional sundials',
        'Originally 229 feet tall (now partially collapsed)',
        'Sculptures show the entire cycle of life and death'
      ]
    },
    'hawa-mahal': {
      name: 'Hawa Mahal',
      location: 'Jaipur, Rajasthan',
      year: '1799',
      description: 'The "Palace of Winds" with 953 small windows. Built for royal women to observe street life without being seen. Acts as natural air conditioning.',
      icon: '🪟',
      color: 'linear-gradient(135deg, #FFB6C1 0%, #FF69B4 100%)',
      facts: [
        '953 jharokhas (small windows) for ventilation',
        'Only 1.5 feet deep - it\'s just a facade!',
        'Wind flows through creating natural AC in 45°C heat',
        'Pink sandstone that gives Jaipur its "Pink City" nickname'
      ]
    },
    'gateway': {
      name: 'Gateway of India',
      location: 'Mumbai, Maharashtra',
      year: '1924',
      description: 'Built to commemorate King George V\'s visit. Ironically, the last British troops left India through this gate in 1948, marking independence.',
      icon: '🚪',
      color: 'linear-gradient(135deg, #FFE082 0%, #FFD54F 100%)',
      facts: [
        'Built with yellow basalt and reinforced concrete',
        '26 meters (85 feet) high',
        'Witnessed the last British troops leaving India in 1948',
        'Combines Hindu and Muslim architectural elements'
      ]
    },
    'golden-temple': {
      name: 'Golden Temple',
      location: 'Amritsar, Punjab',
      year: '1577-1604',
      description: 'Harmandir Sahib - the holiest Gurdwara of Sikhism. Covered in 750kg of gold. Feeds over 100,000 people daily for FREE in the world\'s largest kitchen.',
      icon: '✨',
      color: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
      facts: [
        '750kg of pure gold covering the upper floors',
        'Open to ALL religions and castes - 4 doors facing 4 directions',
        'Free kitchen (Langar) serves 100,000+ meals DAILY',
        'Surrounded by sacred pool - Amrit Sarovar (Pool of Nectar)'
      ]
    }
  };

  // Monument Explorer
  function openMonumentExplorer() {
    if (dom.monumentExplorer) {
      dom.monumentExplorer.removeAttribute('hidden');
      document.body.style.overflow = 'hidden';
      
      // Bind monument card clicks
      const monumentCards = document.querySelectorAll('.monument-card');
      monumentCards.forEach(card => {
        card.addEventListener('click', () => {
          const monumentId = card.dataset.monument;
          showMonumentDetail(monumentId);
        });
      });
      
      console.log('✅ Monument explorer opened');
    }
  }
  
  function closeMonumentExplorer() {
    if (dom.monumentExplorer) {
      dom.monumentExplorer.setAttribute('hidden', '');
      document.body.style.overflow = '';
      
      // Hide detail view if open
      const detailView = document.getElementById('monumentDetail');
      if (detailView) {
        detailView.setAttribute('hidden', '');
      }
      
      console.log('✅ Monument explorer closed');
    }
  }
  
  function showMonumentDetail(monumentId) {
    const monument = monuments[monumentId];
    if (!monument) return;
    
    const detailView = document.getElementById('monumentDetail');
    if (!detailView) return;
    
    detailView.innerHTML = `
      <div class="detail-content" style="background: ${monument.color};">
        <button class="detail-back" onclick="document.getElementById('monumentDetail').setAttribute('hidden', '')">
          ← Back to all monuments
        </button>
        
        <div class="detail-hero">
          <div class="detail-icon">${monument.icon}</div>
          <h2 class="detail-title">${monument.name}</h2>
          <p class="detail-meta">${monument.location} • ${monument.year}</p>
        </div>
        
        <div class="detail-body">
          <p class="detail-description">${monument.description}</p>
          
          <h3 class="detail-subtitle">Mind-Blowing Facts:</h3>
          <ul class="detail-facts">
            ${monument.facts.map(fact => `<li class="detail-fact">💡 ${fact}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
    
    detailView.removeAttribute('hidden');
    console.log(`✅ Showing detail for: ${monument.name}`);
  }
  
  // Share functionality
  function toggleShareMenu() {
    if (dom.fabMenu) {
      const isHidden = dom.fabMenu.hasAttribute('hidden');
      if (isHidden) {
        dom.fabMenu.removeAttribute('hidden');
      } else {
        dom.fabMenu.setAttribute('hidden', '');
      }
    }
  }
  
  function handleShare(action) {
    const url = window.location.href;
    const text = 'Check out this amazing journey through Indian Architecture!';
    
    switch(action) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank', 'width=550,height=420');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank', 'width=550,height=420');
        break;
      case 'copy':
        navigator.clipboard.writeText(url).then(() => {
          alert('Link copied to clipboard!');
        });
        break;
    }
    
    // Close menu after action
    if (dom.fabMenu) {
      dom.fabMenu.setAttribute('hidden', '');
    }
  }

  // Start experience
  function startExperience() {
    console.log('startExperience called!');
    console.log('Experience container:', dom.experienceContainer);
    
    // Remove hidden attribute to trigger CSS transition
    dom.experienceContainer.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    
    // Wait for transition, then render chapter
    setTimeout(() => {
      console.log('Container should now be visible. Rendering chapter 0...');
      renderChapter(0);
    }, 100);
  }

  // Exit experience
  function exitExperience() {
    dom.experienceContainer.setAttribute('hidden', '');
    document.body.style.overflow = '';
    currentChapter = 0;
  }

  // Navigate chapters
  function navigate(direction) {
    const newChapter = currentChapter + direction;
    if (newChapter >= 0 && newChapter < chapters.length) {
      goToChapter(newChapter);
    }
  }

  // Go to specific chapter
  function goToChapter(index) {
    // Exit animation for current chapter
    const currentEl = dom.chapterViewer.querySelector('.chapter.active');
    if (currentEl) {
      currentEl.classList.remove('active');
      currentEl.classList.add('exit-left');
      setTimeout(() => currentEl.remove(), 600);
    }

    currentChapter = index;
    renderChapter(index);
    updateNavigation();
  }

  // Render chapter
  function renderChapter(index) {
    const chapter = chapters[index];
    
    const chapterEl = document.createElement('div');
    chapterEl.className = 'chapter';
    
    // Determine what to show in visual area
    const visualContent = chapter.imageUrl 
      ? `<img src="${chapter.imageUrl}" alt="${chapter.title}" class="chapter-image" />`
      : chapter.visual;
    
    const visualClass = chapter.imageUrl ? 'chapter-visual has-image' : 'chapter-visual';
    
    chapterEl.innerHTML = `
      <div class="chapter-content">
        <div class="${visualClass}">
          ${visualContent}
        </div>
        <div class="chapter-text">
          <h2 class="chapter-title">${chapter.title}</h2>
          <p class="chapter-description">${chapter.description}</p>
          ${chapter.story ? `<p class="chapter-story">💡 <em>${chapter.story}</em></p>` : ''}
          <ul class="chapter-highlights">
            ${chapter.highlights.map(h => `<li class="highlight-item">${h}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
    
    dom.chapterViewer.appendChild(chapterEl);
    
    // Trigger animation
    requestAnimationFrame(() => {
      chapterEl.classList.add('active');
    });
  }

  // Update navigation
  function updateNavigation() {
    dom.navDots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentChapter);
    });

    dom.prevBtn.disabled = currentChapter === 0;
    dom.nextBtn.disabled = currentChapter === chapters.length - 1;

    if (currentChapter === chapters.length - 1) {
      dom.nextBtn.querySelector('span').textContent = 'Finish';
      dom.nextBtn.onclick = exitExperience;
    } else {
      dom.nextBtn.querySelector('span').textContent = 'Next →';
      dom.nextBtn.onclick = () => navigate(1);
    }
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
