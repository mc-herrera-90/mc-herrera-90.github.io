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

        card.classList.add(
          card.dataset.correct === "true"
            ? "correct"
            : "incorrect"
        );

      });

    });

  });

});
