//Business Logic

// User Interface Logic

// Hide results for quiz
function hideResults () {
  document.getElementById("javascript").setAttribute("class", "hidden");
  document.getElementById("c#").setAttribute("class", "hidden");
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("other").setAttribute("class", "hidden");
}

// Evaluate quiz answer
window.onload = function() {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    hideResults();
  
    let javaScript = document.getElementById("javascript");
    let cSharp = document.getElementById("c#");
    let python = document.getElementById("python");
    let other = document.getElementById("other");

    if (document.getElementById("Web").checked && document.getElementById("Traditional Enterprises").checked && document.getElementById("Mac").checked && document.getElementById("Back End").checked && document.getElementById("Some Experience").checked || document.getElementById("Little to None").checked ) {
    python.removeAttribute("class");
    console.log("python");

    } else if (document.getElementById ("Web").checked && document.getElementById("Startups").checked || document.getElementById("Small Business'").checked && document.getElementById("Mac").checked && document.getElementById("Front End").checked && document.getElementById("Some Experience").checked || document.getElementById("Little to None").checked) {
    javaScript.removeAttribute("class");
    console.log("javacsript");

    } else if (document.getElementById("Game").checked && document.getElementById("Startups").checked && document.getElementById("Windows").checked || document.getElementById("Android").checked && document.getElementById("Front End").checked && document.getElementById("Some Experience").checked || document.getElementById("Fully Experienced").checked) {
    cSharp.removeAttribute("class");
    console.log("c#");

    } else {
      other.removeAttribute("class");
    console.log("other");
    }

  window.addEventListener("load", function() {
    const form = document.getElementById("radio-form");
    //form.addEventListener("submit", quiz);
    });
  };
}

/* const q1 = document.querySelector("input[name=question1]:checked".value);
const q2 = document.querySelector("input[name=question2]:checked".value);
const q3 = document.querySelector("input[name=question3]:checked".value);
const q4 = document.querySelector("input[name=question4]:checked".value);
const q5 = document.querySelector("input[name=question5]:checked".value); */