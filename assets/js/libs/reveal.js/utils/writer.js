function animateBlock(block) {

    return new Promise(resolve => {

        block.style.visibility = "visible";

        const walker = document.createTreeWalker(
            block,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode(node) {
                    if (!node.nodeValue.trim()) {
                        return NodeFilter.FILTER_REJECT;
                    }
                    return NodeFilter.FILTER_ACCEPT;
                }
            }
        );

        const textNodes = [];

        while (walker.nextNode()) {
            textNodes.push(walker.currentNode);
        }

        const chars = [];

        textNodes.forEach(node => {

            const frag = document.createDocumentFragment();

            for (const ch of node.nodeValue) {

                const span = document.createElement("span");

                span.textContent = ch;
                span.style.visibility = "hidden";

                frag.appendChild(span);

                chars.push(span);
            }

            node.parentNode.replaceChild(frag, node);
        });

        let i = 0;

        function type() {

            if (i >= chars.length) {
                resolve();
                return;
            }

            chars[i].style.visibility = "visible";

            i++;

            setTimeout(type, 35);
        }

        type();

    });

}

async function animateBlockquotes(slide) {

    if (slide.dataset.animated) return;
    slide.dataset.animated = "true";

    const blocks = [...slide.querySelectorAll("blockquote")];

    blocks.forEach(block => {
        block.style.visibility = "hidden";
    });

    for (const block of blocks) {

        await animateBlock(block);

        await new Promise(r => setTimeout(r, 250));

    }

}

Reveal.on("ready", e => {
    animateBlockquotes(e.currentSlide);
});

Reveal.on("slidechanged", e => {
    animateBlockquotes(e.currentSlide);
});
