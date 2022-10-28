let buttonClick = document.querySelectorAll(".drum")

for (bclick of buttonClick){
    bclick.addEventListener('click', function(){
        let buttonInnerHTML = this.innerHTML;
        playSound(buttonInnerHTML);
        buttonAnumation(buttonInnerHTML);
    });
}

document.addEventListener('keydown', function (event){
    playSound(event.key);
    buttonAnumation(event.key);

});

function playSound(key){
    switch (key) {
        case 'w':
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'a':
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case 's':
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'd':
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'j':
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case 'k':
            let kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case 'l':
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
    
        default: console.log(buttonInnerHTML);
    }     
    
    
}


function buttonAnumation(currentKey){
    let activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove('pressed');
    }, 100);
}

//let audio = new Audio("sounds/tom-1.mp3");
//        audio.play();



// Constructor Function
//here we have to use capital letter as the first letter to make it constructor function.

// function Bellboy(name, age, hasWorkPermit, languages){
//     this.name = name;
//     this.age = age;
//     this.hasWorkPermit = hasWorkPermit;
//     this.languages = languages;
//     this.clean = function(){
//         alert("Cleaning in progress");
//     }
// }

// let name1 = new Bellboy('Alaa', 37, true, ["Arabic", "English", "Swedish",]);
