// JavaScript utilizado no menu lateral //
const Tamanho_menu = '350px';

let abrir = true;

document.querySelector('#botaoMenu').addEventListener('click', e => {
   abrir = !abrir;
    toggleMenu();
})

document.querySelector('#botaoFechar').addEventListener('click', e => {
    abrir = false;

    toggleMenu();
})

function toggleMenu() {
    if (abrir) {
        document.querySelector('#menu').style.marginLeft = 0;
        return;
    }

    document.querySelector('#menu').style.marginLeft = `-${Tamanho_menu}`;
}
