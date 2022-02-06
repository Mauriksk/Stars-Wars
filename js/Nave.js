

export class Nave {
    constructor(nombre, hp, velocidad, damage){
        this.nombre = nombre;
        this.hp = hp;
        this.velocidad = velocidad;
        this.damage = damage
    }

    dispararMisiles(objetivo) {
        return  objetivo.hp = objetivo.hp - this.damage, console.log(objetivo.hp);
    }
}






