

export default class DonutMaker{
constructor(donutCount,donutMultiplier,autoClicker){
this.donutCount = 0;
this.donutMultiplier = 0;
this.autoClicker = 0;
this.autoClickerCost = 100;
this.donutMultiplierCost =10;
}

addToDonutCount(){
    this.donutCount+= Math.pow(1.2, this.donutMultiplier);
}



addToAutoClickerCount(){
    this.autoClicker++;
    this.donutCount-=this.autoClickerCost;
    this.autoClickerCost = Math.round(this.autoClickerCost * 1.1);
    this.autoClicker+=this.donutMultiplier;
    }


activateAutoClicker(){
    
    this.donutCount += this.autoClicker*Math.pow(1.2, this.donutMultiplier);
    console.log(this.autoClicker);
}

addToDonutMultiplierCount(){
    this.donutMultiplier++;
    this.donutCount-=this.donutMultiplierCost;
    this.donutMultiplierCost = Math.round(this.donutMultiplierCost * 1.1);
    
}
checkAutoClick(){
    const autoBtnClick = document.querySelector(".PurchaseAutoClicks");
    if(this.donutCount >= this.autoClickerCost){
autoBtnClick.disabled = false;
}else autoBtnClick.disabled = true;
console.log("This is the donut count" + this.donutCount);


}

checkMultiplier(){
    const multBtnClick = document.querySelector(".PurchaseDonutMultiplier");
    if(this.donutCount >= this.donutMultiplierCost){
        multBtnClick.disabled = false;
}else multBtnClick.disabled = true;

}
restartGame(){
  
        window.location.reload();
    
    
    }


}
