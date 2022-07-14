function renderTitleBar() {
    const titleBar = document.createElement('div');
    
    const logoImg = document.createElement('img');
    logoImg.src = "./images/logo.jpg";
    logoImg.alt = "ToDo Logo"

    const titleHeader = document.createElement('h1');
    titleHeader.textContent = 'ToDo List';

    titleBar.appendChild(logoImg);
    titleBar.appendChild(titleHeader);

    return titleBar;
}

export { renderTitleBar }