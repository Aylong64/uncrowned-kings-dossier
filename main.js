const cards = document.querySelectorAll('.card');

const cardColours = [
  '#5A2A83',  // Mibuchi
  '#901bf7',  // Nebuya
  '#5A2A83',  // Hayama
  '#B22222',  // Kiyoshi
  '#16a085',  // Hanamiya
];

function applyCardColour(card, colour) {
  const info = card.querySelector('.card-info');
  info.style.setProperty('--bar-colour', colour);


  card.querySelectorAll('.stat-fill').forEach(fill => {
    fill.style.background = colour;
  });
  card.querySelectorAll('.stat-num').forEach(num => {
    num.style.color = colour;
  });


  const epistle = card.querySelector('.player-epistle');
  if (epistle) epistle.style.color = colour;

  const school = card.querySelector('.player-school');
  if (school) school.style.color = colour;
}


function setupTagHover(card, colour) {
  const r = parseInt(colour.slice(1, 3), 16);
  const g = parseInt(colour.slice(3, 5), 16);
  const b = parseInt(colour.slice(5, 7), 16);

  const bgTint    = `rgba(${r}, ${g}, ${b}, 0.12)`;
  const borderTint = `rgba(${r}, ${g}, ${b}, 0.45)`;

  card.addEventListener('mouseenter', () => {
    card.querySelectorAll('.q-tag.visible').forEach(tag => {
      tag.style.background    = bgTint;
      tag.style.borderColor   = borderTint;
      tag.style.color         = colour;
    });
  });

  card.addEventListener('mouseleave', () => {
    card.querySelectorAll('.q-tag.visible').forEach(tag => {
      tag.style.background    = '';
      tag.style.borderColor   = '';
      tag.style.color         = '';
    });
  });
}

function injectBarColourStyles() {
  const rules = [];
  cards.forEach((card, i) => {
    const colour = cardColours[i] || '#ffffff';
    const info = card.querySelector('.card-info');
  
    info.id = `card-info-${i}`;
    rules.push(`#card-info-${i}::after { background: ${colour}; }`);
  });
  const styleTag = document.createElement('style');
  styleTag.textContent = rules.join('\n');
  document.head.appendChild(styleTag);
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const card = entry.target;
    card.classList.add('in-view');

    card.querySelectorAll('.q-tag').forEach((tag, i) => {
      setTimeout(() => tag.classList.add('visible'), 80 + i * 100);
    });

    observer.unobserve(card);
  });
}, { threshold: 0.15 });



injectBarColourStyles();

cards.forEach((card, i) => {
  const colour = cardColours[i] || '#ffffff';
  applyCardColour(card, colour);
  setupTagHover(card, colour);
  observer.observe(card);
});
