function startGame() {
  gameLoop();
}
var loops = 0;
var peopleVisible = false;
var gameScore = 0;

function gameLoop() {
  peopleVisible = !peopleVisible;
  createCharcters();
  loops++;
  if (loops < 12) {
    setTimeout(gameLoop, 3000);
  } else {
    alert(`You score ${gameScore}`);
  }
}

function createCharcters() {
  var board = document.getElementById("board");
  var classToSet = "";
  if (peopleVisible) {
    classToSet = "character visible";
  } else {
    classToSet = "charcter hidden";
  }

  for (var index = 0; index < 6; index++) {
    board.children[index].className = classToSet;
    board.children[index].innerHTML = "";
    board.children[index].onclick = function () {
      gameScore += -2;
    };
  }
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  board.children[randomNumber - 1].innerHTML = "";
  board.children[randomNumber - 1].onclick = function () {
    gameScore++;
  };
  board.children[randomNumber - 1].className = classToSet + " thief";
}
