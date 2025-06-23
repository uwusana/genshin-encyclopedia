// script.js
const params = new URLSearchParams(window.location.search);
const selectedElement = params.get("element");

const characters = {
  Anemo:[
  {
    "name": "Xiao",
    "rarity": 5,
    "image": "assets/xiao.png",
    "backgroundImage": "assets/xiao-bg.png", // Added background image
    "description": "Vigilant Yaksha, protector of Liyue's people from demons.",
    "artifacts": [
      {
        "name": "Vermillion Hereafter",
        "image": "assets/vermilion.png",
        "bonus": "Increases ATK and provides bonus after using Elemental Burst."
      },
      {
        "name": "Viridescent Venerer",
        "image": "assets/viridescent.png",
        "bonus": "Boosts Anemo DMG and reduces enemy RES."
      }
    ],
    "weapons": [
      {
        "name": "Primordial Jade Winged-Spear",
        "image": "assets/jade_spear.png",
        "description": "Increases DMG dealt and ATK with each hit."
      },
      {
        "name": "Deathmatch",
        "image": "assets/deathmatch.png",
        "description": "Boosts CRIT Rate and ATK based on enemies nearby."
      }
    ]
  },
  {
    "name": "Jean",
    "rarity": 5,
    "image": "assets/jean.png",
    "backgroundImage": "assets/jean-bg.png", // Added background image
    "description": "Acting Grand Master of the Knights of Favonius.",
    "artifacts": [
      {
        "name": "Viridescent Venerer",
        "image": "assets/viridescent.png",
        "bonus": "Boosts Anemo DMG and reduces enemy RES."
      },
      {
        "name": "Noblesse Oblige",
        "image": "assets/noblesse.png",
        "bonus": "+20% Elemental Burst DMG."
      }
    ],
    "weapons": [
      {
        "name": "Aquila Favonia",
        "image": "assets/aquila.png",
        "description": "High base ATK, heals on hit."
      },
      {
        "name": "Favonius Sword",
        "image": "assets/favonius_sword.png",
        "description": "Generates energy particles on CRIT."
      }
    ]
  },
  {
    "name": "Sayu",
    "rarity": 4,
    "image": "assets/sayu.png",
    "backgroundImage": "assets/sayu-bg.png", // Added background image
    "description": "A ninja of the Shuumatsuban who loves sleeping.",
    "artifacts": [
      {
        "name": "Viridescent Venerer",
        "image": "assets/viridescent.png",
        "bonus": "Boosts Swirl DMG and reduces RES."
      },
      {
        "name": "Maiden Beloved",
        "image": "assets/maiden.png",
        "bonus": "+15% Healing Bonus."
      }
    ],
    "weapons": [
      {
        "name": "Wolf's Gravestone",
        "image": "assets/wolfs_gravestone.png",
        "description": "Boosts ATK for the entire team."
      },
      {
        "name": "Katsuragikiri Nagamasa",
        "image": "assets/katsu.png",
        "description": "Boosts Elemental Skill DMG and energy recharge."
      }
    ]
  }
]
,
  Hydro: [
  {
    "name": "Yelan",
    "rarity": 5,
    "image": "assets/yelan.png",
    "backgroundImage": "assets/yelan-bg.png",
    "description": "A mysterious intelligence officer who handles risks and secrets in Liyue.",
    "artifacts": [
      {
        "name": "Emblem of Severed Fate",
        "image": "assets/emblem.png",
        "bonus": "+20% Energy Recharge, +25% Elemental Burst DMG based on ER"
      },
      {
        "name": "Noblesse Oblige",
        "image": "assets/noblesse.png",
        "bonus": "+20% Elemental Burst DMG, +20% ATK for the team after Burst"
      }
    ],
    "weapons": [
      {
        "name": "Aqua Simulacra",
        "image": "assets/aqua_simulacra.png",
        "description": "Increases HP and DMG when enemies are nearby"
      },
      {
        "name": "Favonius Warbow",
        "image": "assets/favonius_warbow.png",
        "description": "Generates particles on CRIT, great for recharge"
      }
    ]
  },
  {
    "name": "Xingqiu",
    "rarity": 4,
    "image": "assets/xingqiu.png",
    "backgroundImage": "assets/xingqiu-bg.png",
    "description": "A young master of the Feiyun Commerce Guild, elegant and dutiful.",
    "artifacts": [
      {
        "name": "Emblem of Severed Fate",
        "image": "assets/emblem.png",
        "bonus": "+20% Energy Recharge, +25% Elemental Burst DMG based on ER"
      },
      {
        "name": "Noblesse Oblige",
        "image": "assets/noblesse.png",
        "bonus": "+20% Elemental Burst DMG, team buffing"
      }
    ],
    "weapons": [
      {
        "name": "Sacrificial Sword",
        "image": "assets/sacrificial_sword.png",
        "description": "Chance to reset Elemental Skill cooldown"
      },
      {
        "name": "Favonius Sword",
        "image": "assets/favonius_sword.png",
        "description": "Generates particles on CRIT hits"
      }
    ]
  },
  {
    "name": "Furina",
    "rarity": 5,
    "image": "assets/furina.png",
    "backgroundImage": "assets/furina-bg.png",
    "description": "The Hydro Archon of Fontaine — charismatic, dramatic, and mysterious.",
    "artifacts": [
      {
        "name": "Golden Troupe",
        "image": "assets/golden_troupe.png",
        "bonus": "+20% Skill DMG, +25% when off-field"
      },
      {
        "name": "Marechaussee Hunter",
        "image": "assets/marechaussee.png",
        "bonus": "+36% CRIT Rate when HP changes"
      }
    ],
    "weapons": [
      {
        "name": "Splendor of Tranquil Waters",
        "image": "assets/splendor.png",
        "description": "Boosts CRIT Rate and max HP"
      },
      {
        "name": "Fleuve Cendre Ferryman",
        "image": "assets/fleuve.png",
        "description": "Energy recharge weapon, great for support Furina"
      }
    ]
  }
],
  Geo: [
    {
    "name": "Zhongli",
    "rarity": 5,
    "image": "assets/zhongli.png",
    "backgroundImage": "assets/zhongli-bg.png",
    "description": "Wangsheng Funeral Parlor's mysterious consultant and the Geo Archon.",
    "artifacts": [
      {
        "name": "Tenacity of the Millelith",
        "image": "assets/millelith.png",
        "bonus": "Boosts HP and increases team shield strength and ATK when skill hits."
      },
      {
        "name": "Archaic Petra",
        "image": "assets/petra.png",
        "bonus": "Boosts Geo DMG and provides elemental bonus when picking up crystals."
      }
    ],
    "weapons": [
      {
        "name": "Staff of Homa",
        "image": "assets/homa.png",
        "description": "Boosts HP and converts HP into ATK."
      },
      {
        "name": "Black Tassel",
        "image": "assets/black_tassel.png",
        "description": "Increases HP significantly, budget shield build."
      }
    ]
  },
  {
    "name": "Navia",
    "rarity": 5,
    "image": "assets/navia.png",
    "backgroundImage": "assets/navia-bg.png",
    "description": "President of the Spina di Rosula and a Geo claymore wielder from Fontaine.",
    "artifacts": [
      {
        "name": "Nighttime Whispers in the Echoing Woods",
        "image": "assets/nighttime_whispers.png",
        "bonus": "Boosts Geo DMG and normal/charged attack damage."
      },
      {
        "name": "Retracing Bolide",
        "image": "assets/bolide.png",
        "bonus": "Boosts shield strength and attack while shielded."
      }
    ],
    "weapons": [
      {
        "name": "Verdict",
        "image": "assets/verdict.png",
        "description": "Navia’s signature claymore that boosts Geo scaling and CRIT."
      },
      {
        "name": "Serpent Spine",
        "image": "assets/serpent_spine.png",
        "description": "Boosts CRIT Rate and DMG with risk-reward stacking."
      }
    ]
  },{
    "name": "Ningguang",
    "rarity": 4,
    "image": "assets/ningguang.png",
    "backgroundImage": "assets/ningguang-bg.png",
    "description": "The Tianquan of the Liyue Qixing who governs Liyue with elegance.",
    "artifacts": [
      {
        "name": "Archaic Petra",
        "image": "assets/petra.png",
        "bonus": "Boosts Geo DMG and provides elemental bonus when picking up crystals."
      },
      {
        "name": "Gladiator's Finale",
        "image": "assets/gladiator.png",
        "bonus": "+18% ATK, good hybrid option."
      }
    ],
    "weapons": [
      {
        "name": "Solar Pearl",
        "image": "assets/solar_pearl.png",
        "description": "Boosts normal and Elemental Skill/Burst damage."
      },
      {
        "name": "Memory of Dust",
        "image": "assets/memory_of_dust.png",
        "description": "Increases shield strength and ATK when shielded."
      }
    ]
  }
],
  Electro: [
    {
      name: "Raiden Shogun",
      rarity: 5,
      image: "assets/raiden.png",
      backgroundImage: "assets/raiden-bg.png",
      description: "Electro Archon of Inazuma.",
      weapons: "Engulfing Lightning",
      artifacts: "Emblem of Severed Fate"
    }
  ],
  Dendro: [
    {
    "name": "Nahida",
    "rarity": 5,
    "image": "assets/nahida.png",
    "backgroundImage": "assets/nahida-bg.png",
    "description": "The Dendro Archon, also known as the Lesser Lord Kusanali, who brings wisdom and dreams.",
    "artifacts": [
      {
        "name": "Deepwood Memories",
        "image": "assets/deepwood.png",
        "bonus": "Boosts Dendro DMG and reduces enemy Dendro RES."
      },
      {
        "name": "Gilded Dreams",
        "image": "assets/gilded_dreams.png",
        "bonus": "Boosts EM and ATK depending on team composition."
      }
    ],
    "weapons": [
      {
        "name": "A Thousand Floating Dreams",
        "image": "assets/1000dreams.png",
        "description": "Boosts EM and provides party buffs."
      },
      {
        "name": "The Widsith",
        "image": "assets/widsith.png",
        "description": "Random buff (ATK/EM/Elemental DMG) every time character enters field."
      }
    ]
  },
  {
    "name": "Kaveh",
    "rarity": 4,
    "image": "assets/kaveh.png",
    "backgroundImage": "assets/kaveh-bg.png",
    "description": "An architect with a flair for beauty, Kaveh brings elegance and Dendro damage.",
    "artifacts": [
      {
        "name": "Deepwood Memories",
        "image": "assets/deepwood.png",
        "bonus": "Boosts Dendro DMG and reduces enemy Dendro RES."
      },
      {
        "name": "Flower of Paradise Lost",
        "image": "assets/paradise_flower.png",
        "bonus": "Increases Bloom reaction DMG."
      }
    ],
    "weapons": [
      {
        "name": "Mailed Flower",
        "image": "assets/mailed_flower.png",
        "description": "Boosts EM and ATK."
      },
      {
        "name": "Forest Regalia",
        "image": "assets/forest_regalia.png",
        "description": "Provides EM and buffs team with Leaf of Consciousness."
      }
    ]
  },
  {
    "name": "Kinich",
    "rarity": 4,
    "image": "assets/kinich.png",
    "backgroundImage": "assets/kinich-bg.png",
    "description": "A mysterious Pyro support character rumored to harness solar blessings.",
    "artifacts": [
      {
        "name": "Crimson Witch of Flames",
        "image": "assets/crimson.png",
        "bonus": "Boosts Pyro DMG and reaction DMG (Burning, Overloaded, etc)."
      },
      {
        "name": "Instructor",
        "image": "assets/instructor.png",
        "bonus": "Boosts EM for team support."
      }
    ],
    "weapons": [
      {
        "name": "Favonius Codex",
        "image": "assets/favonius_codex.png",
        "description": "Generates energy particles on CRIT."
      },
      {
        "name": "Hakushin Ring",
        "image": "assets/hakushin_ring.png",
        "description": "Boosts Pyro/Electro synergy and energy recharge."
      }
    ]
  }
],

  
  Pyro: [
    {
      name: "Hu Tao",
      rarity: 5,
      image: "assets/hutao.png",
      backgroundImage: "assets/hutao-bg.png",
      description: "77th Director of Wangsheng Funeral Parlor.",
      weapons: "Staff of Homa",
      artifacts: "Crimson Witch of Flames"
    }
  ],
  Cryo: [
    {
      name: "Ayaka",
      rarity: 5,
      image: "assets/ayaka.png",
      backgroundImage: "assets/ayaka-bg.png",
      description: "Kamisato Clan's eldest daughter.",
      weapons: "Mistsplitter Reforged",
      artifacts: "Blizzard Strayer"
    }
  ]
};

let currentElement = null; // Removed localStorage usage

function loadCharacters() {
  const list = document.getElementById("character-list");
  const title = document.getElementById("element-title");

  if (!selectedElement || !characters[selectedElement]) return;

  title.textContent = `${selectedElement} Characters`;

  characters[selectedElement].forEach((char, index) => {
    const card = document.createElement("div");
    card.className = `character-card ${selectedElement.toLowerCase()}`;

    card.innerHTML = `
      <div class="card-text">
        <h3>${char.name}</h3>
        <p>${char.description}</p>
        <p>⭐️ Rarity: ${char.rarity}</p>
      </div>
      <div class="card-image">
        <img src="${char.image}" alt="${char.name}" />
      </div>
    `;

    card.addEventListener("click", () => expandCard(char, index));
    list.appendChild(card);
  });
}

function setBackground(element) {
  const body = document.getElementById("element-body") || document.body;

  // Remove previous element-specific background classes
  const elementClasses = [
    'anemo-bg', 'geo-bg', 'electro-bg',
    'dendro-bg', 'hydro-bg', 'pyro-bg', 'cryo-bg'
  ];
  body.classList.remove(...elementClasses);

  // Add the new element background class
  body.classList.add(`${element.toLowerCase()}-bg`);

  // Save current element
  currentElement = element;
}

function expandCard(character, index) {
  // Remove any existing expanded cards first
  const existingExpanded = document.querySelector(".expanded");
  if (existingExpanded) existingExpanded.remove();

  const container = document.createElement("div");
  container.className = "expanded";
  
  // Build weapons and artifacts display
  let weaponsHtml = '';
  let artifactsHtml = '';
  
  if (character.weapons) {
    if (Array.isArray(character.weapons)) {
      weaponsHtml = character.weapons.map(weapon => `
        <div class="item-detail">
          <img src="${weapon.image}" alt="${weapon.name}" class="item-icon">
          <div>
            <h5>${weapon.name}</h5>
            <p>${weapon.description}</p>
          </div>
        </div>
      `).join('');
    } else {
      weaponsHtml = `<p>${character.weapons}</p>`;
    }
  }
  
  if (character.artifacts) {
    if (Array.isArray(character.artifacts)) {
      artifactsHtml = character.artifacts.map(artifact => `
        <div class="item-detail">
          <img src="${artifact.image}" alt="${artifact.name}" class="item-icon">
          <div>
            <h5>${artifact.name}</h5>
            <p>${artifact.bonus}</p>
          </div>
        </div>
      `).join('');
    } else {
      artifactsHtml = `<p>${character.artifacts}</p>`;
    }
  }
  
  container.innerHTML = `
    <div class="expanded-content" style="${character.backgroundImage ? `background-image: url('${character.backgroundImage}')` : ''}">
      <img src="${character.image}" alt="${character.name}" class="character-portrait" />
      <h2>${character.name} - ⭐️${character.rarity}</h2>
      <p>${character.description}</p>
      
      <div class="details-section">
        <h4>Recommended Weapons:</h4>
        <div class="items-container">
          ${weaponsHtml}
        </div>
        
        <h4>Recommended Artifacts:</h4>
        <div class="items-container">
          ${artifactsHtml}
        </div>
      </div>
      
      <button onclick="closeExpanded()">Close</button>
    </div>
  `;
  
  // Prevent body scroll when expanded card is open
  document.body.style.overflow = 'hidden';
  
  document.body.appendChild(container);
  
  // Scroll to top to ensure the expanded card is fully visible
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeExpanded() {
  const expanded = document.querySelector(".expanded");
  if (expanded) {
    expanded.remove();
    // Restore body scroll
    document.body.style.overflow = 'auto';
  }
}

function handleElementNavigation(event, element) {
  event.preventDefault();
  if (currentElement && currentElement !== element) {
    window.location.href = `element.html?element=${element}`;
  } else {
    window.location.href = `element.html?element=${element}`;
  }
}

function addSidebarHandlers() {
  const sidebarLinks = document.querySelectorAll('.sidebar a');
  sidebarLinks.forEach(link => {
    const href = link.getAttribute('href');
    const element = new URL(href, window.location.origin).searchParams.get('element');
    if (element) {
      link.addEventListener('click', (e) => handleElementNavigation(e, element));
    }
  });
}

window.onload = function () {
  if (window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname === '') {
    document.body.classList.add('index-bg');
    currentElement = null;
  }
  if (document.getElementById("character-list")) {
    loadCharacters();
    setBackground(selectedElement);
  }
  addSidebarHandlers();
};