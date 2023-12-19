
export class Nodo {
    constructor(dato, siguiente = null, anterior = null) {
      this.dato = dato;
      this.siguiente = siguiente;
      this.anterior = anterior;
    }
  
    getDato() {
      return this.dato;
    }
  
    setDato(dato) {
      this.dato = dato;
    }
  
    getSiguiente() {
      return this.siguiente;
    }
  
    setSiguiente(siguiente) {
      this.siguiente = siguiente;
    }
  
    getAnterior() {
      return this.anterior;
    }
  
    setAnterior(anterior) {
      this.anterior = anterior;
    }
  }