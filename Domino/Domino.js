class Domino extends THREE.Object3D
{
    constructor()
    {
        super();
        // Array con las mitades
        this.geometriasMitades = new Mitad();
        this.caja = [];
        this.generarFichas();

        this.jugador_1 = new Jugador("Miguel");
        this.jugador_2 = new Jugador("Francisco");

        var pos = 1

        for (var i=0; i<this.caja.length; i++)
        {
            this.caja[i].position.z = pos;
            this.add(this.caja[i]);
            pos = pos + 1;
        }

        this.repartirFichas();
            
    }

    /*
    * generarFichas: Función que generar todas las fichas que habrá disponibles en la caja
    */
    generarFichas()
    {
        this.caja.push(new Ficha(0,0,this.geometriasMitades));
        this.caja.push(new Ficha(0,1,this.geometriasMitades));
        this.caja.push(new Ficha(0,2,this.geometriasMitades));
        this.caja.push(new Ficha(0,3,this.geometriasMitades));
        this.caja.push(new Ficha(0,4,this.geometriasMitades));
        this.caja.push(new Ficha(0,5,this.geometriasMitades));
        this.caja.push(new Ficha(0,6,this.geometriasMitades));

        this.caja.push(new Ficha(1,1,this.geometriasMitades));
        this.caja.push(new Ficha(1,2,this.geometriasMitades));
        this.caja.push(new Ficha(1,3,this.geometriasMitades));
        this.caja.push(new Ficha(1,4,this.geometriasMitades));
        this.caja.push(new Ficha(1,5,this.geometriasMitades));
        this.caja.push(new Ficha(1,6,this.geometriasMitades));

        this.caja.push(new Ficha(2,2,this.geometriasMitades));
        this.caja.push(new Ficha(2,3,this.geometriasMitades));
        this.caja.push(new Ficha(2,4,this.geometriasMitades));
        this.caja.push(new Ficha(2,5,this.geometriasMitades));
        this.caja.push(new Ficha(2,6,this.geometriasMitades));

        this.caja.push(new Ficha(3,3,this.geometriasMitades));
        this.caja.push(new Ficha(3,4,this.geometriasMitades));
        this.caja.push(new Ficha(3,5,this.geometriasMitades));
        this.caja.push(new Ficha(3,6,this.geometriasMitades));

        this.caja.push(new Ficha(4,4,this.geometriasMitades));
        this.caja.push(new Ficha(4,5,this.geometriasMitades));
        this.caja.push(new Ficha(4,6,this.geometriasMitades));

        this.caja.push(new Ficha(5,5,this.geometriasMitades));
        this.caja.push(new Ficha(5,6,this.geometriasMitades));

        this.caja.push(new Ficha(6,6,this.geometriasMitades));

    }


    /*
    * repartirFichas: Función que reparte aleatoriamente las fichas a los usuarios
    */
    repartirFichas()
    {
        this.jugador_1.clearFichas();
        while(this.jugador_1.fichas.length < 7)
        {
            this.caja = shuffle(this.caja);
            this.jugador_1.addFicha(this.caja[this.caja.length]);
            this.caja.pop();
        }

        this.jugador_2.clearFichas();
        while(this.jugador_2.fichas.length < 7)
        {
            this.caja = shuffle(this.caja);
            this.jugador_2.addFicha(this.caja[this.caja.length]);
            this.caja.pop();
        }
    }
}

/*
* shuffle: Función que mezcla un array
*/
function shuffle(array)
{
    var currentIndex = array.length, tmp, randomIndex;

    while(0 != currentIndex)
    {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        
        tmp = array[currentIndex];
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = tmp;
    }

    return array;
}