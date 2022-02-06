import { Nave } from "./Nave.js";

const Alcon = new Nave( "Alcon Milenario", 20, 15, 6 );
const F22 = new Nave( "F22", 16, 29, 8 );

//Nave 1
const nombre1 = document.getElementById('nombre1')
const damage1 = document.getElementById('damage1')
const hp1 = document.getElementById("HP1")
const velocidad1 = document.getElementById("velocidad1")
const btn_1 = document.getElementById('btn-1')

btn_1.addEventListener( 'click', ()=> {
    Alcon.dispararMisiles(F22)
    hp2.innerText = "";
    hp2.innerText = `HP: ${F22.hp}`;
})


//Nave 2
const nombre2 = document.getElementById('nombre2')
const damage2 = document.getElementById('damage2')
const hp2 = document.getElementById("HP2")
const velocidad2 = document.getElementById("velocidad2")
const btn_2 = document.getElementById('btn-2')

btn_2.addEventListener( 'click', ()=> {
    F22.dispararMisiles(Alcon)
    hp1.innerText = "";
    hp1.innerHTML = `HP: ${Alcon.hp}`
})

//Nave 1
nombre1.innerText = Alcon.nombre;
damage1.innerText = `Damage: ${Alcon.damage}`;
hp1.innerText = `HP: ${Alcon.hp}`
velocidad1.innerText = `Velocidad: ${Alcon.velocidad}`

//Nave2
nombre2.innerText = F22.nombre;
damage2.innerText = `Damage: ${F22.damage}`;
hp2.innerText = `HP: ${F22.hp}`
velocidad2.innerText = `Velocidad: ${F22.velocidad}`



console.log("el data funciona")