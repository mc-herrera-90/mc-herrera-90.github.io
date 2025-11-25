function copyCode(e) {
	const code = e.nextElementSibling.textContent;
	window.navigator.clipboard.writeText(code.trim());
	alert("Copiado!");
}