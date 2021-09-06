const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function kata1() {
    // implemente o código do kata 1 aqui

    const lista = document.querySelector('#ulKata1');

    const itemLista = document.createElement("li");
    const itemTexto = document.createElement("h2");

    let retorno1 = [];
    for (let i=1; i<=25; i++) {
        retorno1.push(" " + i);
    }

    itemTexto.innerText = retorno1;

    itemLista.appendChild(itemTexto);
    lista.appendChild(itemLista);
}
const botaoKata1 = document.querySelector('#btnKata1');

botaoKata1.addEventListener('click', kata1);


function kata2() {
    // implemente o código do kata 2 aqui

    const lista = document.querySelector('#ulKata2');

    const itemLista = document.createElement("li");
    const itemTexto = document.createElement("h2");


    let retorno2 = [];
    for (let i=25; i>=1; i--) {
        retorno2.push(" " + i);
    }

    itemTexto.innerText = retorno2;

    itemLista.appendChild(itemTexto);
    lista.appendChild(itemLista);
}
const botaoKata2 = document.querySelector('#btnKata2');

botaoKata2.addEventListener('click', kata2);



function kata3() {
    // implemente o código do kata 3 aqui

    const lista = document.querySelector('#ulKata3');

    const itemLista = document.createElement("li");
    const itemTexto = document.createElement("h2");

    let retorno3 = [];
    for (let i=-1; i>=-25; i--) {
        retorno3.push(" " + i);
    }

    itemTexto.innerText = retorno3;

    itemLista.appendChild(itemTexto);
    lista.appendChild(itemLista);
}
const botaoKata3 = document.querySelector('#btnKata3');

botaoKata3.addEventListener('click', kata3);



function kata4() {
    // implemente o código do kata 4 aqui

    const lista = document.querySelector('#ulKata4');

    const itemLista = document.createElement("li");
    const itemTexto = document.createElement("h2");

    let retorno4 = [];
    for (let i=-25; i<=-1; i++) {
        retorno4.push(" " + i);
    }

    itemTexto.innerText = retorno4;

    itemLista.appendChild(itemTexto);
    lista.appendChild(itemLista);
}
const botaoKata4 = document.querySelector('#btnKata4');

botaoKata4.addEventListener('click', kata4);



function kata5() {
    // implemente o código do kata 5 aqui

    const lista = document.querySelector('#ulKata5');

    const itemLista = document.createElement("li");
    const itemTexto = document.createElement("h2");

    let retorno5 = [];
    for (let i = 25; i>=-25; i-=2) {
        retorno5.push(" " + i);
    }

    itemTexto.innerText = retorno5;

    itemLista.appendChild(itemTexto);
    lista.appendChild(itemLista);
}
const botaoKata5 = document.querySelector('#btnKata5');

botaoKata5.addEventListener('click', kata5);



function kata6() {
    // implemente o código do kata 6 aqui

    const lista = document.querySelector('#ulKata6');

    const itemLista = document.createElement("li");
    const itemTexto = document.createElement("h2");

    let retorno6 = [];
    for (let i = 1; i<=100; i++) {
        if(i % 3 === 0) {
            retorno6.push(" " + i);
        }
    }

    itemTexto.innerText = retorno6;

    itemLista.appendChild(itemTexto);
    lista.appendChild(itemLista);
}
const botaoKata6 = document.querySelector('#btnKata6');

botaoKata6.addEventListener('click', kata6);



function kata7() {
    // implemente o código do kata 7 aqui

    const lista = document.querySelector('#ulKata7');

    const itemLista = document.createElement("li");
    const itemTexto = document.createElement("h2");

    let retorno7 = [];
    for (let i = 1; i<=100; i++) {
        if(i % 7 === 0) {
            retorno7.push(" " + i);
        }
    }

    itemTexto.innerText = retorno7;

    itemLista.appendChild(itemTexto);
    lista.appendChild(itemLista);
}
const botaoKata7 = document.querySelector('#btnKata7');

botaoKata7.addEventListener('click', kata7);



function kata8() {
    // implemente o código do kata 8 aqui

    const lista = document.querySelector('#ulKata8');

    const itemLista = document.createElement("li");
    const itemTexto = document.createElement("h2");

    let retorno8 = [];
    for (let i = 100; i>=1; i--) {
        if(i % 3 === 0) {
            retorno8.push(" " + i);
        }
        else if(i % 7 === 0) {
            retorno8.push(" " + i);
        }
    }

    itemTexto.innerText = retorno8;

    itemLista.appendChild(itemTexto);
    lista.appendChild(itemLista);
}
const botaoKata8 = document.querySelector('#btnKata8');

botaoKata8.addEventListener('click', kata8);



function kata9() {
    // implemente o código do kata 9 aqui

    const lista = document.querySelector('#ulKata9');

    const itemLista = document.createElement("li");
    const itemTexto = document.createElement("h2");

    let retorno9 = [];
    for (let i = 0; i<=100; i++) {
        if(i % 5 === 0 && i % 2 !== 0) {
            retorno9.push(" " + i);
        }
    }

    itemTexto.innerText = retorno9;

    itemLista.appendChild(itemTexto);
    lista.appendChild(itemLista);
}
const botaoKata9 = document.querySelector('#btnKata9');

botaoKata9.addEventListener('click', kata9);



function kata10() {
    // implemente o código do kata 10 aqui

    const lista = document.querySelector('#ulKata10');

    const itemLista = document.createElement("li");
    const itemTexto = document.createElement("h2");

    itemTexto.innerText = sampleArray;

    itemLista.appendChild(itemTexto);
    lista.appendChild(itemLista);
}
const botaoKata10 = document.querySelector('#btnKata10');

botaoKata10.addEventListener('click', kata10);



function kata11() {
    // implemente o código do kata 11 aqui

    const lista = document.querySelector('#ulKata11');

    const itemLista = document.createElement("li");
    const itemTexto = document.createElement("h2");

    let retorno11 = [];
    for (let i = 0; i<=sampleArray.length; i++) {
        if(sampleArray[i] % 2 === 0) {
            retorno11.push(" " + sampleArray[i]);
        }
    }

    itemTexto.innerText = retorno11;

    itemLista.appendChild(itemTexto);
    lista.appendChild(itemLista);
}
const botaoKata11 = document.querySelector('#btnKata11');

botaoKata11.addEventListener('click', kata11);



function kata12() {
    // implemente o código do kata 12 aqui

    const lista = document.querySelector('#ulKata12');

    const itemLista = document.createElement("li");
    const itemTexto = document.createElement("h2");

    let retorno12 = [];
    for (let i = 0; i<sampleArray.length; i++) {
        if(sampleArray[i] % 2 !== 0) {
            retorno12.push(" " + sampleArray[i]);
        }
    }

    itemTexto.innerText = retorno12;

    itemLista.appendChild(itemTexto);
    lista.appendChild(itemLista);
}
const botaoKata12 = document.querySelector('#btnKata12');

botaoKata12.addEventListener('click', kata12);



function kata13() {
    // implemente o código do kata 13 aqui

    const lista = document.querySelector('#ulKata13');

    const itemLista = document.createElement("li");
    const itemTexto = document.createElement("h2");

    let retorno13 = [];
    for (let i = 0; i<=sampleArray.length; i++) {
        if(sampleArray[i] % 8 === 0) {
            retorno13.push(" " + sampleArray[i]);
        }
    }

    itemTexto.innerText = retorno13;

    itemLista.appendChild(itemTexto);
    lista.appendChild(itemLista);
}
const botaoKata13 = document.querySelector('#btnKata13');

botaoKata13.addEventListener('click', kata13);



function kata14() {
    // implemente o código do kata 14 aqui

    const lista = document.querySelector('#ulKata14');

    const itemLista = document.createElement("li");
    const itemTexto = document.createElement("h2");

    let retorno14 = [];
    for (let i = 0; i<=sampleArray.length; i++) {
        retorno14.push(" " + sampleArray[i]*sampleArray[i]);
    }

    itemTexto.innerText = retorno14;

    itemLista.appendChild(itemTexto);
    lista.appendChild(itemLista);
}
const botaoKata14 = document.querySelector('#btnKata14');

botaoKata14.addEventListener('click', kata14);



function kata15() {
    // implemente o código do kata 15 aqui

    const lista = document.querySelector('#ulKata15');

    const itemLista = document.createElement("li");
    const itemTexto = document.createElement("h2");

    let retorno15 = 0;
    for (let i = 0; i<=20; i++) {
        retorno15 += i;
    }

    itemTexto.innerText = retorno15;

    itemLista.appendChild(itemTexto);
    lista.appendChild(itemLista);
}
const botaoKata15 = document.querySelector('#btnKata15');

botaoKata15.addEventListener('click', kata15);



function kata16() {
    // implemente o código do kata 16 aqui

    const lista = document.querySelector('#ulKata16');

    const itemLista = document.createElement("li");
    const itemTexto = document.createElement("h2");

    let retorno16 = 0;
    for (let i = 0; i<sampleArray.length; i++) {
        retorno16 += sampleArray[i];
        // 469 + 755 + 244 + 245 + 758 + 450 + 302 + 20 + 712 + 71 + 456 + 21 + 398 + 339 + 882 + 848 + 179 + 535 + 940 + 472
    }

    itemTexto.innerText = retorno16;

    itemLista.appendChild(itemTexto);
    lista.appendChild(itemLista);
}
const botaoKata16 = document.querySelector('#btnKata16');

botaoKata16.addEventListener('click', kata16);



function kata17() {
    // implemente o código do kata 17 aqui

    const lista = document.querySelector('#ulKata17');

    const itemLista = document.createElement("li");
    const itemTexto = document.createElement("h2");

    itemTexto.innerText = Math.min(...sampleArray);

    itemLista.appendChild(itemTexto);
    lista.appendChild(itemLista);
}
const botaoKata17 = document.querySelector('#btnKata17');

botaoKata17.addEventListener('click', kata17);



function kata18() {
    // implemente o código do kata 18 aqui

    const lista = document.querySelector('#ulKata18');

    const itemLista = document.createElement("li");
    const itemTexto = document.createElement("h2");

    itemTexto.innerText = Math.max(...sampleArray);

    itemLista.appendChild(itemTexto);
    lista.appendChild(itemLista);
}
const botaoKata18 = document.querySelector('#btnKata18');

botaoKata18.addEventListener('click', kata18);



/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
