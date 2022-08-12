//Business Logic

// User Interface Logic
function hideResults () {
  document.getElementById("hideResults").setAttribute("class", "hidden");
}

window.onload = function() {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    hideResults();
    console.log("function");

  const q1 = document.querySelector("input[name=question1]:checked".value);
  const q2 = document.querySelector("input[name=question2]:checked".value);
  const q3 = document.querySelector("input[name=question3]:checked".value);
  const q4 = document.querySelector("input[name=question4]:checked".value);
  const q5 = document.querySelector("input[name=question5]:checked".value);

  let results;
  if (q1 === document.getElementById("Game").checked && q2 === document.getElementById("Startups").checked && q3 === document.getElementById("Mac").checked && q4 === document.getElementById("Front End").checked && q5 === document.getElementById("Fully Experienced").checked) {
    results = "Python";
    console.log("python");
  }

  window.addEventListener("load", function() {
    const form = document.getElementById("radio-form");
    form.addEventListener("submit", quiz);
  });

  };


/*function quiz(event){
  event.preventDefault();
  console.log = ("hi");

  const q1 = document.querySelector("input[name=question1]").value;
  const q2 = document.querySelector("input[name=question2]").value;
  const q3 = document.querySelector("input[name=question3]").value;
  const q4 = document.querySelector("input[name=question4]").value;
  const q5 = document.querySelector("input[name=question5]").value;

  let results;
  if (q1 === "Game" && q2 === "Startups" && q3 === "Mac" && q4 === "Front End" && q5 === "Fully Experienced") {
    results = "Python"
  }

  document.getElementById("results").innerText = results;
}

window.addEventListener("load", function() {
  const form = document.getElementById("radio-form");
  form.addEventListener("submit", quiz);
});
*/