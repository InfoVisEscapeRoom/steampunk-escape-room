function checkA() {
  const input = document.getElementById("a");
  const result = document.getElementById("resultA");
  const value = Number(input.value);

  result.className = "puzzle-check-result";
  
  if (value === 210) {
    result.textContent = "✅ Correct, your number is 3";
    result.className += " success";
  } else if (input.value === "") {
    result.textContent = "";
  } else {
    result.textContent = "❌ Incorrect, please try again";
    result.className += " error";
  }
}

function checkB() {
  const input = document.getElementById("b");
  const result = document.getElementById("resultB");
  const value = Number(input.value);

  result.className = "puzzle-check-result";
  
  if (value === 209) {
    result.textContent = "✅ Correct, your number is 5";
    result.className += " success";
  } else if (input.value === "") {
    result.textContent = "";
  } else {
    result.textContent = "❌ Incorrect, please try again";
    result.className += " error";
  }
}

function checkC() {
  const input = document.getElementById("c");
  const result = document.getElementById("resultC");
  const value = Number(input.value);

  result.className = "puzzle-check-result";
  
  if (value === 300) {
    result.textContent = "✅ Correct, your number is 8";
    result.className += " success";
  } else if (input.value === "") {
    result.textContent = "";
  } else {
    result.textContent = "❌ Incorrect, please try again";
    result.className += " error";
  }
}
