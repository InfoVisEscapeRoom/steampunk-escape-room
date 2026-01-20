document.addEventListener('DOMContentLoaded', function () {
  var lightbox = document.querySelector('[data-lightbox]');
  if (!lightbox) return;

  var lightboxImage = lightbox.querySelector('[data-lightbox-image]');
  var lightboxCaption = lightbox.querySelector('[data-lightbox-caption]');

  function openLightbox(src, alt) {
    if (!src) return;
    lightboxImage.src = src;
    lightboxImage.alt = alt || '';
    if (lightboxCaption) {
      lightboxCaption.textContent = alt || '';
      lightboxCaption.style.display = alt ? 'block' : 'none';
    }
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
    lightboxImage.src = '';
    lightboxImage.alt = '';
  }

  // Close on click for elements marked as close triggers
  lightbox.addEventListener('click', function (event) {
    if (
      event.target === lightbox ||
      event.target.hasAttribute('data-lightbox-close')
    ) {
      closeLightbox();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && lightbox.classList.contains('is-open')) {
      closeLightbox();
    }
  });

  // Attach to all images on the page (inside main + hero + footer)
  var clickableImages = document.querySelectorAll(
    'main img, .hero img, .page-footer img'
  );

  clickableImages.forEach(function (img) {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', function () {
      openLightbox(img.src, img.alt);
    });
  });
});

