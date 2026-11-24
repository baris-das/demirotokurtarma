// Telefonda ☰ düğmesine basınca menüyü aç/kapat
const menuDugme = document.querySelector('.menu-dugme');
const menu = document.querySelector('.menu');
menuDugme.addEventListener('click', () => menu.classList.toggle('acik'));

// Menüden bir bağlantıya tıklanınca menüyü kapat
menu.querySelectorAll('a').forEach(link =>
  link.addEventListener('click', () => menu.classList.remove('acik'))
);

// Sayfa kaydırıldıkça kartları yumuşakça göster
const gozlemci = new IntersectionObserver((girdiler) => {
  girdiler.forEach(girdi => {
    if (girdi.isIntersecting) {
      girdi.target.classList.add('gorundu');
      gozlemci.unobserve(girdi.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.gorun').forEach(el => gozlemci.observe(el));

// Alt bilgideki yılı otomatik yaz
document.getElementById('yil').textContent = new Date().getFullYear();
