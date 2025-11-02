const music = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");
let playing = false;

btn.addEventListener("click", () => {
  if (!playing) {
    music.play();
    btn.textContent = "⏸️ Pause";
  } else {
    music.pause();
    btn.textContent = "🎵 Play";
  }
  playing = !playing;
});
