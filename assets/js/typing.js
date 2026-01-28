window.addEventListener("load", () => {
  function typeNode(node, speed) {
    return new Promise((resolve) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent;
        node.textContent = "";
        let i = 0;

        const interval = setInterval(() => {
          node.textContent += text[i];
          i++;
          if (i >= text.length) {
            clearInterval(interval);
            resolve();
          }
        }, speed);

      } else {
        resolve();
      }
    });
  }

  function typeTitle(title, speed = 40) {
    title.style.visibility = "visible"; // Mostrar al comenzar

    const nodes = Array.from(title.childNodes);
    title.innerHTML = "";

    nodes.forEach(async (node) => {
      const clone = node.cloneNode(true);
      title.appendChild(clone);
      await typeNode(clone, speed);
    });
  }

  // SOLO H1 dentro de header
  const titles = document.querySelectorAll("header h1");
  titles.forEach(title => typeTitle(title, 20));
  const blocks = document.querySelectorAll(".typing");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        initTyping(entry.target);
      });
    },
    { threshold: 0.2 }
  );

  blocks.forEach(block => observer.observe(block));

  const DEFAULT_CODE_SPEED = 12;
  const SPEED_PRESETS = {
    "typing-fast": 3,
    "typing-slow": 20
  };

  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function getCodeSpeed(block) {
    if (block.dataset.speed) {
      return parseInt(block.dataset.speed, 10);
    }

    for (const cls in SPEED_PRESETS) {
      if (block.classList.contains(cls)) {
        return SPEED_PRESETS[cls];
      }
    }

    return DEFAULT_CODE_SPEED;
  }

  function initTyping(block) {
    const pre = block.querySelector(".rouge-code pre");
    if (!pre || pre.dataset.typingActive) return;

    pre.dataset.typingActive = "true";

    const speed = getCodeSpeed(block);

    const originalNodes = Array.from(pre.childNodes);
    const originalHeight = pre.offsetHeight;

    let nodeIndex = 0;
    let charIndex = 0;
    let isTyping = true;

    pre.style.minHeight = originalHeight + "px";
    pre.innerHTML = "";

    function typeNext() {
      if (nodeIndex >= originalNodes.length) {
        pre.style.minHeight = "";
        isTyping = false;
        return;
      }

      const node = originalNodes[nodeIndex];

      if (node.nodeType === Node.TEXT_NODE) {
        if (charIndex < node.textContent.length) {
          pre.append(document.createTextNode(node.textContent[charIndex]));
          charIndex++;
          delay(speed).then(typeNext);
        } else {
          charIndex = 0;
          nodeIndex++;
          delay(speed).then(typeNext);
        }
        return;
      }

      if (node.nodeType === Node.ELEMENT_NODE) {
        const clone = node.cloneNode(false);
        pre.appendChild(clone);

        const text = node.textContent;
        let i = 0;

        function typeSpan() {
          if (i < text.length) {
            clone.append(text[i]);
            i++;
            delay(speed).then(typeSpan);
          } else {
            nodeIndex++;
            delay(speed).then(typeNext);
          }
        }

        typeSpan();
      }
    }

    typeNext();

    const repeatBtn =
      block.querySelector(".code-header .fa-rotate-right")?.parentElement;

    if (repeatBtn) {
      repeatBtn.addEventListener("click", () => {
        if (isTyping) return;

        isTyping = true;
        pre.innerHTML = "";
        pre.style.minHeight = originalHeight + "px";
        nodeIndex = 0;
        charIndex = 0;
        typeNext();
      });
    }
  }

});
