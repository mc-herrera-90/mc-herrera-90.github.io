document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a.popup.img-link img.no-preview')
    .forEach(img => {
      const a = img.closest('a.popup.img-link');
      if (!a) return;

      a.replaceWith(img);
    });
})
