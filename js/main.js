const submitBtn = document.querySelector('#submit input[type="submit"]');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('close-btn');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault(); // prevent the form from submitting
  overlay.style.display = 'flex';
});

closeBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  overlay.style.display = 'none';
});

window.addEventListener('load', () => {
  overlay.style.display = 'none';
});