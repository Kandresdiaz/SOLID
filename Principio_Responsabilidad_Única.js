class Libro{
    constructor(titulo,editorial){
        this.titulo=titulo;
        this.editorial=editorial;
    }

    obtenerTitulo(){
        return `Este es el Titulo del libro, ${this.titulo}`;
    }

    obtenerEditorial(){
        return `Esta es la editorial del libro, ${this.editorial}`;
    }
}

let harry = new Libro("harry","venito");


console.log(harry.obtenerTitulo());