class Cola {
    constructor() {
        this.cola = [];
    }

    enqueue(item) {
        if (!this.cola.length) {
            this.cola.push(item);
        } else {
            let ingresado = false;
            for (let i = 0; i < this.cola.length; i++) {
                let peso = item[1];
                if (peso < this.cola[i][1]) {
                    this.cola.splice(i, 0, item);
                    ingresado = true;
                    break;
                }
            }
            if (!ingresado) {
                this.cola.push(item);
            }
        }
    }

    dequeue() {
        return this.cola.shift();
    }
}

let cola = new Cola();
console.log(cola);
cola.enqueue(['SEA', 1]);
cola.enqueue(['PDX', 10]);
cola.enqueue(['LA', 0]);
cola.enqueue(['SF', 5]);

class Grafo {
    constructor() {
        this.nodos = [];
        this.lista = {};
    }

    crearNodo(nodo) {
        this.nodos.push(nodo);
        this.lista[nodo] = [];
    }

    crearArista(nodo1, nodo2, peso) {
        this.lista[nodo1].push({nodo: nodo2, peso});
        this.lista[nodo2].push({nodo: nodo1, peso});
    }

    caminoMasCorto(salida, destino) {
        let tiempos = {};
        let ultimas = {};
        let cp = new Cola();

        this.nodos.forEach(nodo => {
            tiempos[nodo] = Infinity;
        });
        tiempos[salida] = 0;

        cp.enqueue([salida,0]);

        while (cp.cola.length) {
            let item = cp.dequeue();
            let nodo = item[0];
            this.lista[nodo].forEach(vecino => {
                let tiempo = tiempos[nodo] + vecino.peso;
                if (tiempo < tiempos[vecino.nodo]) {
                    tiempos[vecino.nodo] = tiempo;
                    ultimas[vecino.nodo] = nodo;
                    cp.enqueue([vecino.nodo, tiempo]);
                }
            });
        }

        let ruta = [destino];
        let ultima = destino;
        while (ultima !== salida) {
            ruta.unshift(ultimas[ultima]);
            ultima = ultimas[ultima];
        }
        return `La ruta mas corta es ${ruta} con el tiempo ${tiempos[destino]}`;
    }
}

let grafo = new Grafo();
grafo.crearNodo('Seattle');
grafo.crearNodo('Vancouver');
grafo.crearNodo('Portland');
grafo.crearNodo('San Francisco');
grafo.crearNodo('Las Vegas');
grafo.crearNodo('Los Angeles');
grafo.crearNodo('Salt Lake City');

grafo.crearArista('Vancouver', 'Seattle', 3);
grafo.crearArista('Seattle', 'Portland', 3);
grafo.crearArista('Seattle', 'Salt Lake City', 12);
grafo.crearArista('Portland', 'Salt Lake City', 11);
grafo.crearArista('Portland', 'San Francisco', 9);
grafo.crearArista('Portland', 'Los Angeles', 14);
grafo.crearArista('San Francisco', 'Los Angeles', 5);
grafo.crearArista('San Francisco', 'Las Vegas', 8);
grafo.crearArista('Los Angeles', 'Las Vegas', 4);
grafo.crearArista('Salt Lake City', 'Las Vegas', 6);

//console.log(JSON.stringify(grafo, null, 2));
console.log(grafo.caminoMasCorto('Vancouver', 'Las Vegas'));