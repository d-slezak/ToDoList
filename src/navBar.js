function renderNavBar() {
    const navBar = document.createElement('div');
    navBar.id = 'navBar';

    const navItems = document.createElement('div');
    navItems.classList.add('navItems');
    ['All Tasks', 'Today', 'Important'].forEach(item => {
        const navItem = document.createElement('div');
        navItem.classList.add('navItem');
        const itemText = document.createElement('h3');
        itemText.textContent = item;

        navItem.appendChild(itemText);
        navItems.appendChild(navItem);
    })

    navBar.appendChild(navItems);

    return navBar;
}

export { renderNavBar }