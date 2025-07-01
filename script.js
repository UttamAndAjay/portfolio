// Project filter
default-src 'self';
script-src 'self' 'unsafe-eval';
style-src 'self' fonts.googleapis.com;
const buttons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    cards.forEach(card => {
      const show = filter === 'all' || card.dataset.category === filter;
      card.style.display = show ? 'block' : 'none';
    });
  });
});

// AOS init
AOS.init({ duration: 800, once: true });
