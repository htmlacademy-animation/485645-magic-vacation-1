// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import FullPageScroll from './modules/full-page-scroll';

// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();

window.addEventListener(`load`, ()=> {
  document.body.classList.add(`active`);
  const hash = document.location.href.split(`#`);
  if (hash.length >= 2) {
    document.body.setAttribute(`data-section`, hash[1]);
  }
});

const animateText = (domNode, settings) => {
  if (!domNode) {
    return;
  }

  if ([...domNode.childNodes].filter((e) => e.nodeType !== Node.TEXT_NODE).length > 0) {
    throw new Error(`element must contain only text nodes`);
  }

  const text = domNode.innerHTML;
  domNode.innerHTML = ``;
  domNode.classList.add(`accent-text`);

  let idx = 0;
  const rows = text.split(/\s+/);
  for (const row of rows) {
    const rowSpan = document.createElement(`span`);
    rowSpan.classList.add(`accent-text__row`);
    if (settings.lineHeight) {
      rowSpan.style.lineHeight = settings.lineHeight;
    }

    for (const char of row) {
      const charSpan = document.createElement(`span`);
      charSpan.innerHTML = char;
      charSpan.classList.add(`accent-text__char`);

      charSpan.style.animationTimingFunction = settings.timingFunction || `ease-out`;
      charSpan.style.animationDelay = `${settings.chars[idx++]}ms`;
      charSpan.style.animationDuration = settings.duration || `0.5s`;
      charSpan.style.animationName = settings.name;
      charSpan.style.animationFillMode = settings.fillMode || `both`;
      rowSpan.appendChild(charSpan);
    }

    domNode.appendChild(rowSpan);
    domNode.innerHTML += ` `;
  }
};

// ТАИНСТВЕННЫЙ ОТПУСК
animateText(document.querySelector(`.screen--intro .intro__title`), {
  name: `slideInUp150`,
  chars: [40, 15, 0, 15, 25, 15, 0, 60, 25, 0, 25, 5, 110, 140, 95, 70, 110, 80].map((e) => e * 2),
  lineHeight: 0.75
});

// 01 — 31.05 / 2020
animateText(document.querySelector(`.screen--intro .intro__date`), {
  name: `slideInUp150`,
  chars: [60, 40, 40, 80, 20, 100, 40, 100, 40, 0, 80, 60, 20].map((e) => e + 800)
});

// ИСТОРИЯ
animateText(document.querySelector(`.screen--story .slider__item-title`), {
  name: `slideInUp150`,
  chars: [80, 40, 0, 40, 60, 40, 0].map((e) => e + 800)
});

// ПРИЗЫ
animateText(document.querySelector(`.screen--prizes .prizes__title`), {
  name: `slideInUp150`,
  chars: [80, 40, 0, 40, 80]
});

// ПРАВИЛА
animateText(document.querySelector(`.screen--rules .rules__title`), {
  name: `slideInUp150`,
  chars: [120, 50, 30, 20, 80, 40, 10]
});

// ИГРА
animateText(document.querySelector(`.screen--game .game__title`), {
  name: `slideInUp150`,
  chars: [90, 40, 0, 30]
});

