document.getElementById("btn").addEventListener("click", eightBall);

function eightBall() {
  let input = document.getElementById("strIn").value.toLowerCase();
  let rand = Math.random();
  let output = document.getElementById("output");
  if (input == "") {
    output.innerHTML = "you have to type for me to answer!";
  } else if (input == "does this work?") {
    output.innerHTML = "yes";
  } else if (rand < 0.2) {
    output.innerHTML = "Without a Doubt.";
  } else if (rand < 0.4) {
    output.innerHTML = "As I see it, yes.";
  } else if (rand < 0.6) {
    output.innerHTML = "Concentrate and ask again.";
  } else if (rand < 0.8) {
    output.innerHTML = "Don't count on it.";
  } else {
    output.innerHTML = " ngl you might be cooked";
  }
}
