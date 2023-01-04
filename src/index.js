import TopBar from "./scripts/topBar";
import Body from "./scripts/body";
import gameLoop from "./scripts/gameLoop";
import message from "./scripts/message";

import "./style.css";

const content = document.getElementById("content");

content.appendChild(TopBar());
content.appendChild(Body());
content.appendChild(message());

gameLoop();
