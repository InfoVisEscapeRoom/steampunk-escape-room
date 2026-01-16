//Поле 1 Тіні
function checkA() {
  const input = document.getElementById("a");
  const result = document.getElementById("resultA");
  const value = Number(input.value);

  result.className = "puzzle-check-result";
  
  if (value === 8810) {
    result.textContent = "✅ Richtig, Ihr Schlüssel ist 5";
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

  if (value === "tizian") {
    result.textContent = "✅ Richtig, Ihr Schlüssel ist 1";
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
  } else if (value.toUpperCase() === "GHNL") {
    result.textContent = "✅ Richtig, Ihr Schlüssel ist 9";
    result.className += " success";
  } else {
    result.textContent = "❌ Falsch, bitte versuchen Sie es erneut";
    result.className += " error";
  }
}
