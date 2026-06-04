window.addEventListener("load", () => {

  document.querySelectorAll(".quiz").forEach(quiz => {

    const answers = quiz.querySelectorAll(".answer");
    const result = quiz.querySelector(".result");

    answers.forEach(card => {

      card.addEventListener("click", () => {

        answers.forEach(answer => {
          answer.classList.remove("correct", "incorrect");
        });

        result.textContent = card.dataset.feedback;

        const nextButton = quiz.parentElement.querySelector(".next-slide");

        if (card.dataset.correct === "true") {

          card.classList.add("correct");

          if (nextButton) {
            nextButton.style.display = "table";
          }

        } else {

          card.classList.add("incorrect");

          if (nextButton) {
            nextButton.style.display = "none";
          }

        }


      });

    });

  });

});
