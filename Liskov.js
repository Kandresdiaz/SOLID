class Computadora {
    marca;
    modelo;
  
    constructor(marca, modelo) {
      this.marca = marca;
      this.modelo = modelo;
    }
  
    obtenerMarca() {
      return this.marca;
    }
  
    obtenerModelo() {
      return this.modelo;
    }
  
    guardarMarca(marca) {
      this.marca = marca;
    }
  
    guardarModelo(modelo) {
      this.modelo = modelo;
    }
  }
  
  class ComputadoraDell extends Computadora {
     
  }
  