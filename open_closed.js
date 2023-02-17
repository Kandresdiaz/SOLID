class  animal {
    constructor(comida){
        this.comida=comida;// vivo o muerto :P
    }
    estado(){
        return `su mascota esta vivo`
    }
}

class cuadrupedo extends animal{
  
   
}

let comidita = new animal("pepas")
let perro = new cuadrupedo("4");

console.log(perro.estado());