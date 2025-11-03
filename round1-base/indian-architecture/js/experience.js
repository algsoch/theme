// INDIAN ARCHITECTURE - INTERACTIVE STORYTELLING EXPERIENCE
// Fast, smooth, innovative - tells a story visually

console.log('=================================================');
console.log('🔥 EXPERIENCE.JS FILE LOADED!');
console.log('=================================================');

(function() {
  'use strict';
  
  console.log('✅ IIFE Started');

  // STORY CHAPTERS - Making Indian Architecture Famous Worldwide! 🏛️✨
  const chapters = [
    {
      id: 0,
      title: "Gateway to Grandeur",
      subtitle: "Welcome | स्वागत | Namaste",
      description: "Welcome, traveler! Step through these majestic arches. In India, grand gateways mark entrances to ancient palaces and temples, each inviting you to a world of history.",
      highlights: [
        "🏛️ Grand Gateways: Every palace and temple begins with an invitation to wonder",
        "🎨 Intricate Carvings: Each arch tells stories of welcome and prosperity",
        "� Symbol of Hospitality: Indian architecture opens its arms to all travelers"
      ],
      imageUrl: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800",
      story: "The Gateway of India in Mumbai welcomed King George V in 1911. Today, it welcomes millions, standing as a symbol of Indian hospitality and architectural grandeur.",
      interactive: {
        type: "gateway-animation",
        tooltip: "🚪 Tap to open the grand gateway!",
        fact: "Indian gateways often face east to catch the first rays of the rising sun—a symbol of new beginnings!"
      },
      visual: `
        <svg viewBox="0 0 400 400" class="visual-svg gateway-svg">
          <defs>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style="stop-color:#FFD700"/>
              <stop offset="100%" style="stop-color:#DAA520"/>
            </linearGradient>
          </defs>
          <!-- Left Door -->
          <rect class="door-left" x="50" y="100" width="140" height="250" fill="url(#goldGrad)" rx="10">
            <animate attributeName="x" values="50;20;50" dur="6s" repeatCount="indefinite"/>
          </rect>
          <!-- Right Door -->
          <rect class="door-right" x="210" y="100" width="140" height="250" fill="url(#goldGrad)" rx="10">
            <animate attributeName="x" values="210;240;210" dur="6s" repeatCount="indefinite"/>
          </rect>
          <!-- Arch -->
          <path d="M 30,100 Q 200,30 370,100" fill="none" stroke="#DAA520" stroke-width="6" opacity="0.8">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite"/>
          </path>
          <!-- Welcome Symbol -->
          <circle cx="200" cy="225" r="40" fill="#FFD700" opacity="0.3">
            <animate attributeName="r" values="40;50;40" dur="4s" repeatCount="indefinite"/>
          </circle>
          <text x="200" y="240" text-anchor="middle" fill="#8B4513" font-size="48" font-weight="bold">🙏</text>
        </svg>
      `
    },
    {
      id: 1,
      title: "Whispering Walls",
      subtitle: "History Speaks from Every Surface",
      description: "Pause… Listen to the walls! Here, every stone and fresco retells stories of gods, battles, poets, and daily life. India's palaces and temples are living museums, where history speaks from every surface.",
      highlights: [
        "📜 Living Museums: Walls covered in frescoes depicting ancient festivals and myths",
        "🎭 Stories in Stone: Every carving is a chapter—love stories, epic battles, daily life",
        "🖼️ Natural Pigments: Artists used minerals, plants, and gems to create colors that last 1000+ years"
      ],
      imageUrl: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
      story: "At Ajanta Caves, wall paintings from 200 BCE still show vibrant blues from lapis lazuli, reds from ochre, and greens from copper—colors that have survived 2,200 years!",
      interactive: {
        type: "wall-stories",
        tooltip: "🔍 Hover over frescoes to discover their secrets!",
        fact: "The Ramayana epic is carved across 1,200 panels at Angkor Wat—built by Indian artisans in Cambodia!"
      },
      visual: `
        <svg viewBox="0 0 400 400" class="visual-svg fresco-svg">
          <!-- Wall Background -->
          <rect x="50" y="80" width="300" height="280" fill="#8B4513" opacity="0.9" rx="5"/>
          
          <!-- Fresco Panels (hoverable) -->
          <g class="fresco-panel" data-story="Holi Festival">
            <rect x="70" y="100" width="80" height="80" fill="#FF6B6B" opacity="0.7" rx="3">
              <animate attributeName="opacity" values="0.7;0.9;0.7" dur="3s" repeatCount="indefinite"/>
            </rect>
            <circle cx="110" cy="140" r="15" fill="#FFD700"/>
            <text x="110" y="145" text-anchor="middle" font-size="20">🎨</text>
          </g>
          
          <g class="fresco-panel" data-story="Battle Scene">
            <rect x="160" y="100" width="80" height="80" fill="#4ECDC4" opacity="0.7" rx="3">
              <animate attributeName="opacity" values="0.7;0.9;0.7" dur="2.5s" repeatCount="indefinite"/>
            </rect>
            <text x="200" y="145" text-anchor="middle" font-size="24">⚔️</text>
          </g>
          
          <g class="fresco-panel" data-story="Love Story">
            <rect x="250" y="100" width="80" height="80" fill="#FFE66D" opacity="0.7" rx="3">
              <animate attributeName="opacity" values="0.7;0.9;0.7" dur="3.5s" repeatCount="indefinite"/>
            </rect>
            <text x="290" y="145" text-anchor="middle" font-size="24">💕</text>
          </g>
          
          <!-- Ancient Text -->
          <path d="M 80,220 Q 200,200 320,220" stroke="#DAA520" stroke-width="2" fill="none" opacity="0.6"/>
          <path d="M 80,250 Q 200,230 320,250" stroke="#DAA520" stroke-width="2" fill="none" opacity="0.6"/>
          <path d="M 80,280 Q 200,260 320,280" stroke="#DAA520" stroke-width="2" fill="none" opacity="0.6"/>
          
          <!-- Decorative Border -->
          <rect x="50" y="80" width="300" height="280" fill="none" stroke="#DAA520" stroke-width="3" rx="5">
            <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="4s" repeatCount="indefinite"/>
          </rect>
        </svg>
      `
    },
    {
      id: 2,
      title: "Lattice of Light",
      subtitle: "Stone That Dances with Shadows",
      description: "Sunlight streams through delicate jali screens—stone lattices that weave dazzling shadows and cool the halls. No two patterns are ever the same!",
      highlights: [
        "🌞 Jali Screens: Intricate stone lattices that filter light into magical patterns",
        "❄️ Natural Cooling: These screens cut heat by 30% while creating art on your walls",
        "🎨 Unique Designs: Each jali is a masterpiece—geometric fractals carved by hand"
      ],
      imageUrl: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800",
      story: "The Hawa Mahal has 953 jali windows! On a sunny day, the palace floor becomes a canvas of 953 unique shadow patterns dancing throughout the day.",
      interactive: {
        type: "jali-pattern",
        tooltip: "💡 Watch how light creates magic through stone!",
        fact: "Jali screens are like ancient 3D printers—masters carved them layer by layer, creating impossible geometric patterns!"
      },
      visual: `
        <svg viewBox="0 0 400 400" class="visual-svg jali-svg">
          <defs>
            <pattern id="jaliPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="8" fill="#DAA520" opacity="0.6"/>
              <rect x="12" y="12" width="16" height="16" fill="none" stroke="#FFD700" stroke-width="1.5"/>
            </pattern>
            <radialGradient id="lightBeam">
              <stop offset="0%" style="stop-color:#FFF8DC" stop-opacity="0.9"/>
              <stop offset="100%" style="stop-color:#DAA520" stop-opacity="0.2"/>
            </radialGradient>
          </defs>
          
          <!-- Jali Screen Structure -->
          <rect x="80" y="100" width="240" height="220" fill="url(#jaliPattern)" opacity="0.9">
            <animate attributeName="opacity" values="0.8;1;0.8" dur="4s" repeatCount="indefinite"/>
          </rect>
          
          <!-- Light Beams Through Jali -->
          <g class="light-beams">
            <ellipse cx="140" cy="150" rx="30" ry="60" fill="url(#lightBeam)" transform="rotate(-15 140 150)">
              <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite"/>
            </ellipse>
            <ellipse cx="200" cy="180" rx="35" ry="70" fill="url(#lightBeam)" transform="rotate(10 200 180)">
              <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3.5s" repeatCount="indefinite"/>
            </ellipse>
            <ellipse cx="260" cy="160" rx="30" ry="65" fill="url(#lightBeam)" transform="rotate(-20 260 160)">
              <animate attributeName="opacity" values="0.3;0.7;0.3" dur="4s" repeatCount="indefinite"/>
            </ellipse>
          </g>
          
          <!-- Shadow Patterns on Floor -->
          <g opacity="0.4">
            <circle cx="150" cy="340" r="15" fill="#8B4513">
              <animate attributeName="r" values="15;18;15" dur="3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="220" cy="350" r="20" fill="#8B4513">
              <animate attributeName="r" values="20;23;20" dur="3.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="280" cy="345" r="12" fill="#8B4513">
              <animate attributeName="r" values="12;15;12" dur="4s" repeatCount="indefinite"/>
            </circle>
          </g>
          
          <!-- Sun Symbol -->
          <circle cx="350" cy="70" r="25" fill="#FFD700">
            <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite"/>
          </circle>
        </svg>
      `
    },
    {
      id: 3,
      title: "Symmetry in Spirit",
      subtitle: "Where Heaven Meets Earth Through Geometry",
      description: "Look around—every column, pathway, and garden here follows sacred symmetry, connecting heaven and earth through geometry. This harmony is called Vastu Shastra.",
      highlights: [
        "📐 Vastu Shastra: Ancient Indian 'Feng Shui'—harmony through sacred geometry (5000+ years old!)",
        "⚖️ Perfect Balance: Buildings aligned with cosmic energies, cardinal directions, and natural elements",
        "🌸 Mandala Layouts: Palace grounds designed as mandalas—spiritual diagrams you can walk through"
      ],
      imageUrl: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800",
      story: "The Taj Mahal is perfectly symmetrical in every dimension—from the four minarets to the gardens. This wasn't just beauty—it was believed to channel divine energy!",
      interactive: {
        type: "symmetry-grid",
        tooltip: "✨ Hover to reveal the hidden geometry!",
        fact: "Vastu Shastra influenced architecture across Asia—from Angkor Wat to Borobudur. India's gift to sacred geometry!"
      },
      visual: `
        <svg viewBox="0 0 400 400" class="visual-svg symmetry-svg">
          <defs>
            <linearGradient id="cosmicGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#DAA520"/>
              <stop offset="50%" style="stop-color:#FFD700"/>
              <stop offset="100%" style="stop-color:#DAA520"/>
            </linearGradient>
          </defs>
          
          <!-- Mandala Pattern - Sacred Geometry -->
          <g class="mandala-layer" opacity="0.7">
            <circle cx="200" cy="200" r="150" fill="none" stroke="url(#cosmicGrad)" stroke-width="2">
              <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="30s" repeatCount="indefinite"/>
            </circle>
            <circle cx="200" cy="200" r="120" fill="none" stroke="#FFD700" stroke-width="2">
              <animateTransform attributeName="transform" type="rotate" from="360 200 200" to="0 200 200" dur="25s" repeatCount="indefinite"/>
            </circle>
            <circle cx="200" cy="200" r="90" fill="none" stroke="#DAA520" stroke-width="2">
              <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="20s" repeatCount="indefinite"/>
            </circle>
          </g>
          
          <!-- Cardinal Directions -->
          <line x1="200" y1="50" x2="200" y2="350" stroke="#DAA520" stroke-width="1.5" opacity="0.5" stroke-dasharray="5,5">
            <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite"/>
          </line>
          <line x1="50" y1="200" x2="350" y2="200" stroke="#DAA520" stroke-width="1.5" opacity="0.5" stroke-dasharray="5,5">
            <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite"/>
          </line>
          
          <!-- Sacred Square (Vastu Purusha Mandala) -->
          <rect x="120" y="120" width="160" height="160" fill="none" stroke="#FFD700" stroke-width="3" opacity="0.6">
            <animate attributeName="opacity" values="0.4;0.8;0.4" dur="4s" repeatCount="indefinite"/>
          </rect>
          
          <!-- Lotus Center (Symbol of Purity) -->
          <circle cx="200" cy="200" r="40" fill="#FFD700" opacity="0.3">
            <animate attributeName="r" values="40;45;40" dur="3s" repeatCount="indefinite"/>
          </circle>
          <text x="200" y="215" text-anchor="middle" fill="#DAA520" font-size="40" font-weight="bold">🪷</text>
          
          <!-- Symmetry Lines -->
          <line x1="120" y1="120" x2="280" y2="280" stroke="#C19A6B" stroke-width="1" opacity="0.3"/>
          <line x1="280" y1="120" x2="120" y2="280" stroke="#C19A6B" stroke-width="1" opacity="0.3"/>
        </svg>
      `
    },
    {
      id: 4,
      title: "Legacy Carved in Stone",
      subtitle: "Celebrations of Faith, Skill, and Joy",
      description: "All these wonders come from generations of artists, masons, and dreamers. Every carving, arch, and dome is a celebration of faith, skill, and joy—India's story, written forever in stone.",
      highlights: [
        "👨‍🎨 20,000 Workers: The Taj Mahal took 22 years—a lifetime of devotion from 20,000 artisans",
        "🔨 Generational Mastery: Skills passed from grandfather to father to son for 1000+ years",
        "💎 Living Heritage: These monuments still inspire architects, artists, and dreamers worldwide"
      ],
      imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      story: "When the Taj Mahal was complete, Emperor Shah Jahan is said to have wept—not from sadness, but from joy that such beauty could exist. That's the spirit of Indian architecture: building not just structures, but dreams in stone.",
      interactive: {
        type: "legacy-showcase",
        tooltip: "💫 Tap the carvings to reveal their stories!",
        fact: "Indian architecture influenced the world! From Southeast Asia's temples to Islamic architecture—India's artistic DNA spread across continents!"
      },
      visual: `
        <svg viewBox="0 0 400 400" class="visual-svg legacy-svg">
          <defs>
            <radialGradient id="glowGrad">
              <stop offset="0%" style="stop-color:#FFD700" stop-opacity="0.8"/>
              <stop offset="100%" style="stop-color:#DAA520" stop-opacity="0.2"/>
            </radialGradient>
          </defs>
          
          <!-- Monument Silhouette (Taj Mahal inspired) -->
          <g class="monument-outline" opacity="0.9">
            <!-- Central Dome -->
            <ellipse cx="200" cy="180" rx="60" ry="55" fill="url(#glowGrad)">
              <animate attributeName="opacity" values="0.7;1;0.7" dur="4s" repeatCount="indefinite"/>
            </ellipse>
            <!-- Base -->
            <rect x="120" y="230" width="160" height="100" fill="#8B4513" opacity="0.7"/>
            <!-- Small Domes -->
            <circle cx="140" cy="240" r="15" fill="#DAA520" opacity="0.6">
              <animate attributeName="opacity" values="0.5;0.8;0.5" dur="3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="260" cy="240" r="15" fill="#DAA520" opacity="0.6">
              <animate attributeName="opacity" values="0.5;0.8;0.5" dur="3.5s" repeatCount="indefinite"/>
            </circle>
            <!-- Minarets -->
            <rect x="100" y="250" width="15" height="80" fill="#A0522D" opacity="0.8"/>
            <rect x="285" y="250" width="15" height="80" fill="#A0522D" opacity="0.8"/>
          </g>
          
          <!-- Artisan Hands (Interactive Carvings) -->
          <g class="carving-spots" opacity="0.8">
            <circle class="carving" cx="150" cy="280" r="12" fill="#FFD700" opacity="0.5">
              <animate attributeName="r" values="12;15;12" dur="2s" repeatCount="indefinite"/>
            </circle>
            <text x="150" y="285" text-anchor="middle" font-size="16">🔨</text>
            
            <circle class="carving" cx="200" cy="290" r="12" fill="#FFD700" opacity="0.5">
              <animate attributeName="r" values="12;15;12" dur="2.5s" repeatCount="indefinite"/>
            </circle>
            <text x="200" y="295" text-anchor="middle" font-size="16">💎</text>
            
            <circle class="carving" cx="250" cy="280" r="12" fill="#FFD700" opacity="0.5">
              <animate attributeName="r" values="12;15;12" dur="3s" repeatCount="indefinite"/>
            </circle>
            <text x="250" y="285" text-anchor="middle" font-size="16">🌺</text>
          </g>
          
          <!-- Hearts Rising (Symbol of Love & Devotion) -->
          <g class="hearts" opacity="0.6">
            <text x="180" y="100" font-size="20" fill="#FF69B4">❤️
              <animateTransform attributeName="transform" type="translate" values="0,0;-10,-30" dur="4s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.8;0;0.8" dur="4s" repeatCount="indefinite"/>
            </text>
            <text x="220" y="120" font-size="20" fill="#FF69B4">❤️
              <animateTransform attributeName="transform" type="translate" values="0,0;10,-35" dur="5s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.7;0;0.7" dur="5s" repeatCount="indefinite"/>
            </text>
          </g>
          
          <!-- Reflection (Symbol of Timelessness) -->
          <ellipse cx="200" cy="360" rx="100" ry="15" fill="#4682B4" opacity="0.3">
            <animate attributeName="opacity" values="0.2;0.4;0.2" dur="3s" repeatCount="indefinite"/>
          </ellipse>
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
    
    // Show welcome bar
    const welcomeBar = document.getElementById('welcomeBar');
    if (welcomeBar) {
      welcomeBar.style.display = 'block';
    }
    
    // Remove hidden attribute to trigger CSS transition
    dom.experienceContainer.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    
    // Wait for transition, then render chapter
    setTimeout(() => {
      console.log('Container should now be visible. Rendering chapter 0...');
      renderChapter(0);
      setupInteractiveFeatures();
    }, 100);
  }

  // Setup Interactive Features (SVG hover effects, clickable elements)
  function setupInteractiveFeatures() {
    // Add event listeners for fresco panels
    setTimeout(() => {
      const frescoPanels = document.querySelectorAll('.fresco-panel');
      frescoPanels.forEach((panel, index) => {
        panel.addEventListener('click', () => {
          const story = panel.getAttribute('data-story');
          showTooltip(`Story: ${story}`, panel);
        });
      });

      // Add event listeners for carvings
      const carvings = document.querySelectorAll('.carving');
      carvings.forEach((carving, index) => {
        carving.addEventListener('click', () => {
          const facts = [
            'Each carving took 3-6 months of dedicated hand work!',
            'Artisans used only hand tools—no machines!',
            'Some carvings tell stories spanning centuries!'
          ];
          showTooltip(facts[index] || 'Click to discover more!', carving);
        });
      });
    }, 500);
  }

  // Show tooltip for interactive elements
  function showTooltip(message, element) {
    // Remove existing tooltips
    document.querySelectorAll('.interactive-tooltip').forEach(t => t.remove());

    const tooltip = document.createElement('div');
    tooltip.className = 'interactive-tooltip visible';
    tooltip.textContent = message;
    
    // Position near the element
    const rect = element.getBoundingClientRect();
    tooltip.style.position = 'fixed';
    tooltip.style.left = `${rect.left + rect.width / 2}px`;
    tooltip.style.top = `${rect.top - 80}px`;
    tooltip.style.transform = 'translateX(-50%)';
    
    document.body.appendChild(tooltip);
    
    // Auto-hide after 4 seconds
    setTimeout(() => {
      tooltip.classList.remove('visible');
      setTimeout(() => tooltip.remove(), 300);
    }, 4000);
  }

  // Exit experience
  function exitExperience() {
    dom.experienceContainer.setAttribute('hidden', '');
    document.body.style.overflow = '';
    currentChapter = 0;
    
    // Hide welcome bar
    const welcomeBar = document.getElementById('welcomeBar');
    if (welcomeBar) {
      welcomeBar.style.display = 'none';
    }
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
          ${chapter.subtitle ? `<p class="chapter-subtitle">${chapter.subtitle}</p>` : ''}
          <p class="chapter-description">${chapter.description}</p>
          ${chapter.story ? `<div class="fun-fact-card"><div class="fact-title">Did You Know?</div><div class="fact-content">${chapter.story}</div></div>` : ''}
          ${chapter.interactive ? `<p class="interactive-hint" style="color: var(--primary-gold); font-size: 0.9rem; margin: 1rem 0;"><strong>${chapter.interactive.tooltip}</strong></p>` : ''}
          <ul class="chapter-highlights">
            ${chapter.highlights.map(h => `<li class="highlight-item">${h}</li>`).join('')}
          </ul>
          ${chapter.interactive && chapter.interactive.fact ? `<div class="fun-fact-card" style="margin-top: 1.5rem;"><div class="fact-title">Amazing Fact!</div><div class="fact-content">${chapter.interactive.fact}</div></div>` : ''}
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
