// Toggle Dark Mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
const subtitle = document.querySelector('#subtitle');
const texts = [
  "Aspiring Software Developer | C++ & DSA Enthusiast",
  "Problem Solver | Always Learning",
  "Open to Collaboration"
];
let idx = 0, charIdx = 0;

function typeWriter() {
  if (charIdx < texts[idx].length) {
    subtitle.textContent = texts[idx].slice(0, ++charIdx);
    setTimeout(typeWriter, 60);
  } else {
    setTimeout(() => {
      charIdx = 0;
      idx = (idx + 1) % texts.length;
      typeWriter();
    }, 1500);
  }
}
typeWriter();

// Scroll to Top
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const topBtn = document.getElementById('topBtn');
window.onscroll = function() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    topBtn.style.display = "block";
    topBtn.style.opacity = 1;
  } else {
    topBtn.style.opacity = 0;
    setTimeout(() => topBtn.style.display = "none", 400);
  }
};
topBtn.onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

document.querySelector('form').addEventListener('submit', function(e) {
  let valid = true;
  this.querySelectorAll('input, textarea').forEach(field => {
    if (!field.value.trim()) {
      field.style.border = '2px solid red';
      valid = false;
    } else {
      field.style.border = '';
    }
  });

  if (!valid) {
    e.preventDefault();
    alert('Please fill all fields!');
  }
});
