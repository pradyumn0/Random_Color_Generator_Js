const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn=document.getElementById('btn');
const color=document.querySelector(".color");

btn.addEventListener('click',function(){
  // get random number between 0-3 

  const randomNumber=Math.floor(getRandomNumber(0,3));
document.body.style.backgroundColor = colors[randomNumber];
color.textContent= colors[randomNumber];
})

function getRandomNumber(min,max){
  return Math.random()*(max-min)+ min;
}