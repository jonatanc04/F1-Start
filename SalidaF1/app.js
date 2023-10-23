let time = document.getElementById("time");

let sem1 = document.getElementById("1");
let luz1 = sem1.children;
let sem2 = document.getElementById("2");
let luz2 = sem2.children;
let sem3 = document.getElementById("3");
let luz3 = sem3.children;
let sem4 = document.getElementById("4");
let luz4 = sem4.children;
let sem5 = document.getElementById("5");
let luz5 = sem5.children;

let inicio = 0;
let dispara = 0;
let milisegundos = 0;
let result = 0;

let myInterval;
let final = false;

function tick(){
    inicio++;
    
    if (inicio == 1) {
        luz1[2].classList.remove("luz");
        luz1[3].classList.remove("luz");
        luz1[2].classList.add("luz-roja");
        luz1[3].classList.add("luz-roja");
    } else if (inicio == 2) {
        luz2[2].classList.remove("luz");
        luz2[3].classList.remove("luz");
        luz2[2].classList.add("luz-roja");
        luz2[3].classList.add("luz-roja");
    } else if (inicio == 3) {
        luz3[2].classList.remove("luz");
        luz3[3].classList.remove("luz");
        luz3[2].classList.add("luz-roja");
        luz3[3].classList.add("luz-roja");
    } else if (inicio == 4) {
        luz4[2].classList.remove("luz");
        luz4[3].classList.remove("luz");
        luz4[2].classList.add("luz-roja");
        luz4[3].classList.add("luz-roja");
    } else if (inicio == 5) {
        luz5[2].classList.remove("luz");
        luz5[3].classList.remove("luz");
        luz5[2].classList.add("luz-roja");
        luz5[3].classList.add("luz-roja");
    } else {
        clearInterval(myInterval);
        inicio = 0;
        dispara = Math.floor(Math.random() * 6) + 1;
        myInterval = setInterval(empezar, 1000); 
    }
        
}

let startTime;

function empezar() {
    inicio++;
    if (inicio === dispara) {
        clearInterval(myInterval);
        let todasLasLuces = [luz1, luz2, luz3, luz4, luz5];
        todasLasLuces.forEach(function (luces) {
            luces[2].classList.remove("luz-roja");
            luces[2].classList.remove("luz");
            luces[2].classList.add("luz-verde");
            
            luces[3].classList.remove("luz-roja");
            luces[3].classList.remove("luz");
            luces[3].classList.add("luz-verde");
        });
        startTime = new Date().getTime(); 
        myInterval = setInterval(gogogo, 1);
    }
}

function gogogo() {
    let currentTime = new Date().getTime();
    let elapsedTime = currentTime - startTime;
    milisegundos = elapsedTime;
}

function formatearTiempo(milisegundos) {
    let segundos = Math.floor(milisegundos / 1000);
    let ms = milisegundos % 1000;
    let segundosStr = segundos.toString().padStart(2, '0');
    let msStr = ms.toString().padStart(3, '0');
    return segundosStr + '.' + msStr;
}

window.addEventListener("click", function(event) {
    if (final) {
        milisegundos = 0;
        time.textContent = "00.000";
    }

    if (milisegundos == 0) {
        if (!final) {
            if (inicio >= 1 && inicio <= 5) {
                time.textContent = "Jump start!";
                clearInterval(myInterval);
                final = true;
            } else {
                final = false;
                myInterval = setInterval(tick, 1000);
            }
        } else {
            clearInterval(myInterval);
            inicio = 0;
            milisegundos = 0;
            result = 0;
            let todasLasLuces = [luz1, luz2, luz3, luz4, luz5];
            todasLasLuces.forEach(function(luces) {
                for (let i = 2; i < luces.length; i++) {
                    luces[i].classList.remove("luz-roja");
                    luces[i].classList.remove("luz-verde");
                    luces[i].classList.add("luz");
                }
            });
            time.textContent = "00.000";
            final = false;
        }
    } else {
        clearInterval(myInterval);
        time.textContent = formatearTiempo(milisegundos);
        final = true;
    }
});