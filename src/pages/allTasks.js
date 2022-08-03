function renderAllTasks() {
    const container = document.createElement('div');
    container.classList.add('container');

    const headerDiv = document.createElement('div');
    headerDiv.classList.add('header');

    const header = document.createElement('h2');
    header.textContent = 'All Tasks';
    headerDiv.appendChild(header);

    container.appendChild(headerDiv);

    return container;
}

export { renderAllTasks };