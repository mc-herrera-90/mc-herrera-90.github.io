---
---

<section data-markdown data-separator-vertical="^\n--\n$">
  <textarea data-template>

    <h3 class="r-fit-text">JavaSript</h3>

    <img class="r-stretch" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" />

    <h3 class="r-fit-text">Métodos de arrays</h3>

    ---

    ## Push

    El método `.push()` agrega un nuevo elemento al final del arreglo y modifica el original.

    ### Ejemplo

    <a onclick="Reveal.down(); return false;" style="display: table; margin: auto"><img class="r-frame" style="background: rgba(255, 255, 255, 0.1); cursor: pointer" width="100%" data-src="https://static.slid.es/reveal/arrow.png" alt="Down arrow"/></a>

    --

    En el siguiente ejemplo agregaremos nuevos héroes al final del arreglo usando `.push()`.

    ```javascript
    const heroesDC = ["batgirl", "green arrow"];

    console.log(heroesDC);

    heroesDC.push("catwoman", "shazam");

    console.log(heroesDC);
    ```

    <div style="display: flex; justify-content: space-evenly">

    <a href="https://onecompiler.com/embed/javascript/44q9cacgb?fontSize=15&hideEditorOptions=false&theme=dark&hideStdin=true&hideResult=false" data-preview-link>
    <i class="fa-solid fa-circle-play fa-xl" title="Ejecutar"></i>
    </a>
    <a data-preview-image="/assets/media/javascript/arrays/push-explicado.webp"><i class="fa-solid fa-circle-info fa-xl" title="Explicación"></i></a>
    </div>
  
    ---

    ## Unshift

    El método `.unshift()` agrega uno o más elementos al inicio del arreglo y modifica el original.

    ### Ejemplo

    <a onclick="Reveal.down(); return false;" style="display: table; margin: auto"><img class="r-frame" style="background: rgba(255, 255, 255, 0.1); cursor: pointer" width="100%" data-src="https://static.slid.es/reveal/arrow.png" alt="Down arrow"/></a>

    --

    En el siguiente ejemplo agregaremos nuevos jugadores al inicio del equipo usando `.unshift()`.

    ```javascript
    const equipo = ["Messi", "Suárez"];

    console.log(equipo);

    equipo.unshift("Neymar", "Iniesta");

    console.log(equipo);
    ```

    <div style="display: flex; justify-content: space-evenly">

    <a href="https://onecompiler.com/embed/javascript/44q9jmpw7?fontSize=15&hideEditorOptions=false&theme=dark&hideStdin=true&hideResult=false" data-preview-link>
    <i class="fa-solid fa-circle-play fa-xl" title="Ejecutar"></i>
    </a>
    <a data-preview-image="/assets/media/javascript/arrays/unshift-explicado.webp"><i class="fa-solid fa-circle-info fa-xl" title="Explicación"></i></a>
    </div>


    ---

    ## Shift

    El método `.shift()` elimina el primer elemento del arreglo y desplaza los demás elementos hacia atrás.

    ### Ejemplo

    <a onclick="Reveal.down(); return false;" style="display: table; margin: auto"><img class="r-frame" style="background: rgba(255, 255, 255, 0.1); cursor: pointer" width="100%" data-src="https://static.slid.es/reveal/arrow.png" alt="Down arrow"/></a>

    --


    En el siguiente ejemplo eliminaremos la primera tarea del arreglo y veremos cómo cambian sus índices.

    ```js
    const tareas = ["Despertar", "Desayunar", "Estudiar", "Dormir"];

    console.log(Object.entries(tareas));

    tareas.shift();

    console.log(Object.entries(tareas));
    ```

    <div style="display: flex; justify-content: space-evenly">

    <a href="https://onecompiler.com/embed/javascript/44q98kyrf?fontSize=15&hideEditorOptions=false&theme=dark&hideStdin=true&hideResult=false" data-preview-link>
    <i class="fa-solid fa-circle-play fa-xl" title="Ejecutar"></i>
    </a>
    <a data-preview-image="/assets/media/javascript/arrays/shift-explicado.webp"><i class="fa-solid fa-circle-info fa-xl" title="Explicación"></i></a>
    </div>

    ---

    ## Pop

    El método `.pop()` elimina el último elemento del arreglo y modifica el original.

    ### Ejemplo

    <a onclick="Reveal.down(); return false;" style="display: table; margin: auto"><img class="r-frame" style="background: rgba(255, 255, 255, 0.1); cursor: pointer" width="100%" data-src="https://static.slid.es/reveal/arrow.png" alt="Down arrow"/></a>

    --

    En el siguiente ejemplo eliminaremos el último jugador del equipo usando `.pop()`.
  
    ```javascript
    const equipo = ["Messi", "Suárez", "Neymar"];

    console.log(equipo);

    equipo.pop();

    console.log(equipo);
    ```

    <div style="display: flex; justify-content: space-evenly">
    <a href="https://onecompiler.com/embed/javascript/44q9m9sv3?fontSize=15&hideEditorOptions=false&theme=dark&hideStdin=true&hideResult=false" data-preview-link><i class="fa-solid fa-circle-play fa-xl" title="Ejecutar"></i></a>
    <a data-preview-image="/assets/media/javascript/arrays/shift-explicado.webp"><i class="fa-solid fa-circle-info fa-xl" title="Explicación"></i></a>
    </div>


    ---

    ## Filter

    El método `.filter()` crea un nuevo arreglo con los elementos que cumplen una condición

    ### Ejemplo

    <a onclick="Reveal.down(); return false;" style="display: table; margin: auto"><img class="r-frame" style="background: rgba(255, 255, 255, 0.1); cursor: pointer" width="100%" data-src="https://static.slid.es/reveal/arrow.png" alt="Down arrow"/></a>

    --

    ```js
    const numbers = [10, 20, 55.33, 23];
    
    function numberIsEven(num) {
      return Math.round(num) % 2 === 0;
    }

    const pares = numbers.filter(numberIsEven);

    console.log(pares);
    ```

    <div style="display: flex; justify-content: space-evenly">
    <a href="https://playjs.dev/#Y29uc3QgbnVtYmVycyA9IFsxMCwgMjAsIDU1LjMzLCAyM107CgpmdW5jdGlvbiBudW1iZXJJc0V2ZW4obnVtKSB7CiAgICByZXR1cm4gTWF0aC5yb3VuZChudW0pICUgMiA9PT0gMDsKfQoKY29uc3QgcGFyZXMgPSBudW1iZXJzLmZpbHRlcihudW1iZXJJc0V2ZW4pOwpjb25zb2xlLmxvZyhwYXJlcyk7" data-preview-link>
    <i class="fa-solid fa-circle-play fa-xl" title="Ejecutar"></i>
    </a>
    <a data-preview-image="/assets/media/javascript/arrays/filter-explicado.webp"><i class="fa-solid fa-circle-info fa-xl" title="Explicación"></i></a>
    </div>
  </textarea>
</section>
