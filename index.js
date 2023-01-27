

for(let i = 0; i < document.querySelectorAll(".tile").length; i++) {

  document.querySelectorAll(".tile")[i].addEventListener("click", handleClick);

  function handleClick() {

    let buttonInnerText = this.innerText;
    playSound(buttonInnerText);

    keyAnimation(buttonInnerText);

  }


  document.addEventListener("keydown", handleKeyboardPress);

  function handleKeyboardPress(event) {

    playSound(event.key);

    keyAnimation(event.key);

  }

    

  function playSound(key) {

    switch (key) {
      case "a":
        let doSound = new Audio("sounds/do-sound.mp3");
        doSound.play();
        break;

      case "s":
        let reSound = new Audio("sounds/re-sound.mp3");
        reSound.play();
        break;

      case "d":
        let miSound = new Audio("sounds/mi-sound.mp3");
        miSound.play();
        break;

      case "f":
        let faSound = new Audio("sounds/fa-sound.mp3");
        faSound.play();
        break;

      case "j":
        let solSound = new Audio("sounds/sol-sound.mp3");
        solSound.play();
        break;

      case "k":
        let laSound = new Audio("sounds/la-sound.mp3");
        laSound.play();
        break;
        
      case "l":
        let siSound = new Audio("sounds/si-sound.mp3");
        siSound.play();
        break;
    

      default:
        console.log(key);
        break;
    }

  }
}

function keyAnimation(pressedKey) {

  let activeKey = document.querySelector("." + pressedKey);

  activeKey.classList.add("pressed");

  setTimeout(function() {activeKey.classList.remove("pressed")}, 250);

}


