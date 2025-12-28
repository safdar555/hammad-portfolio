// HAMBURGER MENU
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.onclick = () => {
  menu.classList.toggle("show");
};

// DARK / LIGHT MODE (WORKING)
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggle.textContent =
    document.body.classList.contains("light") ? "☀️" : "🌙";
});

// SEARCH
document.getElementById("search").addEventListener("keyup", function () {
  let v = this.value.toLowerCase();
  document.querySelectorAll("tbody tr").forEach(r => {
    r.style.display = r.innerText.toLowerCase().includes(v) ? "" : "none";
  });
});

// CV ZOOM
let scale = 1;
const cv = document.getElementById("cvViewer");

function zoomIn() {
  scale += 0.1;
  cv.style.transform = `scale(${scale})`;
}
function zoomOut() {
  scale = Math.max(0.6, scale - 0.1);
  cv.style.transform = `scale(${scale})`;
}
function resetZoom() {
  scale = 1;
  cv.style.transform = "scale(1)";
}

// GALLERY SLIDER (SIZE FIXED)
const images = [
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  "https://images.unsplash.com/photo-1535223289827-42f1e9919769"
];
let index = 0;
const slider = document.getElementById("slider");
slider.src = images[0];

setInterval(() => {
  index = (index + 1) % images.length;
  slider.src = images[index];
}, 3000);

// SCROLL REVEAL
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// HERO TYPING ANIMATION SMOOTH
const nameText = "Hammad Irfan";
const roleText = "Software Engineering Student | Front-End Developer";
let i = 0, j = 0;

function typeName() {
  if (i < nameText.length) {
    document.querySelector(".typing-name").textContent += nameText.charAt(i);
    i++;
    setTimeout(typeName, 120); // slow typing for smooth effect
  } else {
    setTimeout(typeRole, 500); // pause before role
  }
}

function typeRole() {
  if (j < roleText.length) {
    document.querySelector(".typing-role").textContent += roleText.charAt(j);
    j++;
    setTimeout(typeRole, 80); // role typing a bit faster
  }
}

typeName();
// CONTACT FORM VALIDATION
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    formMessage.style.color = "red";
    formMessage.textContent = "Please fill in all fields!";
  } else {
    formMessage.style.color = "lime";
    formMessage.textContent = "Message sent successfully!";
    contactForm.reset();
  }
});


