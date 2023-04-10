const viewBtn = document.querySelector('.bun-see-btn');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('close-btn');

viewBtn.addEventListener('click', () => {
  overlay.style.display = 'flex';
});

closeBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  overlay.style.display = 'none';
});

window.addEventListener('load', () => {
  overlay.style.display = 'none';
});