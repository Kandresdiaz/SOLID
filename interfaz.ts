interface nada {
    nadar(): void;
}
  
interface vuela {
    volar(): void;
}
  
interface camina {
    caminar(): void;
}

interface jugueterar {
pelota (): void;

}

class Perro implements nada, camina {
    nadar() {
      // Lógica para hacer que el perro nade
    }
  
    caminar() {
      // Lógica para hacer que el perro camine
    }

    pelota(){
        //jueguetea tambien...
    }
}


