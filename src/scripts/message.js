export default function message() {
  const messageContainer = document.createElement("div");

  messageContainer.id = "message";
  messageContainer.textContent = "Click Start!";

  return messageContainer;
}
