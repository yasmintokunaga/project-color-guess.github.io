const randomColor = () => {
  const rgbArray = [0, 0, 0];
  for (let index = 0; index < rgbArray.length; index += 1) {
    rgbArray[index] = parseInt(Math.random() * 255, 10);
  }
  return `(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]})`;
};

const addColor = () => {
  const color = document.getElementsByClassName('ball');
  const colorArray = [];
  for (let index = 0; index < color.length; index += 1) {
    const colorBall = randomColor();
    color[index].style.backgroundColor = `rgb${colorBall}`;
    colorArray.push(colorBall);
  }
  return colorArray;
};

const colorGuess = () => {
  const rgbColor = document.getElementById('rgb-color');
  const colorArray = addColor();
  const positionColorChoice = parseInt(Math.random() * 5, 10);
  rgbColor.innerHTML = colorArray[positionColorChoice];
};
colorGuess();

const configPlacar = () => {
  const placar = document.getElementById('score').innerHTML;
  const splitPlacar = placar.split(' ');
  let score = parseInt(splitPlacar[1], 10);
  score += 3;
  document.getElementById('score').innerHTML = `Placar: ${score}`;
};

const desSelectColor = () => {
  const selected = document.getElementById('selected');
  if (selected) {
    selected.removeAttribute('id');
  }
};

const checkAnswer = () => {
  const answer = document.getElementById('answer');
  const selected = document.getElementById('selected');
  const rgbColor = document.getElementById('rgb-color');
  const colorSelect = selected.style.backgroundColor;
  const rgbColorGame = rgbColor.innerHTML;
  if (colorSelect === `rgb${rgbColorGame}`) {
    answer.innerHTML = 'Acertou!';
    configPlacar();
  } else {
    answer.innerHTML = 'Errou! Tente novamente!';
  }
};

const selectColor = () => {
  const color = document.getElementsByClassName('ball');
  for (let index = 0; index < color.length; index += 1) {
    color[index].addEventListener('click', () => {
      desSelectColor();
      color[index].id = 'selected';
      checkAnswer();
    });
  }
};
selectColor();

const configResetbtn = () => {
  const btnReset = document.getElementById('reset-game');
  const answer = document.getElementById('answer');
  btnReset.addEventListener('click', () => {
    colorGuess();
    answer.innerHTML = 'Escolha uma cor';
  });
};
configResetbtn();
