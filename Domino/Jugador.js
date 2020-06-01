class Jugador
{
    /**
     * @description Constructor de la clase Jugador
     * @param {String} nombre 
     * @param {int} numJugador 
     * @description El parámetro numJugador decidirá en que lugar de la mesa se sienta el jugador
     */
    constructor(nombre,numJugador)
    {
        this.nombre = nombre;
        this.fichas = [];
        this.numJugador = numJugador
    }

    /**
     * @description Añade una ficha a la lista de fichas del Jugador
     * @param {Ficha} f 
     */
    addFicha(f)
    {
        this.fichas.push(f);
    }

    /**
     * @description Limpia la lista de fichas de un Jugador
     */
    clearFichas()
    {
        this.fichas = [];
    }

    /**
     * @description Dispone las fichas de un jugador en el lugar correspondiente de la mesa en función de su numJugador
     */
    colocarFichas()
    {
        if(this.numJugador == 1)
        {   var posZ = 1.5
            for(var i = 0; i < this.fichas.length; i++)
            {
                this.fichas[i].rotation.y = Math.PI/2
                this.fichas[i].position.y = 11;
                this.fichas[i].position.z = posZ;
                this.fichas[i].position.x = 5.5;
                
                posZ -= 1
            }
        }

        if(this.numJugador == 2)
        {
            var posZ = 1.5
            for(var i = 0; i < this.fichas.length; i++)
            {
                this.fichas[i].rotation.y = -Math.PI/2
                this.fichas[i].position.y = 11;
                this.fichas[i].position.z = posZ;
                this.fichas[i].position.x = -5.5;
                
                posZ -= 1
            }
        }

    }
}