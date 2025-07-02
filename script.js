// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.card');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      cards.forEach(card => {
        const category = card.dataset.category;
        const show = filter === 'all' || category === filter;
        card.style.display = show ? 'block' : 'none';
      });
    });
  });

  // Initialize AOS animations
  AOS.init({
    duration: 800,
    once: true
  });
});
