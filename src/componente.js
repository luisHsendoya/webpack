import './index.css';
import Img from './assets/freedom.jpg'
import Img2 from "./assets/mujica.jpg"


export function greeting(name, age) {
    const elemen = document.createElement('h1');
    elemen.innerText = `hello, ${name}!!!`;
    document.body.append(elemen);
    elemen.classList.add('great')

    //agregamos un elemento al documento y un style
    const h2 = document.createElement('h2')
    const div1 = document.createElement('div');
    div1.innerText = `I am ${age} years old`
    document.body.appendChild(h2);
    h2.appendChild(div1);
    div1.classList.add('age');

    //agregamos una imagen
    const image = new Image();
    image.src = Img;
    document.body.appendChild(image);

    //agregamos una nueva imageRendering
    const image2 = new Image();
    image2.src = Img2;
    document.body.appendChild(image2);



}