
window.addEventListener('scroll', () => {
  const reveals = document.querySelectorAll('.reveal');
  for (let el of reveals) {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  }
});
