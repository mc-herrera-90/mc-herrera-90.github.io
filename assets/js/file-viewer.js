// document.addEventListener("DOMContentLoaded", () => {

//     const panels = document.querySelectorAll('[data-name]');
//     panels.forEach((panel, i)=> {
//         console.log(i);
//         const name = panel.dataset.name;
//         const viewer = document.getElementById(`panel-code-${name}`);
//         console.log("Iniciando el viewer para: ", name, viewer);
//     });
// });
document.addEventListener('click', async (e) => {
  const copyBtn = e.target.closest('button[id^="copy-btn-"]');
  if (!copyBtn) return;

  const viewer = copyBtn.closest('.file-viewer');
  if (!viewer) return;

  const visibleBlock = Array.from(
    viewer.querySelectorAll('.file-content')
  ).find((el) => el.style.display !== 'none');

  if (!visibleBlock) return;

  const codeEl = visibleBlock.querySelector('code');
  if (!codeEl) return;

  try {
    await navigator.clipboard.writeText(codeEl.innerText);

    const originalHTML = copyBtn.innerHTML;
    const originalColor = copyBtn.style.color;

    copyBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    copyBtn.style.color = 'var(--toc-highlight)';

    setTimeout(() => {
      copyBtn.innerHTML = originalHTML;
      copyBtn.style.color = originalColor || 'var(--text-muted)';
    }, 1200);
  } catch (err) {
    console.error('Error al copiar el contenido:', err);
  }
});
