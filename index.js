const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

  
const refs = {
    startBtn: document.querySelector('[data-action = "start"]'),
    stoptBtn: document.querySelector('[data-action = "stop"]'),
    body: document.querySelector('body')
}


refs.startBtn.addEventListener('click', onClickStart)

function colorChange ()  {
  const i = randomIntegerFromInterval(0, colors.length - 1);
  document.body.style.backgroundColor = `${colors[i]}`;
}

let interval = " ";

function onClickStart() {

    interval = setInterval(colorChange , 1000)
    refs.startBtn.disabled = true;
    refs.stoptBtn.disabled = false;
}

refs.stoptBtn.addEventListener('click', onClickStop)

function onClickStop() {
     refs.startBtn.disabled = false;
    refs.stoptBtn.disabled = true;
    clearInterval(interval);
}

