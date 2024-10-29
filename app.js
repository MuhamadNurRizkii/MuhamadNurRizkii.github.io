const right = document.querySelectorAll('.right');

window.addEventListener('scroll',checkboxes);

checkboxes()

function checkboxes() {
    const triggerBottom = window.innerHeight / 5 * 4;

    right.forEach(right => {
        const rigthTop = right.getClientRects().top;

        if(rigthTop < triggerBottom) {
            right.classList.add('show')
        }else {
            right.classList.remove('show')
        }
    })
}