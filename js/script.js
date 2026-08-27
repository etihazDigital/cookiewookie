/* Cookie Wookie — shared site behaviour */
document.addEventListener('DOMContentLoaded', function () {

  /* ---- Sticky header shrink ---- */
  var header = document.querySelector('.site-header');
  var backTop = document.querySelector('.back-top');
  window.addEventListener('scroll', function () {
    var y = window.scrollY || window.pageYOffset;
    if (header) header.classList.toggle('scrolled', y > 30);
    if (backTop) backTop.classList.toggle('is-visible', y > 500);
  });

  /* ---- Mobile nav toggle ---- */
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      toggle.classList.toggle('is-open');
      links.classList.toggle('is-open');
      document.body.style.overflow = links.classList.contains('is-open') ? 'hidden' : '';
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        toggle.classList.remove('is-open');
        links.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---- Back to top ---- */
  if (backTop) {
    backTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---- DEMO BANNER close (remove this whole block when banner is deleted) ---- */
  var demoBanner = document.querySelector('.demo-banner');
  var demoClose = document.querySelector('.demo-banner__close');
  if (demoClose && demoBanner) {
    demoClose.addEventListener('click', function () {
      demoBanner.classList.add('is-hidden');
    });
  }

  /* ---- Reveal on scroll ---- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in-view'); });
  }

  /* ---- Menu filter tabs (menu.html) ---- */
  var filterBtns = document.querySelectorAll('.filter-btn');
  var filterItems = document.querySelectorAll('[data-category]');
  if (filterBtns.length && filterItems.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var target = btn.getAttribute('data-filter');
        filterItems.forEach(function (item) {
          var match = target === 'all' || item.getAttribute('data-category') === target;
          item.style.display = match ? '' : 'none';
        });
      });
    });
  }

  /* ---- Testimonial slider ---- */
  var slides = document.querySelectorAll('.testimonial');
  var dots = document.querySelectorAll('.t-dots button');
  if (slides.length > 1) {
    var current = 0;
    var showSlide = function (i) {
      slides.forEach(function (s, idx) { s.style.display = idx === i ? 'block' : 'none'; });
      dots.forEach(function (d, idx) { d.classList.toggle('active', idx === i); });
      current = i;
    };
    dots.forEach(function (dot, idx) {
      dot.addEventListener('click', function () { showSlide(idx); });
    });
    showSlide(0);
    setInterval(function () { showSlide((current + 1) % slides.length); }, 5500);
  }

  /* ---- Gallery lightbox ---- */
  var galleryFigures = document.querySelectorAll('.gallery-grid figure');
  var lightbox = document.querySelector('.lightbox');
  if (galleryFigures.length && lightbox) {
    var lbImg = lightbox.querySelector('img');
    var lbClose = lightbox.querySelector('.lightbox-close');
    var lbPrev = lightbox.querySelector('.lightbox-prev');
    var lbNext = lightbox.querySelector('.lightbox-next');
    var images = Array.prototype.map.call(galleryFigures, function (f) {
      return f.querySelector('img').getAttribute('src');
    });
    var idx = 0;
    var open = function (i) {
      idx = i;
      lbImg.setAttribute('src', images[idx]);
      lightbox.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    };
    var close = function () {
      lightbox.classList.remove('is-open');
      document.body.style.overflow = '';
    };
    galleryFigures.forEach(function (fig, i) {
      fig.addEventListener('click', function () { open(i); });
    });
    if (lbClose) lbClose.addEventListener('click', close);
    lightbox.addEventListener('click', function (e) { if (e.target === lightbox) close(); });
    if (lbPrev) lbPrev.addEventListener('click', function () { open((idx - 1 + images.length) % images.length); });
    if (lbNext) lbNext.addEventListener('click', function () { open((idx + 1) % images.length); });
    document.addEventListener('keydown', function (e) {
      if (!lightbox.classList.contains('is-open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') open((idx - 1 + images.length) % images.length);
      if (e.key === 'ArrowRight') open((idx + 1) % images.length);
    });
  }

  /* ---- FAQ accordion ---- */
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    var q = item.querySelector('.faq-q');
    var a = item.querySelector('.faq-a');
    q.addEventListener('click', function () {
      var isOpen = item.classList.contains('is-open');
      faqItems.forEach(function (i) {
        i.classList.remove('is-open');
        i.querySelector('.faq-a').style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add('is-open');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });

  /* ---- Contact form (demo — shows a success note, no backend) ---- */
  var form = document.querySelector('.enquiry-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var success = document.querySelector('.form-success');
      if (success) success.classList.add('is-visible');
      form.reset();
      if (success) success.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  /* ---- Active nav link by current page ---- */
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a[href]').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
});
