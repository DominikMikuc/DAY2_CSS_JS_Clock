//? Selecting Hands 
const secondsHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const allHands = document.querySelectorAll('.hand');

function setDate() {
  //? Geting Date informations
  const now = new Date();
  //? Geting Seconds
  const seconds = now.getSeconds();
  const secondsDeg = ((seconds / 60) * 360) + 90;
  
  //? Geting Mins
  const min = now.getMinutes();
  const minDeg = ((min / 60) * 360) + 90;
  
  //? Geting Hours
  const hour = now.getHours();
  const hourDeg = ((hour/60)*360)+90;
  
  //? Adds movment to hands
  secondsHand.style.transform = `rotate(${secondsDeg}deg)`;
  minHand.style.transform = `rotate(${minDeg}deg)`;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;

  if (secondsHand.style.transform === `rotate(444deg)`) {
    for (var i = 0; i < allHands.length; i++){
      allHands[i].style.removeProperty('transition');
    }
  }
}
setInterval(setDate, 1000);
