import DonutMaker from "./DonutMaker.js";
const donutMaker = new DonutMaker();
console.log(donutMaker);
setInterval(function(){
  donutMaker.activateAutoClicker();
  autoClickerDisplay.innerText = "Auto Click Count: "+ Math.round(donutMaker.autoClicker);
  donutDisplayCount.innerText = "Sunflower Count: "+ Math.floor(donutMaker.donutCount);
  autoClickCostDisplay.innerText = "Auto Clicker Cost: "+ Math.round(donutMaker.autoClickerCost);
  multiplierDisplay.innerText = "Multiplier: "+ Math.round(donutMaker.donutMultiplier);
  multiplierCostDisplay.innerText = "Multiplier Cost: "+ Math.round(donutMaker.donutMultiplierCost);
  valueofMultiplier.innerText = "Sunflowers Earned Per Click: "+ Math.pow(1.2, donutMaker.donutMultiplier).toFixed(2);
},150);

setInterval(function(){
  donutMaker.checkAutoClick();
  donutMaker.checkMultiplier();}, 150);


const addToDonutCount = document.querySelector(".IncreaseDonutCountButton");
const donutDisplayCount = document.querySelector(".DonutCountDisplay");

const addToAutoClickerCount = document.querySelector(".PurchaseAutoClicks");
const autoClickerDisplay = document.querySelector(".AutoClickDisplay");
const autoClickCostDisplay = document.querySelector(".AutoClickCostDisplay")

const buyMultiplier = document.querySelector(".PurchaseDonutMultiplier");
const multiplierDisplay = document.querySelector(".DonutMultiplierDisplay");
const multiplierCostDisplay = document.querySelector(".MultiplierCostDisplay");
const valueofMultiplier = document.querySelector(".ValueOfEachMultiplier");

const restartGame = document.querySelector(".RestartGame")
var audio = new Audio("http://static1.grsites.com/archive/sounds/cars/cars016.mp3");
addToDonutCount.addEventListener("click", () => {
  donutMaker.addToDonutCount();
 
  audio.play();
  // donutDisplayCount.innerText = "Sunflower Count: "+ Math.round(donutMaker.donutCount);
})

addToAutoClickerCount.addEventListener("click", () => {
  if(donutMaker.donutCount >= donutMaker.autoClickerCost){
    donutMaker.addToAutoClickerCount();
    autoClickerDisplay.innerText = "Auto Clicker Count: "+ donutMaker.autoClicker;
  // donutDisplayCount.innerText = "Sunflower Count: "+ Math.round(donutMaker.donutCount);
  }
  else console.log("Not enough donuts");
  
  
})

buyMultiplier.addEventListener("click", () => { 
  if(donutMaker.donutCount >= donutMaker.donutMultiplierCost){
    donutMaker.addToDonutMultiplierCount();
    multiplierDisplay.innerText = "Donut Multiplier: "+ donutMaker.donutMultiplier;
  // donutDisplayCount.innerText = "Donut Count: "+ Math.round(donutMaker.donutCount);
  }else console.log("You need more donuts to buy the multiplier");

})
const companyModal = document.querySelector(".companyModal"); 
const companyButton = document.querySelector(".companyButton");
const companyClose = document.querySelector(".companyClose");
companyModal.style.display = "none";

companyButton.addEventListener("click", () => {
  companyModal.style.display = "block";
})

companyClose.addEventListener("click", () => {
  companyModal.style.display = "none";
})
const aboutMeModal = document.querySelector(".aboutMeModal"); 
const aboutMeLink = document.querySelector(".aboutMeLink");
const aboutMeClose = document.querySelector(".aboutMeClose");
aboutMeModal.style.display = "none";

aboutMeLink.addEventListener("click", () => {
  aboutMeModal.style.display = "block";
  console.log("click")
})

aboutMeClose.addEventListener("click", () => {
  aboutMeModal.style.display = "none";
})

restartGame.addEventListener("click", ()=>{
  donutMaker.restartGame();

})


//1000 means nanosecond
