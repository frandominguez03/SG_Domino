class Jugador
{
    constructor(nombre)
    {
        this.nombre = nombre;
        this.fichas = [];
    }


    /*
    * addFicha: Añade una ficha a la lista de fichas de un jugador
    * f: Ficha generada aleatoriamente de entre las disponibles
    */
    addFicha(f)
    {
        this.fichas.push(f);
    }

    /*
    * clearFichas: Limpiar la lista de fichas de un jugador
    */
    clearFichas()
    {
        this.fichas = [];
    }
}