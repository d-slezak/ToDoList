import { renderTitleBar } from "./titleBar";
import { renderNavBar } from "./navBar";
import { renderAllTasks } from "./pages/allTasks";

const content = document.createElement('div');
content.id = 'content';

function renderHome() {
    document.body.appendChild(renderTitleBar());
    content.appendChild(renderNavBar());
    content.appendChild(renderAllTasks());
    document.body.appendChild(content);

}

export { renderHome }