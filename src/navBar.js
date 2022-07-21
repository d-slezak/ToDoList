function renderNavBar() {
    const navBar = document.createElement('div');
    navBar.id = 'navBar';

    const navItems = document.createElement('ul');
    navItems.classList.add('navItems');
    ['All Tasks', 'Today', 'Important'].forEach(item => {
        const navItem = document.createElement('li');
        navItem.classList.add('navItem');
        navItem.appendChild(document.createTextNode(item));

        navItems.appendChild(navItem);
    })

    navBar.appendChild(navItems);

    return navBar;
}

export { renderNavBar }