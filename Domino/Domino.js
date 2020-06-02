class Domino extends THREE.Object3D
{
    
    /**
     * @description Constructor de la clase domino
     */
    constructor()
    {
        super();
        // Array con las mitades
        this.geometriasMitades = new Mitad();
        this.caja = [];

        //Matriz que controlará la posición de las fichas
        this.TAM_MAX_CASILLAS = 20;
        this.casillas = new Array(this.TAM_MAX_CASILLAS);
        for(var i=0; i < this.TAM_MAX_CASILLAS; i++)
            this.casillas[i] = new Array(this.TAM_MAX_CASILLAS);

        this.inicializarCasillas();
        //Este array estará formado por tuplas de valores que corresponderan al valor y la componente i , j de la matriz, estará inicializada a (TAM_MAX_CASILLAS/2,TAM_MAX_CASILLAS/2)
        this.casillasDisponibles = new Array();
        this.casillasDisponibles.push(new THREE.Vector3(-1,this.TAM_MAX_CASILLAS/2,this.TAM_MAX_CASILLAS/2));

        this.generarFichas();
        this.jugadores = new Array();
        this.jugadores.push(new Jugador("Miguel",1));
        this.jugadores.push(new Jugador("Francisco",2));

        this.jugador_actual = 0;

        for (var i=0; i<this.caja.length; i++)
            this.add(this.caja[i]);          

        this.repartirFichas();
        this.jugadores[0].colocarFichas();
        this.jugadores[1].colocarFichas();     
    }

    /**
     * @description Se crean todas las fichas del juego y se añaden a la caja
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

    /**
     * @description Función que reparte las fichas aleatoriamente entre los jugadores
     */
    repartirFichas()
    {

        for(var i = 0; i < this.jugadores.length; i++)
        {
            this.jugadores[i].clearFichas();
            while(this.jugadores[i].fichas.length < 7)
            {
                this.caja = shuffle(this.caja);
                this.jugadores[i].addFicha(this.caja[this.caja.length-1]);
                this.caja.pop();
            }
        }

        //Quitamos de la escena las fichas que no hayan sido repartidas
        for(var i = 0; i < this.caja.length; i++)
            this.remove(this.caja[i]); 
    }

    /**
     * @description Función que inicializa la matriz a NaN
     */
    inicializarCasillas()
    {
        for(var i=0; i < this.TAM_MAX_CASILLAS; i++)
            for(var j=0; j < this.TAM_MAX_CASILLAS; j++)
                this.casillas[i][j]= 9;
    }

    /**
     * @description Cambio de turno de jugador actual al siguiente
     */
    cambioDeTurno()
    {
        this.jugador_actual =  (this.jugador_actual + 1) % 2;
    }

    /**
     * @description Esta función colocará la ficha que se pasa por parámetro en su posición en el tablero y llamará a la función de igual nombre 
     * @param {Ficha} f Ficha a jugar
     * @returns True si se ha colocado correctamente o False si ha ocurrido algún problema 
     */
    jugarFicha(f)
    {
        console.log("Jugando la ficha")
        console.log(f.valorSup);
        console.log(f.valorInf);
        var resultado = this.comprobarFicha(f)
        if( resultado != false)
        {
            //Quitamos la casilla que se va a ocupar de la lista de casillas disponibles
            var pos = this.casillasDisponibles.indexOf(resultado);
            this.casillasDisponibles.splice(pos,1);
            //Escribo la casilla añadida en la matriz de casillas
            if(resultado.x == f.valorSup && resultado.x != -1)
            {
                //Si la coordenada J es > 10 se avanza hacia la derecha en la matriz
                if(resultado.z > 10 && resultado.y < 15)
                {
                    //Si la j es < 15 se avanza a la derecha únicamente
                    if(resultado.z < 15)
                    {
                        this.casillas[resultado.y][resultado.z] = f.valorSup;
                        this.casillas[resultado.y][resultado.z+1] = f.valorInf;
                        this.casillasDisponibles.push(new THREE.Vector3(f.valorInf,resultado.y,resultado.z+2));
                    }
                    else if (resultado.y < 15)//Si la j <= 15 se avanza hacia arriba en el tablero
                    {
                        this.casillas[resultado.y][resultado.z] = f.valorSup;
                        this.casillas[resultado.y+1][resultado.z] = f.valorInf;
                        this.casillasDisponibles.push(new THREE.Vector3(f.valorInf,resultado.y+2,resultado.z));
                    }else if (resultado.y >= 15) //Si la J >= 15 se cierra el rectángulo
                    {
                        this.casillas[resultado.y][resultado.z] = f.valorSup;
                        this.casillas[resultado.y][resultado.z-1] = f.valorInf;
                        this.casillasDisponibles.push(new THREE.Vector3(f.valorInf,resultado.y,resultado.z-2));
                    }
                    
                }else  //En caso contrario se avanza hacia la izquierda
                {
                    if(resultado.z > 5 && resultado.y < 15)
                    {
                        this.casillas[resultado.y][resultado.z] = f.valorSup;
                        this.casillas[resultado.y][resultado.z-1] = f.valorInf;
                        this.casillasDisponibles.push(new THREE.Vector3(f.valorInf,resultado.y,resultado.z-2));
                    }
                    else if (resultado.y < 15)
                    {
                        this.casillas[resultado.y][resultado.z] = f.valorSup;
                        this.casillas[resultado.y+1][resultado.z] = f.valorInf;
                        this.casillasDisponibles.push(new THREE.Vector3(f.valorInf,resultado.y+2,resultado.z));
                    }else if (resultado.y >= 15) //Si la J >= 15 se cierra el rectángulo
                    {
                        this.casillas[resultado.y][resultado.z] = f.valorSup;
                        this.casillas[resultado.y][resultado.z+1] = f.valorInf;
                        this.casillasDisponibles.push(new THREE.Vector3(f.valorInf,resultado.y,resultado.z+2));
                    }

                }
            }
            else if(resultado.x == f.valorInf && resultado.x != -1)
            {
                //Si la coordenada J es > 10 se avanza hacia la derecha en la matriz
                if(resultado.z > 10)
                {
                    //Si la j es < 15 se avanza a la derecha únicamente
                    if(resultado.z < 15)
                    {
                        this.casillas[resultado.y][resultado.z] = f.valorInf;
                        this.casillas[resultado.y][resultado.z+1] = f.valorSup;
                        this.casillasDisponibles.push(new THREE.Vector3(f.valorSup,resultado.y,resultado.z+2));
                    }
                    else if (resultado.y < 15)
                    {
                        this.casillas[resultado.y][resultado.z] = f.valorInf;
                        this.casillas[resultado.y+1][resultado.z] = f.valorSup;
                        this.casillasDisponibles.push(new THREE.Vector3(f.valorSup,resultado.y+2,resultado.z));
                    }else if (resultado.y >= 15) //Si la J >= 15 se cierra el rectángulo
                    {
                        this.casillas[resultado.y][resultado.z] = f.valorInf;
                        this.casillas[resultado.y][resultado.z-1] = f.valorSup;
                        this.casillasDisponibles.push(new THREE.Vector3(f.valorSup,resultado.y,resultado.z-2));
                    }
                    
                }else //En caso contrario se avanza hacia la izquierda
                {
                    if(resultado.z > 5)
                    {
                        this.casillas[resultado.y][resultado.z] = f.valorInf;
                        this.casillas[resultado.y][resultado.z-1] = f.valorSup;
                        this.casillasDisponibles.push(new THREE.Vector3(f.valorSup,resultado.y,resultado.z-2));
                    }

                    else if (resultado.y < 15)
                    {
                        this.casillas[resultado.y][resultado.z] = f.valorInf;
                        this.casillas[resultado.y+1][resultado.z] = f.valorSup;
                        this.casillasDisponibles.push(new THREE.Vector3(f.valorSup,resultado.y+2,resultado.z)); 
                    }

                    else if (resultado.y >= 15) //Si la J >= 15 se cierra el rectángulo
                    {
                        this.casillas[resultado.y][resultado.z] = f.valorInf;
                        this.casillas[resultado.y][resultado.z+1] = f.valorSup;
                        this.casillasDisponibles.push(new THREE.Vector3(f.valorSup,resultado.y,resultado.z+2));
                    }

                }
            } 
            
            else if(resultado.x == -1)    // Si es -1 significa que es la primera
            {
                this.casillas[resultado.y][resultado.z] = f.valorInf;
                this.casillas[resultado.y][resultado.z+1] = f.valorSup;
                this.casillasDisponibles.push(new THREE.Vector3(f.valorSup,resultado.y,resultado.z+2));
                this.casillasDisponibles.push(new THREE.Vector3(f.valorInf,resultado.y,resultado.z-1));
                console.log(this.casillasDisponibles);
            }

            this.jugadores[this.jugador_actual].jugarFicha(f);
            this.situarFichaEnTablero(f, resultado);

            console.log(this.casillas);
            //console.log(this.jugadores[this.jugador_actual].fichas)
            console.log(this.casillasDisponibles);
            return true;
        }
        else
            return false;

    }

    /**
     * @description Esta función realizará la animación de colocar la ficha en el tablero
     * @param {Ficha} ficha La ficha que se va a posicionar
     * @param {Vector3} resultado La posición en la que se va a posicionar
     */
    situarFichaEnTablero(ficha, resultado)
    {
        var that = this;
        console.log(resultado);
        
        // El origen es la posición actual de la ficha
        this.origen = {x: ficha.position.x, y: ficha.position.y, z: ficha.position.z, rotationX: 0.0, rotationY: Math.PI/2};
        
        // El primer destino es para levantar y girar la ficha
        this.destino = {y: 12.0, rotationX: Math.PI/2, rotationY: 0.0};

        var movimiento = new TWEEN.Tween(this.origen).to(this.destino, 1000)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onUpdate(function() {
                ficha.rotation.x = -that.origen.rotationX;
                ficha.rotation.y = that.origen.rotationY;
                ficha.position.y = that.origen.y;
            });
        
        // Origen, igual que el destino anterior
        this.origen2 = {x: 5.5, y: 12.0, z: 2.5, rotationY: Math.PI};

        // Destino, el tablero. Depende de dónde vayamos a colocar la ficha. De momento está hardcodeado.
        this.destino2 = {x: 0.0, y: 9.8, z: 0.0, rotationY: 0.0};
        
        var movimiento2 = new TWEEN.Tween(this.origen2).to(this.destino2, 2500)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onUpdate(function() {
                ficha.position.x = that.origen2.x;
                ficha.position.y = that.origen2.y;
                ficha.position.z = that.origen2.z;
            });
        
        movimiento.chain(movimiento2);
        movimiento.start();

        return true;
    }

    /**
     * @description Se comprueba si la ficha que se pretende jugar es válida (su valor superior o inferior coincide con el de una casilla válida)
     * @param {Ficha} f 
     * @returns En caso de que sea una casilla válida devuelve la casilla (en caso de que haya varias devuelve la primera que encuentre) en caso de que no sea válida devuelve false
     */
    comprobarFicha(f)
    {

        for(var i = 0; i < this.casillasDisponibles.length; i++)
        {
            if(f.valorInf == this.casillasDisponibles[i].x || f.valorSup == this.casillasDisponibles[i].x || this.casillasDisponibles[i].x == -1)
                return this.casillasDisponibles[i];

        }

        return false;
    }

    /**
     * @description El método update
     */
    update() {
        TWEEN.update();
    }
}

/**
 * @description Función que recibe un array como parámetro y lo mezcla
 * @param {Array} array 
 * @returns Array mezclado
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
