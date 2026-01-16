//Поле 1 Тіні
function checkA() {
  const input = document.getElementById("a");
  const result = document.getElementById("resultA");
  const value = Number(input.value);

  result.className = "puzzle-check-result";
  
  if (value === 2971) {
    result.textContent = "✅ Richtig, Ihr Schlüssel ist 2";
    result.className += " success";
  } else if (input.value === "") {
    result.textContent = "";
  } else {
    result.textContent = "❌ Falsch, bitte versuchen Sie es erneut";
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

  if (value === "leber") {
    result.textContent = "✅ Richtig, Ihr Schlüssel ist 3";
    result.className += " success";
  } else {
    result.textContent = "❌ Falsch, bitte versuchen Sie es erneut";
    result.className += " error";
  }
}


//Поле 3 Тіло
function checkC() {
  const input = document.getElementById("c");
  const result = document.getElementById("resultC");
  const value = input.value.trim();

  result.className = "puzzle-check-result";

  if (value === "") {
    result.textContent = "";
  } else if (value.toUpperCase() === "LLGN") {
    result.textContent = "✅ Richtig, Ihr Schlüssel ist 2";
    result.className += " success";
  } else {
    result.textContent = "❌ Falsch, bitte versuchen Sie es erneut";
    result.className += " error";
  }
}
