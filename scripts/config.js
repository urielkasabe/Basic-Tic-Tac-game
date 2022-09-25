function openPlayerConfig(event) {
  const selectedPlayerId = +event.target.dataset.playerid;
  editedPlayer = selectedPlayerId;
  playerConfigOverlayEl.style.display = "block";
  backdropEl.style.display = "block";
}

function closePlayer() {
  playerConfigOverlayEl.style.display = "none";
  backdropEl.style.display = "none";
  formEl.firstElementChild.classList.remove("error");
  errorOutput.textContent = "";
  formEl.querySelector("input").value = "";
}

function savePlayer(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("playername").trim();

  if (!enteredPlayerName) {
    event.target.firstElementChild.classList.add("error");
    errorOutput.textContent = "Please enter a valid name!";
    return;
  }

  const updatedName = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatedName.children[1].textContent = enteredPlayerName;

  players[editedPlayer - 1].name = enteredPlayerName;

  closePlayer();
}
