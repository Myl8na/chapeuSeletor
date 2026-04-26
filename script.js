function inButton() {
  const resultado = document.getElementById("resultado");
  const input = document.getElementById("inQualidade").value.toLowerCase(); //Trabsforma tudo que você escreve em minusculo

  resultado.className = ''

  if (input === "coragem") {
    resultado.innerText = `A sua casa é a Grifinória 🦁`;
    resultado.classList.add('grifinoria');
  } else if (input === "ambição" || input === "ambicao") {
    resultado.innerText = `A sua casa é a Sonserina 🐍`;
    resultado.classList.add('sonserina');
  } else if (input === "inteligência" || input === "inteligencia") {
    resultado.innerText = `A sua casa é a Corvinal 🦅`;
    resultado.classList.add('corvinal');
  } else if (input === "lealdade") {
    resultado.innerText = `A sua casa é a Lufa-Lufa 🦡`;
    resultado.classList.add('lufa-lufa');
  } else {
    resultado.innerHTML = `Hum... difícil. Talvez você seja um Trouxa?`;
  }
}
