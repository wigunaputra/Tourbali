document.addEventListener('DOMContentLoaded', () => {
  const toTopBtn = document.getElementById('toTop');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Tampil setelah scroll > 400px
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {          // <-- Y besar
      toTopBtn.classList.add('show');
    } else {
      toTopBtn.classList.remove('show');
    }
  });

  // Klik untuk naik ke atas
  toTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReduced ? 'auto' : 'smooth'
    });
  });
});

