//Business Logic

// User Interface Logic
function quiz(event){
  event.preventDefault();

  const q1 = document.getElementById("question1").value;
  const q2 = document.getElementById("question2").value;
  const q3 = document.getElementById("question3").value;
  const q4 = document.getElementById("question4").value;
  const q5 = document.getElementById("question5").value;

  let results;
  if (q1 === "Game" && q2 === "Startups" && q3 === "Mac" && q4 === "Front End" && q5 === "Fully Experienced") {
    results = "Python"
  }

  document.getElementById("results").innerText = results;
}

window.addEventListener("load", function) {
  const form = document.getElementById("radio-form");
  form.addEventListener("submit", quiz);
}  