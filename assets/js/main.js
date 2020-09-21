// capturar evento de submit do formulário

const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
  // addEventListener adicina um
  // evento, que possui 2 parâmetros: um callback e um evento.
  // callback é uma função dentro de outra função
  e.preventDefault(); // adiciona no evento
  const inputPeso = e.target.querySelector('#peso');
  const inputAltura = e.target.querySelector('#altura');

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado('Peso inválido', false);
    return;
  }
  if (!altura) {
    setResultado('Altura inválida', false);
    return;
  }
  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  const msg = `Seu IMC é ${imc} (${nivelImc})`;

  setResultado(msg, true);
  // Continua o código..
});
function getNivelImc(imc) {
  const nivel = [
    'Abaixo do peso',
    'Peso normal',
    'Sobrepeso',
    'Obesidade grau 1',
    'Obesidade grau 2',
    'Obesidade grau 3',
  ];

  if (imc >= 39.9) return nivel[5]; // return vai parar a execução da função, portanto nao precisa do if else.

  if (imc >= 34.9) return nivel[4];

  if (imc >= 29.9) return nivel[3];

  if (imc >= 24.9) return nivel[2];

  if (imc >= 18.5) return nivel[1];

  if (imc < 18.5) return nivel[0];
}

function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function criaP() {
  const p = document.createElement('p'); //criando um elemento no html
  return p;
}

function setResultado(msg, isValid) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = ''; //limpar as informações
  // p.classList.add('paragrafo-resultado'); // adiciona uma classe na
  // lista de classes dessa tag
  const p = criaP(); // chamando a funçao criaP

  if (isValid) {
    p.classList.add('paragrafo-resultado');
  } else {
    p.classList.add('paragrafo-resultado');
  }
  p.innerHTML = msg; // modificando o valor da tag original
  resultado.appendChild(p); // inserindo essa tag p dentro da div resultado
}

// function get() {
//   const form = document.querySelector('#form');
//   const resultado = document.querySelector('.resultado');
//   const info = [];
//   const event = (e) => {
//     e.preventDefault();
//     const peso = document.querySelector('#peso');
//     const altura = document.querySelector('#altura');
//     info.push({
//       peso: peso.value,
//       altura: altura.value,
//     });
//     resultado.innerHTML += `<p>${peso.value} ${altura.value}</p>`;
//   };
//   form.addEventListener('submit', event);
// }
// get();
