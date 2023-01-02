import TopBar from "./scripts/topBar";
import Body from "./scripts/body";
import "./style.css";

const content = document.getElementById("content");

content.appendChild(TopBar());
content.appendChild(Body());
