function showConfetti() {
  const confettiContainer = document.getElementById("confetti-container");

  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
    confetti.style.backgroundColor = getRandomColor();

    confettiContainer.appendChild(confetti);

    setTimeout(() => confetti.remove(), 5000);
  }
}

function getRandomColor() {
  const colors = ["#ff6f61", "#ff9472", "#ffd600", "#40c4ff", "#76ff03"];
  return colors[Math.floor(Math.random() * colors.length)];
}