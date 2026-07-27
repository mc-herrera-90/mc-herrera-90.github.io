function animateBlockquotes(slide){

    const blocks = slide.querySelectorAll("blockquote");

    blocks.forEach(function(block){

        if(!block.dataset.text){

            block.dataset.text = block.innerText;

        }

        const text = block.dataset.text;

        block.innerHTML = '<span class="typewriter-text"></span>';

        const output = block.querySelector(".typewriter-text");

        let i = 0;

        function type(){

            if(i < text.length){

                output.textContent += text.charAt(i);

                i++;

                setTimeout(type,35);
            }
        }
        type();
    });
}

Reveal.on('ready', function(event){
    animateBlockquotes(event.currentSlide);
});

Reveal.on('slidechanged', function(event){
    animateBlockquotes(event.currentSlide);
});
