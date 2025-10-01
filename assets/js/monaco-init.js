require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.44.0/min/vs' } });

require(['vs/editor/editor.main'], function () {
    let fontSize = 18;
    function getTheme() {
      const html = document.documentElement;
      const mode = html.getAttribute("data-mode");
      if (mode === "dark") return "vs-dark";
      if (mode === "light") return "vs";
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "vs-dark" : "vs";
    }
    const editor = monaco.editor.create(document.getElementById('monaco-editor'), {
      value: "SELECT skill, category FROM skills;",
      language: 'sql',
      theme: getTheme(),
      automaticLayout: true,
      minimap: { enabled: false },
      fontSize
    });

    const observer = new MutationObserver(() => {
      monaco.editor.setTheme(getTheme());
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-mode"] });

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
      monaco.editor.setTheme(getTheme());
    });

    document.getElementById("font-increase").addEventListener("click", () => {
        fontSize += 1;
        editor.updateOptions({ fontSize });
    });
    document.getElementById("font-decrease").addEventListener("click", () => {
        fontSize = Math.max(8, fontSize - 1);
        editor.updateOptions({ fontSize });
    });

   initSqlJs({ locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.6.2/${file}` })
      .then(async SQL => {
        const response = await fetch("db/perfil.db");
        const buffer = await response.arrayBuffer();
        const db = new SQL.Database(new Uint8Array(buffer));
        const table = document.getElementById("sql-results");

        function runSQL(query) {
          try {
            const res = db.exec(query);
            table.innerHTML = "";
            if (res.length > 0) {
              const thead = document.createElement("thead");
              const trHeader = document.createElement("tr");
              thead.classList.add("sticky-top");
              thead.style.background = 'var(--sidebar-bg, #000)';

              const thIndex = document.createElement("th");
              thIndex.textContent = "#";
              thIndex.style.width = "30px";
              thIndex.style.textAlign = "center";
              trHeader.appendChild(thIndex);

              res[0].columns.forEach(c => {
                const th = document.createElement("th");
                th.textContent = c;
                th.style.textAlign = "left";
                trHeader.appendChild(th);
              });
              thead.appendChild(trHeader);
              table.appendChild(thead);

              const tbody = document.createElement("tbody");
              res[0].values.forEach((row, index) => {
                const tr = document.createElement("tr");

                const tdIndex = document.createElement("td");
                tdIndex.textContent = index + 1;
                tdIndex.style.width = "30px";
                tdIndex.style.textAlign = "center";
                tr.appendChild(tdIndex);

                row.forEach(cell => {
                  const td = document.createElement("td");
                  td.textContent = cell;
                  tr.appendChild(td);
                });

                tbody.appendChild(tr);
              });
              table.appendChild(tbody);
            }
          } catch (e) {
            alert("Error en la query: " + e.message);
          }
        }

        table.parentElement.style.maxHeight = '250px';

        document.getElementById("run-query").addEventListener("click", (e) => {
          runSQL(editor.getValue());
        });

        const filterBtns = document.querySelectorAll(".filter-btn");
        filterBtns.forEach(btn => {
          btn.addEventListener("click", () => {
            const cat = btn.getAttribute("data-category");
            editor.setValue(`SELECT skill, category FROM skills WHERE category = '${cat}';`);

            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
          });
        });

      });
})