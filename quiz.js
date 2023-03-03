function checkAnswers() {
    let q1 = document.querySelector('input[name="q1"]:checked').value;
    let q2 = document.querySelector('input[name="q2"]:checked').value;
    let q3 = document.querySelector('input[name="q3"]:checked').value;
    let score = 0;

    if (q1 === "b") {
        score++;
    }
    if (q2 === "a") {
        score++;
    }
    if (q3 === "b") {
        score++;
    }

    let results = document.getElementById("results");
    results.innerHTML = "<h2>You scored " + score + " out of 3!</h2>";
}