import { renderTitleBar } from "./titleBar";

const content = document.getElementById('content');

function renderHome() {
    content.appendChild(renderTitleBar());
}

export { renderHome }