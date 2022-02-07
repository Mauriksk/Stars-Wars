export class Nave {
    constructor(nombre, hp, velocidad, damage) {
        this.nombre = nombre;
        this.hp = hp;
        this.velocidad = velocidad;
        this.damage = damage
    }

    dispararMisiles(objetivo) {
        let vida = objetivo.hp - this.damage;
        if (vida <= 0) {
            objetivo.hp = 0;
        } else {
            objetivo.hp = vida
        }


    }
}