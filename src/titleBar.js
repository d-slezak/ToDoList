function renderTitleBar() {
    const titleBar = document.createElement('div');
    titleBar.id = 'titleBar'
    
    const logoImg = document.createElement('img');
    logoImg.id = 'titleImg'
    logoImg.src = "./images/logo.svg";
    logoImg.alt = "ToDo Logo"

    const titleHeader = document.createElement('h1');
    titleHeader.textContent = 'ToDo List';

    titleBar.appendChild(logoImg);
    titleBar.appendChild(titleHeader);

    return titleBar;
}

export { renderTitleBar }