import TopBar from "./scripts/topBar";
import Body from "./scripts/body";
import gameLoop from "./scripts/gameLoop";

import "./style.css";

const content = document.getElementById("content");

content.appendChild(TopBar());
content.appendChild(Body());

gameLoop();
