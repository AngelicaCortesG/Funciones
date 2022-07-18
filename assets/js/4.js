
document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        /* Cambiar a color 1 */
        color = "red"

    } else if (event.key === 's') {
        /* Cambiar a color 2 */
        color = "greenyellow"
    }
    else if (event.key === 'd') {
        /* Cambiar a color 3 */
        color = "purple"
    }
    else if (event.key === '') {
        /* Cambiar a color 4 */
        color = "white"
    }
})

const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2");
const box3 = document.querySelector("#box3");
const box4 = document.querySelector("#box4");

box1.addEventListener("click", function () { (box1.style.backgroundColor = color) });
box2.addEventListener("click", function () { (box2.style.backgroundColor = color) });
box3.addEventListener("click", function () { (box3.style.backgroundColor = color) });
box4.addEventListener("click", function () { (box4.style.backgroundColor = color) });



