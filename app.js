const fondo = document.querySelector(".fondo");
let marginTop = 0;

let lista = [];

const ponerHojas = () => {
    let zIndex = 0;

    for (let i = 0; i < 200; i++) {
        let tamaño = Math.round(Math.random() * (100 - 20) + 20);
        let rotacion = Math.round(Math.random() * (360 - 1) + 1);
        let x = Math.round(Math.random() * ((window.screen.availWidth - 100) - 0) + 0);
        let y = Math.round(Math.random() * ((window.screen.availHeight - 100) - 0) + 0);
        let divHoja = document.createElement("DIV");
        let hoja = document.createElement("IMG");

        divHoja.classList.add("contenedor");
        divHoja.classList.add(`hoja${zIndex}`);
        hoja.setAttribute("src", "hoja.png");
        hoja.setAttribute("alt", "hoja de otoño");

        divHoja.appendChild(hoja);
        divHoja.style.width = `${tamaño}px`;
        divHoja.style.transform = `rotate(${rotacion}deg)`;
        divHoja.style.left = `${x}px`;
        divHoja.style.top = `${y}px`;
        divHoja.style.zIndex = `${zIndex++}`;
        divHoja.style.position = "absolute";

        lista.push(y);

        fondo.appendChild(divHoja);
    }

    intervalo(lista);
}

const intervalo = list => {
    setInterval(() => {
        moverHojas(list);
    }, 20);
}

var valor = 0;

const moverHojas = array => {
    for (let j = 0; j < array.length; j++) {
        (array[j] >= window.screen.availHeight) ? array[j] = -200
            : document.querySelector(`.hoja${j}`).style.top = `${(j === 0) ? array[j]++ : array[j] += j / 50}px`;
            document.querySelector(`.hoja${j}`).style.transform = `rotate3d(1,1,1,${j*2}deg)`;
    }
}

ponerHojas();