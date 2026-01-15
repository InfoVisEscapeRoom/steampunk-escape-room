//Поле 1 Тіні
function checkA() {
  const input = document.getElementById("a");
  const result = document.getElementById("resultA");
  const value = Number(input.value);

  result.className = "puzzle-check-result";
  
  if (value === 2971) {
    result.textContent = "✅ Correct, your number is 2";
    result.className += " success";
  } else if (input.value === "") {
    result.textContent = "";
  } else {
    result.textContent = "❌ Incorrect, please try again";
    result.className += " error";
  }
}


//Поле 2 Мікроскоп
function checkB() {
  const input = document.getElementById("b");
  const result = document.getElementById("resultB");

  const value = input.value.trim().toLowerCase();

  result.className = "puzzle-check-result";

  if (value === "") {
    result.textContent = "";
    return;
  }

  if (value === "mike") {
    result.textContent = "✅ Correct! Your number is 0";
    result.className += " success";
  } else {
    result.textContent = "❌ Incorrect, please try again";
    result.className += " error";
  }
}


//Поле 3 Тіло
function checkC() {
  const input = document.getElementById("c");
  const result = document.getElementById("resultC");
  const value = Number(input.value);

  result.className = "puzzle-check-result";
  
  if (value === 300) {
    result.textContent = "✅ Correct, your number is 6";
    result.className += " success";
  } else if (input.value === "") {
    result.textContent = "";
  } else {
    result.textContent = "❌ Incorrect, please try again";
    result.className += " error";
  }
}
