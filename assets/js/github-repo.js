document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.github-repo').forEach(async (el) => {
    const owner = el.dataset.owner;
    let repo = el.dataset.repo;
    let branch = null;

    // Si data-repo contiene /tree/<branch>, extraemos la rama.
    if (repo.includes('/tree/')) {
      const parts = repo.split('/tree/');
      repo = parts[0];
      branch = parts.slice(1).join('/'); // Permite ramas con "/"
    }

    try {
      // Obtener información del repositorio
      const response = await fetch(
        `https://api.github.com/repos/${owner}/${repo}`
      );

      if (!response.ok) {
        throw new Error('No se pudo cargar el repositorio');
      }

      const repoData = await response.json();

      // Si no se especificó una rama, usamos la rama por defecto de GitHub.
      branch = branch || repoData.default_branch;

      // Comprobar que la rama existe
      const branchResponse = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/branches/${encodeURIComponent(branch)}`
      );

      if (!branchResponse.ok) {
        throw new Error(`La rama '${branch}' no existe`);
      }

      const languageIcons = {
        java: 'fa fab fa-java',
        python: 'fa fab fa-python',
        javascript: 'fa-brands fa-js',
        html: 'fa fab fa-html5',
        css: 'fab fa-css3-alt',
        cpp: 'fas fa-code',
        c: 'fas fa-code',
        json: 'fas fa-brackets-curly',
        shell: 'fas fa-terminal',
        bash: 'fas fa-terminal',
        typescript: 'devicon-typescript-plain colored'
      };

      const language = repoData.language?.toLowerCase();
      const iconClass = languageIcons[language] || 'fas fa-code';

      // URL del repositorio en GitHub
      const githubUrl = `${repoData.html_url}/tree/${encodeURIComponent(branch)}`;

      // URL del repositorio en CodeSandbox
      const sandboxUrl =
        `https://codesandbox.io/s/github/${owner}/${repo}/tree/${encodeURIComponent(branch)}`;

      el.innerHTML = `
        <div class="github-card">
          <div class="github-tabs">
            <button class="github-tab active" data-tab="github">
              GitHub
            </button>
            <button class="github-tab" data-tab="codesandbox">
              CodeSandbox
            </button>
          </div>

          <div class="github-tab-content active" data-content="github">
            <a href="${githubUrl}" target="_blank" rel="noopener noreferrer" class="github-link">
              <div class="github-header">
                <i class="fab fa-github github-icon"></i>
                <h4>${repoData.name}</h4>
              </div>

              <h6 class="ps-4">
                <i class="fas fa-code-branch"></i> ${branch}
              </h6>

              <p class="github-description">
                ${repoData.description || ''}
              </p>

              ${
                repoData.language
                  ? `
                    <div class="github-language">
                      <i class="${iconClass}"></i>
                      <span>${repoData.language}</span>
                    </div>
                  `
                  : ''
              }
            </a>
          </div>

          <div class="github-tab-content" data-content="codesandbox">
            <a href="${sandboxUrl}" target="_blank" rel="noopener noreferrer" class="github-link">
              <div class="github-header">
                <i class="fas fa-code github-icon"></i>
                <h4>Abrir en CodeSandbox</h4>
              </div>

              <p class="github-description">
                Explora el proyecto en línea.
              </p>
            </a>
          </div>
        </div>
      `;

      // Activación de tabs
      el.querySelectorAll('.github-tab').forEach((tabBtn) => {
        tabBtn.addEventListener('click', () => {
          const target = tabBtn.dataset.tab;

          el.querySelectorAll('.github-tab').forEach((btn) => {
            btn.classList.remove('active');
          });

          el.querySelectorAll('.github-tab-content').forEach((tab) => {
            tab.classList.remove('active');
          });

          tabBtn.classList.add('active');

          el.querySelector(
            `.github-tab-content[data-content="${target}"]`
          ).classList.add('active');
        });
      });
    } catch (error) {
      el.innerHTML = `
        <div class="github-card">
          Error: ${error.message}
        </div>
      `;
    }
  });
});
