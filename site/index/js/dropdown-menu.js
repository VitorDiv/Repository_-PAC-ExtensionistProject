const menuItem = document.querySelectorAll('.menu-item');
const menuItemTitle = document.querySelectorAll('.menu-item-title');

menuItemTitle.forEach(title => {
    title.addEventListener('click', () => {
        menuItem.forEach(item => {
            if(item.querySelector('.menu-item-title') == title) {
                const body = item.querySelector('.sub-menu-body');
                body.classList.toggle('sub-active');
                const arrow = item.querySelector('.arrow');
                arrow.classList.toggle('arrow-active');
            }
        });
    });
});