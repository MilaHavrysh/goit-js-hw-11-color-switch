const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const styleTeg = document.querySelector('style')
const buttonStart = document.querySelector('[data-action="start"]')
const buttonStop=document.querySelector('[data-action="stop"]')
const bodyTeg=document.querySelector('body')
let isActive
let timer

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
 
const randomChoiceColor = (event) => {
  if (isActive == true) {
    return
  }
  isActive = true
  timer = setInterval(() => {
  bodyTeg.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];;
  }, 1000)
  console.log(event)  
 }

const stopInterval = (event) => {
  clearInterval(timer);
  isActive = false
 
 }

buttonStart.addEventListener('click', randomChoiceColor)
buttonStop.addEventListener('click',stopInterval)




