let order = [];
let clickedOrder = [];
let score = 0;
let recorde = 0;
let txt = document.querySelector('.par1');
let txt2 = document.querySelector('.par2');
let txt3 = document.querySelector('.par3');

// 0 = verde, 1 = vermelho, 2 = amarelo, 3 = azul

const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');

//Cria ordem aleatória de cores
let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];
  for (let i in order) {
    let elementColor = createColorElement(order[i]);
    setTimeout(() => {
      lightColor(elementColor, Number(i) + 1);
    }, 1000 * i);
  }
};

//acende a próxima cor
let lightColor = (element, number) => {
  number = number + 500;
  setTimeout(() => {
    element.classList.remove('selected');
  }, number - 250);
  setTimeout(() => {
    element.classList.add('selected');
  }, 500);
  element.classList.remove('selected');
};

//Checa se os botões clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
  for (let i in clickedOrder) {
    if (clickedOrder[i] != order[i]) {
      gameOver();
      break;
    }
  }
  if (clickedOrder.length == order.length) {
    txt.textContent = `Pontuação atual: ${score}`;
    txt3.textContent = `Parabéns, você passou do nível ${score}! Iniciando próximo nível!`;
    nextLevel();
  }
};

//função para clique do usuário
let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add('selected');
  setTimeout(() => {
    createColorElement(color).classList.remove('selected');
    checkOrder();
  }, 250);
};

//função que retorna a cor
let createColorElement = (color) => {
  if (color == 0) {
    return green;
  } else if (color == 1) {
    return red;
  } else if (color == 2) {
    return yellow;
  } else {
    return blue;
  }
};

//função para próximo nível do jogo
let nextLevel = () => {
  createColorElement(0).classList.remove('selected');
  createColorElement(1).classList.remove('selected');
  createColorElement(2).classList.remove('selected');
  createColorElement(3).classList.remove('selected');
  score++;
  shuffleOrder();
};

//função de quando se perde
let gameOver = () => {
  (score > recorde) + 1 ? (recorde = score - 1) : recorde;
  alert(`Você perdeu no nível ${score}, seu recorde atual é nível: ${recorde}`);
  order = [];
  clickedOrder = [];
  txt3.textContent = `Infelizmente você perdeu no nível ${score}! Recomeçando o jogo!`;
  score = 0;
  playGame();
};

//função para iniciar o jogo
let playGame = () => {
  score = 0;
  txt.textContent = `Pontuação atual: ${score}`;
  txt2.textContent = `Recorde: ${recorde} pontos!`;
  nextLevel();
};
playGame();

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);
