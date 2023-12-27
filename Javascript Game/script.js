var character = document.getElementById("character");
var block = document.getElementById("block");

//when character is active, the animation can not reset
function tp(){
    if(character.classList != "animate"){
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
    }
}

//stops the block from being displayed if game ends
//determines the end condition for the game
//displays alert message
var checkLoss = setInterval(function(){
    var characterL = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>0 && characterL != 110){
        block.style.animation = "none";
        block.style.display = "none";
        alert("Refresh to try again.")
    }
}, 10);