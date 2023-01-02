export default function TopBar() {
  const bar = document.createElement("div");
  bar.classList.add("title-text");

  bar.textContent = "BattleShip";

  return bar;
}
