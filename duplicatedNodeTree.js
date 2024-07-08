class Node {
    constructor(value, children = [], parent = null) {
        this.value = value;
        this.children = children;
        this.parent = parent;
    }
}

let g = new Node('G');
let y = new Node('Y', [g]);
let c = new Node('C', [y]);
let d = new Node('D');
let b = new Node('B', [c,d]);
let z = new Node('Z');
let a = new Node('A', [b,z]);

b.parent = a;
z.parent = a;
c.parent = b;
d.parent = b;
y.parent = c;
g.parent = y;

let arbol1 = a;
console.log(a);

let g2 = new Node('G');
let y2 = new Node('Y', [g2]);
let c2 = new Node('C', [y2]);
let d2 = new Node('D');
let b2 = new Node('B', [c2,d2]);
let z2 = new Node('Z');
let a2 = new Node('A', [b2,z2]);

b.parent = a2;
z.parent = a2;
c.parent = b2;
d.parent = b2;
y.parent = c2;
g.parent = y2;

let arbol2 = a2;
console.log(a2);

class Solucion {
    nodoEnArbolDuplicado(nodo, tree2) {
        //generar instrucciones
        let instrucciones = [];
        let curr = nodo;
        while (curr.parent !== null) {
            let val  = curr.value;
            curr = curr.parent;
            let index = curr.children.findIndex(c => c.value === val);
            instrucciones.push(index);
        }
        //encontrar el nodo
        return this.encontrarNodo(tree2, instrucciones);
    }

    encontrarNodo(tree2, instrucciones){
        let nodo = tree2;
        while (instrucciones.length) {
            let index = instrucciones.pop();
            nodo = tree2.children[index];
        }
        
        return nodo;
    }
}

console.log(new Solucion().nodoEnArbolDuplicado(d, arbol2));