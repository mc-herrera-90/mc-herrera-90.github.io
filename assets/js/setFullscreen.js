document.addEventListener("DOMContentLoaded", () => {
	const fullscreenButtons = document.querySelectorAll('.code-header .fullscreen-btn');

	fullscreenButtons.forEach((btn) => {
		btn.addEventListener('click', () => {
			const codeHeader = btn.closest('.code-header');
			if (!codeHeader) return;

			const container = codeHeader.parentNode; // .language-html
			if (!container) return;

			const icon = btn.querySelector('i');

			if (!document.fullscreenElement) {
				container.requestFullscreen?.();
				if (icon) icon.className = 'fas fa-compress'; // cambiar icono a compress
			} else {
				document.exitFullscreen?.();
				if (icon) icon.className = 'fas fa-expand'; // volver a expand
			}
		});
	});

	// Escucha cambios de fullscreen para actualizar todos los botones
	document.addEventListener('fullscreenchange', () => {
		fullscreenButtons.forEach((btn) => {
			const container = btn.closest('.language-html');
			const icon = btn.querySelector('i');
			if (!container || !icon) return;

			if (document.fullscreenElement === container) {
				icon.className = 'fas fa-compress';
			} else {
				icon.className = 'fas fa-expand';
			}
		});
	});
});
