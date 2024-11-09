document.getElementById("revealButton").addEventListener("click", function() {
    document.getElementById("surpriseMessage").classList.remove("hidden");
    document.getElementById("revealButton").style.display = "none"; // Hide the button after clicking
});
const music = document.getElementById("bgMusic");
        
function toggleMusic() {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}