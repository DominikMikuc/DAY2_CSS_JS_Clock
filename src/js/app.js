//? Selecting Hands 
const secondsHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const allHands = document.querySelectorAll('.hand');

function setDate() {
  //? Getting Date
  // Try moving time variables in to separate function
  const now = new Date();
  //? Getting Seconds
  const seconds = now.getSeconds();
  const secondsDeg = ((seconds / 60) * 360) + 90;
  
  //? Getting Mins
  const min = now.getMinutes();
  const minDeg = ((min / 60) * 360) + 90;
  
  //? Getting Hours
  const hour = now.getHours();
  // FIX THIS: There are 12 hours on the clock not 60
  const hourDeg = ((hour/60)*360)+90;
  
  //? Adds movement to hands
  secondsHand.style.transform = `rotate(${secondsDeg}deg)`;
  minHand.style.transform = `rotate(${minDeg}deg)`;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;

  // QUESTION: Where did 444deg come from?
  // Also this doesn't work
  // Fix it and try to do it with .map() or .forEach()
  if (secondsHand.style.transform === `rotate(444deg)`) {
    for (var i = 0; i < allHands.length; i++){
      allHands[i].style.removeProperty('transition');
    }
  }
}
setInterval(setDate, 1000);
