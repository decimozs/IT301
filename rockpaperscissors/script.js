const playerAttackImage = document.getElementById("player-attack");
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorBtn = document.getElementById("scissor-btn");

rockBtn.addEventListener("click", function () {
  playerAttackImage.src = "./assets/rock.png";
});

paperBtn.addEventListener("click", function () {
  playerAttackImage.src = "./assets/paper.png";
});

scissorBtn.addEventListener("click", function () {
  playerAttackImage.src = "./assets/scissors.png";
});
