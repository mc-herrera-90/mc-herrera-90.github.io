
document.addEventListener("DOMContentLoaded", () => {

    const panels = document.querySelectorAll('[data-name]');
    panels.forEach((panel, i)=> {
        console.log(i);
        const name = panel.dataset.name;
        const viewer = document.getElementById(`panel-code-${name}`);
        console.log("Iniciando el viewer para: ", name, viewer);
    });
});
