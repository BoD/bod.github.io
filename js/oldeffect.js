function toggleOldEffect() {
  document.getElementById("oldeffect").classList.toggle("minitel-oldeffect-animated");
  document.getElementById("toggleOldEffect").textContent = document.getElementById("oldeffect").classList.contains("minitel-oldeffect-animated") ? "Realistic: on" : "Realistic: off";
}
