// Smooth scroll untuk semua anchor link
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

const text = `"Jika ingin berkembang, tantang dirimu sendiri!"`;
const typingElement = document.getElementById("typing-text");
const typingElementMobile = document.getElementById("typing-text-mobile");
let index = 0;

function type(element) {
  let index = 0;
  element.textContent = ""; // Clear text sebelum memulai
  function typeCharacter() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(typeCharacter, 50);
    }
  }
  typeCharacter();
}

window.addEventListener("DOMContentLoaded", () => {
  const typingElement = document.getElementById("typing-text");
  const typingElementMobile = document.getElementById("typing-text-mobile");
  
  if (typingElement) type(typingElement);
  if (typingElementMobile) type(typingElementMobile);
});

window.addEventListener("DOMContentLoaded", type);
window.addEventListener("DOMContentLoaded", typeMobile);

const hamburger = document.querySelector('#hamburger-icon');
const mobileMenu = document.querySelector('#mobile-menu');

hamburger.addEventListener('click', () => {
    let src = (hamburger.getAttribute('src') === 'asset/icon-hamburger.svg') ? 'asset/icon-close.svg' : 'asset/icon-hamburger.svg';
    hamburger.setAttribute('src', src);

    // Toggle the visibility of the mobile menu
    if (mobileMenu.style.display === 'none' || mobileMenu.style.display === '') {
        mobileMenu.style.display = 'block';
    } else {
        mobileMenu.style.display = 'none';
    }
});
