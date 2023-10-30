// Iteration 1: Make the Play button functional.
// Description: When the Play button is clicked the game page should be displayed.
const play = document.getElementById("play-button");

play.onclick = () => {
    location.href = "./game.html";
}