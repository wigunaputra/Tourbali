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

<script>
  (function(){
    const scroller = document.getElementById('testiScroller');
    const prev = document.getElementById('tPrev');
    const next = document.getElementById('tNext');

    if (!scroller || !prev || !next) return;

    const step = () => Math.min(scroller.clientWidth * 0.9, 640);

    prev.addEventListener('click', () => {
      scroller.scrollBy({ left: -step(), behavior: 'smooth' });
    });
    next.addEventListener('click', () => {
      scroller.scrollBy({ left:  step(), behavior: 'smooth' });
    });
  })();
</script>

