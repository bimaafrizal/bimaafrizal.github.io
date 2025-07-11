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
const faders2 = document.querySelectorAll(".slide-in-right");

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

faders2.forEach((fader) => {
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

const hamburger = document.querySelector('#hamburger-icon');
const mobileMenu = document.querySelector('#mobile-menu');

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.contains('hidden');
  
  // Toggle icon
  hamburger.src = isOpen ? 'asset/icon-close.svg' : 'asset/icon-hamburger.svg';
  
  // Toggle menu
  mobileMenu.classList.toggle('hidden');
  
  // Tambahkan animasi
  if (isOpen) {
    mobileMenu.style.display = 'block';
    setTimeout(() => {
      mobileMenu.style.opacity = '1';
      mobileMenu.style.transform = 'translateY(0)';
    }, 10);
  } else {
    mobileMenu.style.opacity = '0';
    mobileMenu.style.transform = 'translateY(-10px)';
    setTimeout(() => {
      mobileMenu.style.display = 'none';
    }, 300);
  }
});


