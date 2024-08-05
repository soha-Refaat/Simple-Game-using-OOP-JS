function Character(name , strength , health){
   this.name = name;
   this.strength = strength;
   this.health = health;
   this.elements = new UiElement(this.name);
   
}

function UiElement(name){
    this.attackBtn = document.querySelector(`#${name}-attack`);
    this.healthBtn = document.querySelector(`#${name}-make-health`);
    this.statushBtn = document.querySelector(`#${name}-status`);
    this.progress = document.querySelector(`.${name}-health span`);
    this.progressPercent = document.querySelector(`.${name}-health p`);
    this.alive = document.querySelector(`#${name}-alive`);
    this.personStatus = document.getElementById(`${name}-get-status`);

 }


Character.prototype.attack= function(opponent){
    if(opponent.health > 0){
    opponent.health -= this.strength;
    opponent.elements.progressPercent.innerHTML = `${opponent.health} %`;
    opponent.elements.progress.style.width = `${opponent.health}%`;
    }
    else{
        opponent.elements.attackBtn.remove();
        opponent.elements.healthBtn.remove();
        opponent.elements.alive.innerHTML = `${opponent.name} is died`;
    }
}
Character.prototype.Status = function (){
    this.elements.personStatus.innerHTML = `Name: ${this.name} <br>
    Strength: ${this.strength}% <br>
    health: ${this.health}%`;
    this.elements.personStatus.style.display ="block";
}
Character.prototype.MakeHealth = function(){
    if(this.health < 100){
        this.health += 10;
        this.elements.progress.style.width = `${this.health}%`;
    }
    if(this.health > 100){
        this.health =100;
    }
}

let naruto = new Character("Naruto" , 10 , 100);
let sasuke = new Character("Sasuke" , 10 , 100);

naruto.elements.attackBtn.addEventListener('click', function(){
    naruto.attack(sasuke);
});
sasuke.elements.attackBtn.addEventListener('click', function(){
    sasuke.attack(naruto);
});

naruto.elements.healthBtn.addEventListener('click', function(){
    naruto.MakeHealth();
});
sasuke.elements.healthBtn.addEventListener('click', function(){
    sasuke.MakeHealth();
});
naruto.elements.statushBtn.addEventListener('click', function(){
    if(naruto.elements.personStatus.style.display =="block"){
        naruto.elements.personStatus.style.display ="none";
    }
    else{
        naruto.Status();
    }
});
sasuke.elements.statushBtn.addEventListener('click', function(){
    
    if(sasuke.elements.personStatus.style.display =="block"){
        sasuke.elements.personStatus.style.display ="none";
    }
    else{
        sasuke.Status();
    }
    
});


