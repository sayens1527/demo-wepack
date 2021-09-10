import '../css/componentes.css'
//import webpackLogo from '../assets/imgs/webpack-logo.png'

export const saludar = (nombre) => {
    console.log('creando h1');
    const h1 = document.createElement('h1');
    h1.innerText = 'hola ' + nombre;
    const body = document.querySelector('body');
    body.appendChild(h1);

  /*  const img = document.createElement('img');
    img.src = webpackLogo;
    body.appendChild(img);*/
}