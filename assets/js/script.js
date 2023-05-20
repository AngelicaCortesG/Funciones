// 3.1

// function pintar() {
//     ele.style.backgroundColor = 'yellow'
// }
// ele = document.getElementById("ele1")
// ele.addEventListener("click", pintar);

// 3.2 y 3.3

// Verde por defecto

        // div= document.querySelector('#ele1')
        // function pintar(color= "green") {
        //     div.style.backgroundColor = color
        // }
        // div.addEventListener("click", () => {pintar()});

// Verde por defecto, al hacer click pasa a amarillo
         div= document.querySelector('#ele1')
         function pintar(color= "green") {
             div.style.backgroundColor = color
         }
         div.addEventListener("click", () => {
                pintar('yellow')
            });