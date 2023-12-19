import {Nodo} from './Nodo'
export class ListaDoble {
    constructor() {
      this.cabeza = null;
      this.cola = null;
      this.n = null;
      this.longitud = 0;
    }
  
    agregarEnCabeza(dato) {
      this.n = new Nodo(dato, this.cabeza, this.cola);
      if (!this.cola) {
        this.cola = this.cabeza = this.n;
      } else {
        this.n.siguiente = this.cabeza;
        this.cabeza.anterior = this.n;
        this.cabeza = this.n;
      }
      this.longitud++;
    }
  
    agregarEnCola(dato) {
      this.n = new Nodo(dato);
      if (!this.cabeza) {
        this.cabeza = this.cola = this.n;
      } else {
        this.n.anterior = this.cola;
        this.cola.siguiente = this.n;
        this.cola = this.n;
      }
      this.longitud++;
    }
  
    imprimirElementos() {
      let tmp = this.cabeza;
      while (tmp) {
        console.log(tmp.dato);
        tmp = tmp.siguiente;
      }
    }
  
    obtenerCabeza() {
      return this.cabeza ? this.cabeza.dato : null;
    }
  
    obtenerCola() {
      return this.cola ? this.cola.dato : null;
    }
  
    eliminarEnCola() {
      const num = this.cola ? this.cola.dato : null;
      if (this.cabeza) {
        if (this.cabeza === this.cola) {
          this.cabeza = this.cola = null;
          this.longitud--;
        } else {
          let tmp;
          for (tmp = this.cabeza; tmp.siguiente !== this.cola; tmp = tmp.siguiente);
          tmp.siguiente = null;
          this.cola = tmp;
          this.longitud--;
        }
      }
      return num;
    }
  
    eliminarEnCabeza() {
      const num = this.cabeza ? this.cabeza.dato : null;
      if (this.cabeza) {
        if (this.cabeza === this.cola) {
          this.cabeza = this.cola = null;
          this.longitud--;
        } else {
          this.cabeza = this.cabeza.siguiente;
          this.longitud--;
        }
      }
      return num;
    }
  
    eliminarEnIndice(indice) {
      if (indice >= this.longitud || indice < 0) {
        throw new Error("Indice fuera de rango");
      } else {
        let num = null;
        if (indice >= 0 && indice <= this.longitud - 1) {
          if (this.cabeza) {
            if (this.cabeza === this.cola && indice === 0) {
              num = this.cabeza.dato;
              this.cabeza = this.cola = null;
              this.longitud--;
            } else if (indice === 0) {
              num = this.cabeza.dato;
              this.cabeza = this.cabeza.siguiente;
              this.longitud--;
            } else {
              let prd, tmp;
              let contador = 1;
              for (prd = this.cabeza, tmp = this.cabeza.siguiente; tmp && contador !== indice; tmp = tmp.siguiente, prd = prd.siguiente, contador++);
              if (tmp) {
                num = tmp.dato;
                prd.siguiente = tmp.siguiente;
                tmp.anterior = prd;
                this.longitud--;
              }
              if (tmp === this.cola) {
                num = tmp.dato;
                this.cola = prd;
                this.cola.anterior = this.cola.anterior;
                this.longitud--;
              }
            }
          }
        }
        return num;
      }
    }
  
    eliminar(dato, b) {
      let num = null;
      if (this.cabeza) {
        if (!b) {
          if (this.cabeza === this.cola && dato === this.cabeza.dato) {
            num = this.cabeza.dato;
            this.cabeza = this.cola = null;
            this.longitud--;
          } else if (dato === this.cabeza.dato) {
            num = this.cabeza.dato;
            this.cabeza = this.cabeza.siguiente;
            this.longitud--;
          } else {
            let prd, tmp;
            for (prd = this.cabeza, tmp = this.cabeza.siguiente; tmp && tmp.dato !== dato; prd = prd.siguiente, tmp = tmp.siguiente);
            if (tmp) {
              num = tmp.dato;
              tmp.anterior = prd;
              prd.siguiente = tmp.siguiente;
              this.longitud--;
            }
            if (tmp === this.cola) {
              num = tmp.dato;
              this.cola = prd;
              this.cola.anterior = this.cola.anterior;
              this.longitud--;
            }
          }
        } else {
          let prd = null, tmp;
          for (tmp = this.cabeza; tmp; tmp = tmp.siguiente) {
            if (tmp.dato === dato) {
              if (prd) {
                num = tmp.dato;
                tmp.anterior = prd;
                prd.siguiente = tmp.siguiente;
                this.longitud--;
              } else {
                this.cabeza = tmp.siguiente;
                num = tmp.dato;
                this.longitud--;
              }
            }
            prd = tmp;
          }
        }
      }
      return num;
    }
  
    obtenerDatoIndice(indice) {
      if (indice >= this.longitud || indice < 0) {
        throw new Error("Indice fuera de rango");
      } else {
        let num = null;
        if (indice >= 0 && indice <= this.longitud - 1) {
          if (this.cabeza) {
            if (this.cabeza === this.cola && indice === 0) {
              num = this.cabeza.dato;
            } else {
              let prd;
              let contador = 0;
              for (prd = this.cabeza; contador !== indice; prd = prd.siguiente, contador++);
              num = prd.dato;
            }
          }
        }
        return num;
      }
    }
  
    asignarEnIndice(dato, indice) {
      if (indice >= this.longitud || indice < 0) {
        throw new Error("Indice fuera de rango");
      } else {
        if (indice >= 0 && indice <= this.longitud - 1) {
          if (this.cabeza) {
            if (this.cabeza === this.cola && indice === 0) {
              this.cabeza.dato = dato;
            } else {
              let prd;
              let contador = 0;
              for (prd = this.cabeza; contador !== indice; prd = prd.siguiente, contador++);
              prd.dato = dato;
            }
          }
        }
      }
    }
  
    asignar(dato, nuevoDato, b) {
      if (this.cabeza) {
        if (!b) {
          let tmp;
          for (tmp = this.cabeza; tmp.siguiente && tmp.dato !== dato; tmp = tmp.siguiente);
          tmp.dato = nuevoDato;
          tmp.anterior = tmp.anterior;
        } else {
          let tmp;
          for (tmp = this.cabeza; tmp.siguiente; tmp = tmp.siguiente) {
            if (tmp.dato === dato) {
              tmp.dato = nuevoDato;
              tmp.anterior = tmp.anterior;
            }
          }
          if (tmp.dato === dato) {
            tmp.dato = nuevoDato;
            tmp.anterior = tmp.anterior;
          }
        }
      }
    }
  
    longitud() {
      return this.longitud;
    }
  
    esVacia() {
      return !this.cabeza && this.longitud === 0;
    }
  }