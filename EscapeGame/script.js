var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;
var game = document.getElementById("game");
var characterNumber = parseInt(prompt("Select a number 0 or 1 :) Dead or Heal!"));

function jump(){
    if(character.classList == "animate"){
        return 
    }else{
        character.classList.add("animate");
    }

    setTimeout(function(){
        character.classList.remove("animate");
    } , 400);
}

function random(number){
    return Math.floor(Math.random() * (number + 1));
}

function changeColor(){
    const color = 'rgb(' + random(255) + ','+ random(255) + ',' + random(255) + ')';
    game.style.backgroundColor = color;
}

function selectCharacter(){

    if(characterNumber == 0){
        character.style.backgroundImage = "url('images/running.png')";
        block.style.backgroundImage = "url('images/virus1.png')";
    }else{
        character.style.backgroundImage = "url('images/zombie.png')";
        block.style.backgroundImage = "url('images/drugs.png')";
    }
}


var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if((blockLeft < 20 && blockLeft > -20) && characterTop >=130){
        block.style.animation = "none";
        if(characterNumber == 0){
            alert("OMG You are dead! Now you're a zombie! :() Your Score : " + Math.floor(counter / 100));
        }else{
            alert("You healed! Now you're so healthy! :) Your Score : " + Math.floor(counter / 100));
        }    
        counter = 0;
        block.style.animation = "block 1.5s infinite linear";
    }else{
        counter++;
        document.getElementById('score').innerHTML = Math.floor(counter / 100);
    }
}, 10);