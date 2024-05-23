const menuItem = document.querySelectorAll('.menu-item');
const arrow = document.querySelectorAll('.arrow');

arrow.forEach(arrow => {
    arrow.addEventListener('click', () => {
        menuItem.forEach(item => {
            if(item.querySelector('.arrow') == arrow) {
                const body = item.querySelector('.sub-menu-body');
                body.classList.toggle('sub-active');
                const arrow = item.querySelector('.arrow');
                arrow.classList.toggle('arrow-active');
            }
        });
    });
});