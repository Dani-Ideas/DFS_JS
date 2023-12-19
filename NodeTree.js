import { ListaDoble } from './ListaDoble';


class NodeTree {
    constructor(valueInput, tagInput = '') {
        this.value = valueInput;
        this.lefth = null;
        this.rigth = null;
        this.father=null;
        this.tag = tagInput || `a${NodeTree.standarTag++}`;
        this.hijos = new ListaDoble();
        this.hijos.agregarEnCabeza(this.lefth);
        this.hijos.agregarEnCabeza(this.rigth);

        // estoy tratando de mantener encapsulado father
        this.addFather = function (fatherInput) {
            // Comprobación de tipo en tiempo de ejecución
            if (!(fatherInput instanceof NodeTree)) {
                throw new Error('El padre debe ser una instancia de NodeTree');
            }else{
                this.father = fatherInput;
            }
        };
    }

    addChild(...hijosInput) {
        for (const hijo of hijosInput) {
            // Comprobación de tipo en tiempo de ejecución
            if (!(hijo instanceof NodeTree)) {
                throw new Error('Los hijos deben ser instancias de NodeTree');
            }else{
                this.hijos.agregarEnCabeza(hijo);
                hijo.addFather(this);
                this.setRithLefth();
            }
        }
    }

    setRithLefth() {
        this.rigth = this.hijos.obtenerDatoIndice(0);
        this.lefth = this.hijos.obtenerDatoIndice(this.hijos.longitud - 1);
    }
}