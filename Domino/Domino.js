class Domino extends THREE.Object3D
{
    
    /**
     * @description Constructor de la clase domino
     */
    constructor(jugador1, jugador2)
    {
        super();
        // Array con las mitades
        this.geometriasMitades = new Mitad();
        this.caja = [];

        this.estadoJuego = true; //true iniciado false terminado
        this.puedeJugar = true;

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
        this.jugadores.push(new Jugador(jugador1,1));
        this.jugadores.push(new Jugador(jugador2,2));

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

        //Lista de fichas para pruebas
        
        this.caja.push(new Ficha(2,1,this.geometriasMitades));

        this.caja.push(new Ficha(1,1,this.geometriasMitades));
        this.caja.push(new Ficha(1,1,this.geometriasMitades));
        this.caja.push(new Ficha(1,1,this.geometriasMitades));
        this.caja.push(new Ficha(1,1,this.geometriasMitades));
        this.caja.push(new Ficha(1,1,this.geometriasMitades));
        this.caja.push(new Ficha(1,1,this.geometriasMitades));
        this.caja.push(new Ficha(1,1,this.geometriasMitades));
        this.caja.push(new Ficha(1,1,this.geometriasMitades));
        this.caja.push(new Ficha(1,1,this.geometriasMitades));
        this.caja.push(new Ficha(1,1,this.geometriasMitades));
        this.caja.push(new Ficha(1,1,this.geometriasMitades));
        this.caja.push(new Ficha(1,1,this.geometriasMitades));
        this.caja.push(new Ficha(1,1,this.geometriasMitades));

                
        // this.caja.push(new Ficha(4,2,this.geometriasMitades));
        // this.caja.push(new Ficha(4,4,this.geometriasMitades));
        // this.caja.push(new Ficha(4,4,this.geometriasMitades));
        // this.caja.push(new Ficha(4,4,this.geometriasMitades));
        // this.caja.push(new Ficha(4,4,this.geometriasMitades));
        // this.caja.push(new Ficha(4,4,this.geometriasMitades));
        // this.caja.push(new Ficha(4,4,this.geometriasMitades));
        // this.caja.push(new Ficha(4,4,this.geometriasMitades));
        // this.caja.push(new Ficha(4,4,this.geometriasMitades));
        // this.caja.push(new Ficha(4,4,this.geometriasMitades));
        // this.caja.push(new Ficha(4,4,this.geometriasMitades));
        // this.caja.push(new Ficha(4,4,this.geometriasMitades));
        // this.caja.push(new Ficha(4,4,this.geometriasMitades));





        //Todas las fichas del juego
        // this.caja.push(new Ficha(0,0,this.geometriasMitades));
        // this.caja.push(new Ficha(0,1,this.geometriasMitades));
        // this.caja.push(new Ficha(0,2,this.geometriasMitades));
        // this.caja.push(new Ficha(0,3,this.geometriasMitades));
        // this.caja.push(new Ficha(0,4,this.geometriasMitades));
        // this.caja.push(new Ficha(0,5,this.geometriasMitades));
        // this.caja.push(new Ficha(0,6,this.geometriasMitades));

        // this.caja.push(new Ficha(1,1,this.geometriasMitades));
        // this.caja.push(new Ficha(1,2,this.geometriasMitades));
        // this.caja.push(new Ficha(1,3,this.geometriasMitades));
        // this.caja.push(new Ficha(1,4,this.geometriasMitades));
        // this.caja.push(new Ficha(1,5,this.geometriasMitades));
        // this.caja.push(new Ficha(1,6,this.geometriasMitades));

        // this.caja.push(new Ficha(2,2,this.geometriasMitades));
        // this.caja.push(new Ficha(2,3,this.geometriasMitades));
        // this.caja.push(new Ficha(2,4,this.geometriasMitades));
        // this.caja.push(new Ficha(2,5,this.geometriasMitades));
        // this.caja.push(new Ficha(2,6,this.geometriasMitades));

        // this.caja.push(new Ficha(3,3,this.geometriasMitades));
        // this.caja.push(new Ficha(3,4,this.geometriasMitades));
        // this.caja.push(new Ficha(3,5,this.geometriasMitades));
        // this.caja.push(new Ficha(3,6,this.geometriasMitades));

        // this.caja.push(new Ficha(4,4,this.geometriasMitades));
        // this.caja.push(new Ficha(4,5,this.geometriasMitades));
        // this.caja.push(new Ficha(4,6,this.geometriasMitades));

        // this.caja.push(new Ficha(5,5,this.geometriasMitades));
        // this.caja.push(new Ficha(5,6,this.geometriasMitades));

        // this.caja.push(new Ficha(6,6,this.geometriasMitades));

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
        var resultado = this.comprobarFicha(f);
        if(resultado != false)
        {
            //Quitamos la casilla que se va a ocupar de la lista de casillas disponibles
            var pos = this.casillasDisponibles.indexOf(resultado);
            this.casillasDisponibles.splice(pos,1);
            //Escribo la casilla añadida en la matriz de casillas
            if(resultado.x == f.valorSup && resultado.x != -1)
            {
                //Si la coordenada J es > 10 se avanza hacia la derecha en la matriz
                if(resultado.z >= 10 )
                {
                    //Si la j es < 15 se avanza a la derecha únicamente
                    if(resultado.z < 15 && resultado.y == 10)
                    {
                        this.casillas[resultado.y][resultado.z] = f.valorSup;
                        this.casillas[resultado.y][resultado.z+1] = f.valorInf;
                        this.casillasDisponibles.push(new THREE.Vector3(f.valorInf,resultado.y,resultado.z+2));
                    }
                    else if (resultado.y < 16)//Si la j <= 15 se avanza hacia arriba en el tablero
                    {
                        this.casillas[resultado.y][resultado.z] = f.valorSup;
                        this.casillas[resultado.y+1][resultado.z] = f.valorInf;
                        this.casillasDisponibles.push(new THREE.Vector3(f.valorInf,resultado.y+2,resultado.z));
                    }
                    else if(resultado.z >= 10 && resultado.y == 16 )
                    {
                        if(this.casillas[resultado.y][resultado.z-1] == 9)
                        {
                            this.casillas[resultado.y][resultado.z] = f.valorSup;
                            this.casillas[resultado.y][resultado.z-1] = f.valorInf;
                            this.casillasDisponibles.push(new THREE.Vector3(f.valorInf,resultado.y,resultado.z-2));
                        }else
                        {
                            this.casillas[resultado.y][resultado.z] = f.valorSup;
                            this.casillas[resultado.y][resultado.z+1] = f.valorInf;
                            this.casillasDisponibles.push(new THREE.Vector3(f.valorInf,resultado.y,resultado.z+2));
                        }

                    }
                    else if (resultado.y == 16) //Si la J >= 15 se cierra el rectángulo
                    {
                        this.casillas[resultado.y][resultado.z] = f.valorSup;
                        this.casillas[resultado.y][resultado.z-1] = f.valorInf;
                        this.casillasDisponibles.push(new THREE.Vector3(f.valorInf,resultado.y,resultado.z-2));
                    }
                    
                }
                else  //En caso contrario se avanza hacia la izquierda
                {
                    if(resultado.z > 5 && resultado.y == 10)
                    {
                        this.casillas[resultado.y][resultado.z] = f.valorSup;
                        this.casillas[resultado.y][resultado.z-1] = f.valorInf;
                        this.casillasDisponibles.push(new THREE.Vector3(f.valorInf,resultado.y,resultado.z-2));
                    }
                    else if (resultado.y < 16)
                    {
                        this.casillas[resultado.y][resultado.z] = f.valorSup;
                        this.casillas[resultado.y+1][resultado.z] = f.valorInf;
                        this.casillasDisponibles.push(new THREE.Vector3(f.valorInf,resultado.y+2,resultado.z));  
                    }
                    else if(resultado.z <= 10 && resultado.y == 16 )
                    {
                        if(this.casillas[resultado.y][resultado.z+1] == 9)
                        {
                            this.casillas[resultado.y][resultado.z] = f.valorSup;
                            this.casillas[resultado.y][resultado.z+1] = f.valorInf;
                            this.casillasDisponibles.push(new THREE.Vector3(f.valorInf,resultado.y,resultado.z+2));
                        }else
                        {
                            this.casillas[resultado.y][resultado.z] = f.valorSup;
                            this.casillas[resultado.y][resultado.z-1] = f.valorInf;
                            this.casillasDisponibles.push(new THREE.Vector3(f.valorInf,resultado.y,resultado.z-2));
                        }

                    }
                    else if (resultado.y == 16) //Si la J >= 15 se cierra el rectángulo
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
                if(resultado.z >= 10)
                {
                    //Si la j es < 15 se avanza a la derecha únicamente
                    if(resultado.z < 15 && resultado.y == 10)
                    {
                        this.casillas[resultado.y][resultado.z] = f.valorInf;
                        this.casillas[resultado.y][resultado.z+1] = f.valorSup;
                        this.casillasDisponibles.push(new THREE.Vector3(f.valorSup,resultado.y,resultado.z+2));
                    }
                    else if (resultado.y < 16)
                    {
                        this.casillas[resultado.y][resultado.z] = f.valorInf;
                        this.casillas[resultado.y+1][resultado.z] = f.valorSup;
                        this.casillasDisponibles.push(new THREE.Vector3(f.valorSup,resultado.y+2,resultado.z)); 
                    }
                    else if(resultado.z >= 10 && resultado.y == 16 )
                    {
                        if(this.casillas[resultado.y][resultado.z-1] == 9)
                        {
                            this.casillas[resultado.y][resultado.z] = f.valorInf;
                            this.casillas[resultado.y][resultado.z-1] = f.valorSup;
                            this.casillasDisponibles.push(new THREE.Vector3(f.valorSup,resultado.y,resultado.z-2));
                        }else
                        {
                            this.casillas[resultado.y][resultado.z] = f.valorInf;
                            this.casillas[resultado.y][resultado.z+1] = f.valorSup;
                            this.casillasDisponibles.push(new THREE.Vector3(f.valorSup,resultado.y,resultado.z+2));
                        }

                    }
                    else if (resultado.y == 16) //Si la J >= 15 se cierra el rectángulo
                    {
                        this.casillas[resultado.y][resultado.z] = f.valorInf;
                        this.casillas[resultado.y][resultado.z-1] = f.valorSup;
                        this.casillasDisponibles.push(new THREE.Vector3(f.valorSup,resultado.y,resultado.z-2));
                    }
                    
                }
                else //En caso contrario se avanza hacia la izquierda
                {
                    if(resultado.z > 5 && resultado.y == 10)
                    {
                        this.casillas[resultado.y][resultado.z] = f.valorInf;
                        this.casillas[resultado.y][resultado.z-1] = f.valorSup;
                        this.casillasDisponibles.push(new THREE.Vector3(f.valorSup,resultado.y,resultado.z-2));
                    }

                    else if (resultado.y < 16)
                    {
                        this.casillas[resultado.y][resultado.z] = f.valorInf;
                        this.casillas[resultado.y+1][resultado.z] = f.valorSup;
                        this.casillasDisponibles.push(new THREE.Vector3(f.valorSup,resultado.y+2,resultado.z));
                    }
                    else if(resultado.z <= 10 && resultado.y == 16 )
                    {
                        if(this.casillas[resultado.y][resultado.z+1] == 9)
                        {
                            this.casillas[resultado.y][resultado.z] = f.valorInf;
                            this.casillas[resultado.y][resultado.z+1] = f.valorSup;
                            this.casillasDisponibles.push(new THREE.Vector3(f.valorSup,resultado.y,resultado.z+2));
                        }
                        else
                        {
                            this.casillas[resultado.y][resultado.z] = f.valorInf;
                            this.casillas[resultado.y][resultado.z-1] = f.valorSup;
                            this.casillasDisponibles.push(new THREE.Vector3(f.valorSup,resultado.y,resultado.z-2));
                        }

                    }
                    else if (resultado.y >= 16) //Si la J >= 15 se cierra el rectángulo
                    {
                        this.casillas[resultado.y][resultado.z] = f.valorInf;
                        this.casillas[resultado.y][resultado.z+1] = f.valorSup;
                        this.casillasDisponibles.push(new THREE.Vector3(f.valorSup,resultado.y,resultado.z+2));
                    }else
                        return false;
                }
            } 
            
            else if(resultado.x == -1)    // Si es -1 significa que es la primera
            {
                this.casillas[resultado.y][resultado.z] = f.valorInf;
                this.casillas[resultado.y][resultado.z+1] = f.valorSup;
                this.casillasDisponibles.push(new THREE.Vector3(f.valorSup,resultado.y,resultado.z+2));
                this.casillasDisponibles.push(new THREE.Vector3(f.valorInf,resultado.y,resultado.z-1));
            }

            this.jugadores[this.jugador_actual].jugarFicha(f);
            //Con esta variable evitamos que un jugador tramposo pueda poner varias fichas
            this.puedeJugar = false;
            this.situarFichaEnTablero(f, resultado);
            console.log(this.casillas);
            return true;
        }
        else
            return false;

    }

    /**
     * @description Esta función realizará la animación de colocar la ficha en el tablero
     * @param {Ficha} ficha La ficha que se va a posicionar
     * @param {Vector3} resultado Contiene la posición en la matriz de casillas, que nos servirá para colocar la ficha en el espacio
     */
    situarFichaEnTablero(ficha, resultado)
    {
        var that = this;

        // Hay que cambiar ligeramente la primera animación dependiendo del jugador actual
        // Para el jugador 0
        if(this.jugador_actual == 0) {
            // Hacemos la primera animación. Igual para todas las fichas. Levantamos la ficha y se pone horizontal.
            this.origen0 = {x: ficha.position.x, y: ficha.position.y, z: ficha.position.z, rotationX: 0.0, rotationY: Math.PI/2, rotationZ: 0.0};

            // El primer destino es para levantar y girar la ficha
            this.destino0 = {y: 12.0, rotationX: Math.PI/2, rotationY: 0.0, rotationZ: Math.PI/2};

            var movimiento1 = new TWEEN.Tween(this.origen0).to(this.destino0, 1000)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(function() {
                    ficha.rotation.y = that.origen0.rotationY;
                    ficha.rotation.x = -that.origen0.rotationX;
                    ficha.rotation.z = that.origen0.rotationZ;
                    ficha.position.y = that.origen0.y;
                });
            
            // Ahora comprobamos si tenemos que trasladar la ficha a la derecha o a la izquierda, antes de ponerla
            // El origen es desde donde hemos levantado la ficha
            this.origen1 = {x: ficha.position.x, y: 12.0, z: ficha.position.z, rotationZ: Math.PI/2};
        }
        
        // Para el jugador 1
        else if(this.jugador_actual == 1) {
            // Hacemos la primera animación. Igual para todas las fichas. Levantamos la ficha y se pone horizontal.
            this.origen0 = {x: ficha.position.x, y: ficha.position.y, z: ficha.position.z, rotationX: 0.0, rotationY: -Math.PI/2, rotationZ: 0.0};

            // El primer destino es para levantar y girar la ficha
            this.destino0 = {y: 12.0, rotationX: Math.PI/2, rotationY: 0.0, rotationZ: -Math.PI/2};

            var movimiento1 = new TWEEN.Tween(this.origen0).to(this.destino0, 1000)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(function() {
                    ficha.rotation.y = that.origen0.rotationY;
                    ficha.rotation.x = -that.origen0.rotationX;
                    ficha.rotation.z = that.origen0.rotationZ;
                    ficha.position.y = that.origen0.y;
                });
            
            // Ahora comprobamos si tenemos que trasladar la ficha a la derecha o a la izquierda, antes de ponerla
            // El origen es desde donde hemos levantado la ficha
            this.origen1 = {x: ficha.position.x, y: 12.0, z: ficha.position.z, rotationZ: Math.PI/2};
        }
        
        // Es la primera ficha. La ponemos en el centro directamente
        if(resultado.x == -1) {
            var tuplaDestino = this.obtenerPosicionEspacio(resultado.y, resultado.z, 0);
            this.destinoFinal = {x: tuplaDestino.x, y: 9.8, z: tuplaDestino.z, rotationZ: 0.0}

            var movimientoTablero = new TWEEN.Tween(this.origen1).to(this.destinoFinal, 2000)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onComplete(function(){
                    that.puedeJugar = true;
                })
                .onUpdate(function() {
                    ficha.position.x = that.origen1.x;
                    ficha.position.y = that.origen1.y;
                    ficha.position.z = that.origen1.z;
                    ficha.rotation.z = that.origen1.rotationZ;
                });
            
            movimiento1.chain(movimientoTablero);
            movimiento1.start();
        }

        // Si no es la primera ficha, gestionamos todas las casuísticas
        else {
            // ¿Nos movemos a la derecha?
            if(resultado.z >= 10 && resultado.z <= 18) {
                // Ponemos la ficha en vertical
                if(resultado.z == 16 && resultado.y <= 15) {
                    var tuplaDestino = this.obtenerPosicionEspacio(resultado.y, resultado.z, 1);
                    this.destinoFinal = {x: tuplaDestino.x+0.5, z: tuplaDestino.z+0.5};

                    var movimiento2 = new TWEEN.Tween(this.origen1).to(this.destinoFinal, 2000)
                        .easing(TWEEN.Easing.Quadratic.InOut)
                        .onUpdate(function() {
                            ficha.position.x = that.origen1.x;
                            ficha.position.z = that.origen1.z;
                        });
                    
                    // ¿Qué parte de la ficha coincide?
                    if(this.jugador_actual == 0) {
                        if(resultado.x == ficha.valorSup) {
                            this.origenBajada = {y: 12.0}
                            this.destinoBajada = {y: 9.8};
    
                            var movimientoBajada = new TWEEN.Tween(this.origenBajada).to(this.destinoBajada, 1000)
                                .easing(TWEEN.Easing.Quadratic.InOut)
                                .onComplete(function(){
                                    that.puedeJugar = true;
                                })
                                .onUpdate(function() {
                                    ficha.position.y = that.origenBajada.y;
                                });
                        }
    
                        else if(resultado.x == ficha.valorInf) {
                            this.origenBajada = {y: 12.0, rotation: Math.PI/2};
                            this.destinoBajada = {y: 9.8, rotation: 3*Math.PI/2};
    
                            var movimientoBajada = new TWEEN.Tween(this.origenBajada).to(this.destinoBajada, 1000)
                                .easing(TWEEN.Easing.Quadratic.InOut)
                                .onComplete(function(){
                                    that.puedeJugar = true;
                                })
                                .onUpdate(function() {
                                    ficha.rotation.z = that.origenBajada.rotation;
                                    ficha.position.y = that.origenBajada.y;
                                });
                        }
                    }

                    else if(this.jugador_actual == 1) {
                        if(resultado.x == ficha.valorSup) {
                            this.origenBajada = {y: 12.0, rotation: -Math.PI/2}
                            this.destinoBajada = {y: 9.8, rotation: -3*Math.PI/2};
    
                            var movimientoBajada = new TWEEN.Tween(this.origenBajada).to(this.destinoBajada, 1000)
                                .easing(TWEEN.Easing.Quadratic.InOut)
                                .onComplete(function(){          
                                    that.puedeJugar = true;
                                })
                                .onUpdate(function() {
                                    ficha.rotation.z = that.origenBajada.rotation;
                                    ficha.position.y = that.origenBajada.y;
                                });
                        }
    
                        else if(resultado.x == ficha.valorInf) {
                            this.origenBajada = {y: 12.0};
                            this.destinoBajada = {y: 9.8};
    
                            var movimientoBajada = new TWEEN.Tween(this.origenBajada).to(this.destinoBajada, 1000)
                                .easing(TWEEN.Easing.Quadratic.InOut)
                                .onComplete(function(){
                                    that.puedeJugar = true;
                                })
                                .onUpdate(function() {
                                    ficha.position.y = that.origenBajada.y;
                                });
                        }
                    }

                    movimiento1.chain(movimiento2);
                    movimiento2.chain(movimientoBajada);
                    movimiento1.start();
                }

                // En horizontal con verticales ya puestas
                else if(resultado.y == 16) {
                    var tuplaDestino = this.obtenerPosicionEspacio(resultado.y, resultado.z, 1);
                    this.destinoFinal = {x: tuplaDestino.x, z: tuplaDestino.z+1};

                    var movimiento2 = new TWEEN.Tween(this.origen1).to(this.destinoFinal, 2000)
                        .easing(TWEEN.Easing.Quadratic.InOut)
                        .onUpdate(function() {
                            ficha.position.x = that.origen1.x;
                            ficha.position.z = that.origen1.z;
                        });
                    
                    // ¿Qué parte de la ficha coincide?
                    if(this.jugador_actual == 0) {
                        if(resultado.x == ficha.valorSup) {
                            this.origenBajada = {y: 12.0, rotationZ: Math.PI/2}
                            this.destinoBajada = {y: 9.8, rotationZ: 0.0};
    
                            var movimientoBajada = new TWEEN.Tween(this.origenBajada).to(this.destinoBajada, 1000)
                                .easing(TWEEN.Easing.Quadratic.InOut)
                                .onComplete(function(){
                                    that.puedeJugar = true;
                                })
                                .onUpdate(function() {
                                    ficha.rotation.z = that.destinoBajada.rotationZ;
                                    ficha.position.y = that.origenBajada.y;
                                });
                        }
    
                        else if(resultado.x == ficha.valorInf) {
                            this.origenBajada = {y: 12.0, rotationZ: Math.PI/2}
                            this.destinoBajada = {y: 9.8, rotationZ: Math.PI};
    
                            var movimientoBajada = new TWEEN.Tween(this.origenBajada).to(this.destinoBajada, 1000)
                                .easing(TWEEN.Easing.Quadratic.InOut)
                                .onComplete(function(){
                                    that.puedeJugar = true;  
                                })
                                .onUpdate(function() {
                                    ficha.rotation.z = -that.destinoBajada.rotationZ;
                                    ficha.position.y = that.origenBajada.y;
                                });
                        }
    
                        movimiento1.chain(movimiento2);
                        movimiento2.chain(movimientoBajada);
                        movimiento1.start();
                    }
                    
                    else if(this.jugador_actual == 1) {
                        if(resultado.x == ficha.valorSup) {
                            this.origenBajada = {y: 12.0, rotationZ: Math.PI/2}
                            this.destinoBajada = {y: 9.8, rotationZ: 0.0};
    
                            var movimientoBajada = new TWEEN.Tween(this.origenBajada).to(this.destinoBajada, 1000)
                                .easing(TWEEN.Easing.Quadratic.InOut)
                                .onComplete(function(){
                                    that.puedeJugar = true;
                                })
                                .onUpdate(function() {
                                    ficha.rotation.z = that.destinoBajada.rotationZ;
                                    ficha.position.y = that.origenBajada.y;
                                });
                        }
    
                        else if(resultado.x == ficha.valorInf) {
                            this.origenBajada = {y: 12.0, rotationZ: Math.PI/2}
                            this.destinoBajada = {y: 9.8, rotationZ: Math.PI};
    
                            var movimientoBajada = new TWEEN.Tween(this.origenBajada).to(this.destinoBajada, 1000)
                                .easing(TWEEN.Easing.Quadratic.InOut)
                                .onComplete(function(){
                                    that.puedeJugar = true;  
                                })
                                .onUpdate(function() {
                                    ficha.rotation.z = that.destinoBajada.rotationZ;
                                    ficha.position.y = that.origenBajada.y;
                                });
                        }
    
                        movimiento1.chain(movimiento2);
                        movimiento2.chain(movimientoBajada);
                        movimiento1.start();
                    }
                }
                
                // En horizontal, pero sin haber puesto verticales anteriormente
                else {
                    var tuplaDestino = this.obtenerPosicionEspacio(resultado.y, resultado.z, 1);
                    this.destinoFinal = {x: tuplaDestino.x, z: tuplaDestino.z};

                    var movimiento2 = new TWEEN.Tween(this.origen1).to(this.destinoFinal, 2000)
                        .easing(TWEEN.Easing.Quadratic.InOut)
                        .onUpdate(function() {
                            ficha.position.x = that.origen1.x;
                            ficha.position.z = that.origen1.z;
                        });
                    
                    // ¿Qué parte de la ficha coincide?
                    if(resultado.x == ficha.valorSup) {
                        this.origenBajada = {y: 12.0, rotationZ: Math.PI/2}
                        this.destinoBajada = {y: 9.8, rotationZ: Math.PI};

                        var movimientoBajada = new TWEEN.Tween(this.origenBajada).to(this.destinoBajada, 1000)
                            .easing(TWEEN.Easing.Quadratic.InOut)
                            .onComplete(function(){
                                that.puedeJugar = true;
                            })
                            .onUpdate(function() {
                                ficha.rotation.z = that.destinoBajada.rotationZ;
                                ficha.position.y = that.origenBajada.y;
                            });
                    }

                    else if(resultado.x == ficha.valorInf) {
                        this.origenBajada = {y: 12.0, rotationZ: Math.PI/2}
                        this.destinoBajada = {y: 9.8, rotationZ: 0.0};

                        var movimientoBajada = new TWEEN.Tween(this.origenBajada).to(this.destinoBajada, 1000)
                            .easing(TWEEN.Easing.Quadratic.InOut)
                            .onComplete(function(){
                                that.puedeJugar = true;  
                            })
                            .onUpdate(function() {
                                ficha.rotation.z = that.destinoBajada.rotationZ;
                                ficha.position.y = that.origenBajada.y;
                            });
                    }

                    movimiento1.chain(movimiento2);
                    movimiento2.chain(movimientoBajada);
                    movimiento1.start();
                }
            }

            // ¿Nos movemos a la izquierda?
            else if(resultado.z >= 3 && resultado.z <= 10) {
                // Ponemos la ficha en vertical
                if(resultado.z == 5 && resultado.y <= 15) {
                    var tuplaDestino = this.obtenerPosicionEspacio(resultado.y, resultado.z, 0);
                    this.destinoFinal = {x: tuplaDestino.x+0.5, z: tuplaDestino.z-3.5};

                    var movimiento2 = new TWEEN.Tween(this.origen1).to(this.destinoFinal, 2000)
                        .easing(TWEEN.Easing.Quadratic.InOut)
                        .onUpdate(function() {
                            ficha.position.x = that.origen1.x;
                            ficha.position.z = that.origen1.z;
                        });
                    
                    // ¿Qué parte de la ficha coincide?
                    if(this.jugador_actual == 0) {
                        if(resultado.x == ficha.valorSup) {
                            this.origenBajada = {y: 12.0}
                            this.destinoBajada = {y: 9.8};
    
                            var movimientoBajada = new TWEEN.Tween(this.origenBajada).to(this.destinoBajada, 1000)
                                .easing(TWEEN.Easing.Quadratic.InOut)
                                .onComplete(function(){
                                    that.puedeJugar = true;
                                })
                                .onUpdate(function() {
                                    ficha.position.y = that.origenBajada.y;
                                });
                        }
    
                        else if(resultado.x == ficha.valorInf) {
                            this.origenBajada = {y: 12.0, rotation: Math.PI/2}
                            this.destinoBajada = {y: 9.8, rotation: 3*Math.PI/2};
    
                            var movimientoBajada = new TWEEN.Tween(this.origenBajada).to(this.destinoBajada, 1000)
                                .easing(TWEEN.Easing.Quadratic.InOut)
                                .onComplete(function(){
                                    that.puedeJugar = true;
                                })
                                .onUpdate(function() {
                                    ficha.rotation.z = that.origenBajada.rotation;
                                    ficha.position.y = that.origenBajada.y;
                                });
                        }
                    }

                    else if(this.jugador_actual == 1) {
                        if(resultado.x == ficha.valorSup) {
                            this.origenBajada = {y: 12.0, rotation: -Math.PI/2}
                            this.destinoBajada = {y: 9.8, rotation: -3*Math.PI/2};
    
                            var movimientoBajada = new TWEEN.Tween(this.origenBajada).to(this.destinoBajada, 1000)
                                .easing(TWEEN.Easing.Quadratic.InOut)
                                .onComplete(function(){
                                    that.puedeJugar = true;  
                                })
                                .onUpdate(function() {
                                    ficha.rotation.z = that.origenBajada.rotation;
                                    ficha.position.y = that.origenBajada.y;
                                });
                        }
    
                        else if(resultado.x == ficha.valorInf) {
                            this.origenBajada = {y: 12.0}
                            this.destinoBajada = {y: 9.8};
    
                            var movimientoBajada = new TWEEN.Tween(this.origenBajada).to(this.destinoBajada, 1000)
                                .easing(TWEEN.Easing.Quadratic.InOut)
                                .onComplete(function(){
                                    that.puedeJugar = true;
                                })
                                .onUpdate(function() {
                                    ficha.position.y = that.origenBajada.y;
                                });
                        }
                    }

                    movimiento1.chain(movimiento2);
                    movimiento2.chain(movimientoBajada);
                    movimiento1.start();
                }

                // En horizontal con verticales ya puestas
                else if(resultado.y == 16) {
                    var tuplaDestino = this.obtenerPosicionEspacio(resultado.y, resultado.z, 0);
                    this.destinoFinal = {x: tuplaDestino.x, z: tuplaDestino.z};

                    var movimiento2 = new TWEEN.Tween(this.origen1).to(this.destinoFinal, 2000)
                        .easing(TWEEN.Easing.Quadratic.InOut)
                        .onUpdate(function() {
                            ficha.position.x = that.origen1.x;
                            ficha.position.z = that.origen1.z;
                        });
                    
                    // ¿Qué parte de la ficha coincide?
                    if(this.jugador_actual == 0) {
                        if(resultado.x == ficha.valorSup) {
                            this.origenBajada = {y: 12.0, rotationZ: Math.PI/2}
                            this.destinoBajada = {y: 9.8, rotationZ: Math.PI};
    
                            var movimientoBajada = new TWEEN.Tween(this.origenBajada).to(this.destinoBajada, 1000)
                                .easing(TWEEN.Easing.Quadratic.InOut)
                                .onComplete(function(){
                                    that.puedeJugar = true;
                                })
                                .onUpdate(function() {
                                    ficha.rotation.z = that.destinoBajada.rotationZ;
                                    ficha.position.y = that.origenBajada.y;
                                });
                        }
    
                        else if(resultado.x == ficha.valorInf) {
                            this.origenBajada = {y: 12.0, rotationZ: Math.PI/2}
                            this.destinoBajada = {y: 9.8, rotationZ: 0.0};
    
                            var movimientoBajada = new TWEEN.Tween(this.origenBajada).to(this.destinoBajada, 1000)
                                .easing(TWEEN.Easing.Quadratic.InOut)
                                .onComplete(function(){
                                    that.puedeJugar = true;  
                                })
                                .onUpdate(function() {
                                    ficha.rotation.z = that.destinoBajada.rotationZ;
                                    ficha.position.y = that.origenBajada.y;
                                });
                        }
    
                        movimiento1.chain(movimiento2);
                        movimiento2.chain(movimientoBajada);
                        movimiento1.start();
                    }
                    
                    else if(this.jugador_actual == 1) {
                        if(resultado.x == ficha.valorSup) {
                            this.origenBajada = {y: 12.0, rotationZ: Math.PI/2}
                            this.destinoBajada = {y: 9.8, rotationZ: Math.PI};
    
                            var movimientoBajada = new TWEEN.Tween(this.origenBajada).to(this.destinoBajada, 1000)
                                .easing(TWEEN.Easing.Quadratic.InOut)
                                .onComplete(function(){
                                    that.puedeJugar = true;
                                })
                                .onUpdate(function() {
                                    ficha.rotation.z = that.destinoBajada.rotationZ;
                                    ficha.position.y = that.origenBajada.y;
                                });
                        }
    
                        else if(resultado.x == ficha.valorInf) {
                            this.origenBajada = {y: 12.0, rotationZ: Math.PI/2}
                            this.destinoBajada = {y: 9.8, rotationZ: 0.0};
    
                            var movimientoBajada = new TWEEN.Tween(this.origenBajada).to(this.destinoBajada, 1000)
                                .easing(TWEEN.Easing.Quadratic.InOut)
                                .onComplete(function(){
                                    that.puedeJugar = true;  
                                })
                                .onUpdate(function() {
                                    ficha.rotation.z = that.destinoBajada.rotationZ;
                                    ficha.position.y = that.origenBajada.y;
                                });
                        }
    
                        movimiento1.chain(movimiento2);
                        movimiento2.chain(movimientoBajada);
                        movimiento1.start();
                    }
                }

                // En horizontal sin más, pero sin haber puesto verticales anteriormente
                else {
                    var tuplaDestino = this.obtenerPosicionEspacio(resultado.y, resultado.z, 0);
                    this.destinoFinal = {x: tuplaDestino.x, z: tuplaDestino.z};

                    var movimiento2 = new TWEEN.Tween(this.origen1).to(this.destinoFinal, 2000)
                        .easing(TWEEN.Easing.Quadratic.InOut)
                        .onUpdate(function() {
                            ficha.position.x = that.origen1.x;
                            ficha.position.z = that.origen1.z;
                        });
                    
                    // ¿Qué parte de la ficha coincide?
                    if(resultado.x == ficha.valorSup) {
                        this.origenBajada = {y: 12.0, rotationZ: Math.PI/2}
                        this.destinoBajada = {y: 9.8, rotationZ: 0.0};

                        var movimientoBajada = new TWEEN.Tween(this.origenBajada).to(this.destinoBajada, 1000)
                            .easing(TWEEN.Easing.Quadratic.InOut)
                            .onComplete(function(){
                                that.puedeJugar = true;
                            })
                            .onUpdate(function() {
                                ficha.rotation.z = that.destinoBajada.rotationZ;
                                ficha.position.y = that.origenBajada.y;
                            });
                    }

                    else if(resultado.x == ficha.valorInf) {
                        this.origenBajada = {y: 12.0, rotationZ: Math.PI/2}
                        this.destinoBajada = {y: 9.8, rotationZ: Math.PI};

                        var movimientoBajada = new TWEEN.Tween(this.origenBajada).to(this.destinoBajada, 1000)
                            .easing(TWEEN.Easing.Quadratic.InOut)
                            .onComplete(function(){
                                that.puedeJugar = true;
                            })
                            .onUpdate(function() {
                                ficha.rotation.z = that.destinoBajada.rotationZ;
                                ficha.position.y = that.origenBajada.y;
                            });
                    }

                    movimiento1.chain(movimiento2);
                    movimiento2.chain(movimientoBajada);
                    movimiento1.start();
                }
            }
        }

        return true;
    }

    /**
     * @description Devuelve dos valores con la posición en el espacio que le corresponde a una ficha según su posición en la matriz
     * @param {int} fila 
     * @param {int} columna
     * @param {boolean} lado 0 = izquierda, 1 = derecha
     * @returns Dos valores, enteros, con la posición en el espacio que corresponde
     */
    obtenerPosicionEspacio(fila, columna, lado) 
    {
        // Cada ficha está compuesta por 2 mitades. Cada mitad mide 0.75 de alto, por tanto, una ficha mide 1.5 unidades de alto.
        // El centro de nuestro tablero corresponde a la posición (10, 10) de la matriz
        // Por tanto, por cada unidad de diferencia con la posición (10, 10) habrá que separar en x o z 1.5 unidades

        var difFila = 10-fila;
        var difCol = 10-columna;

        if(difCol < 0){
            if(difCol == -1 && difFila == -6) {
                if(lado == 1) {
                    difCol = difCol-1;
                }
                
            }

            else if(difCol == -3 && difFila == -6) {
                if(lado == 1) {
                    difCol = difCol-0.5;
                }
            }

            else if(difCol == -5 && difFila == -6) {
                difCol = difCol;
            }

            else if(difCol == -7 && difFila == -6) {
                difCol = difCol+0.5;
            }

            else {
                difCol = (difCol*1.5)/2;
            }
        }

        else if(difCol == 2 && difFila == -6) {
            difCol = difCol+0.5;
        }

        else if(difCol == 4 && difFila == -6) {
            difCol = difCol;
        }

        else if(difCol == 6 && difFila == -6) {
            difCol = difCol-0.5;
        }

        else if(difCol == 5 && difFila == -6) {
            difCol = difCol-1.5;
        }

        else if(difCol == 3 && difFila == -6) {
            difCol = difCol-1;
        }

        else if(difCol == 1 && difFila == -6) {
            difCol = difCol-0.5;
        }

        else {
            if(difCol == 3)
                difCol = 2;
            difCol = difCol*1.5;
        }

        if(difFila < 0) {
            if(difFila < -2 && difFila >= -4) {
                difFila = -(difFila+1);
            }

            else if(difFila < -4) {
                difFila = -(difFila+1.5);
            }

            else {
                difFila = -(difFila+0.5);
            }
        }

        var resultado = {x: difFila, z: difCol};

        return resultado;
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
    update()
    {
        TWEEN.update();
    }

    /**
     * @description Devuelve una lista con las fichas seleccionables en cada momento
     * Las fichas seleccionables en cada momento serán las que tenga el jugador actual en su turno
     */
    getFichasSeleccionables()
    {
        return this.jugadores[this.jugador_actual].fichas;
    }
    /**
     * @description Comprueba si el jugador que se pasa por parametro tiene opciones
     * @param {Jugador} jugador 
     * @returns True en caso afirmativo, false en caso negativo
     */
    calcularOpciones(jugador)
    {
        var J_opciones = false;
        for(var i = 0; i < jugador.fichas.length && !J_opciones; i++)
        {
            var aux = false;
            for(var j = 0; j < this.casillasDisponibles.length && !aux ; j++)
            {
                if(jugador.fichas[i].valorSup == this.casillasDisponibles[j].x || jugador.fichas[i].valorInf == this.casillasDisponibles[j].x  )
                {
                    aux = true;
                    J_opciones = true;
                }
            }
        }

        return J_opciones;
    }

    /**
     * @description Comprueba que el juego sigue o si en su defecto hay un ganador
     * @returns False si no hay ganador, el id del jugador que gana en caso de que si lo haya | Devuelve 3 en caso de empate
     */
    consultarEstadoJuego()
    {
        if(this.jugadores[0].fichas.length == 0)
            return 1;

        if(this.jugadores[1].fichas.length == 0)
            return 2;
            
        var J_1_opciones = this.calcularOpciones(this.jugadores[0]);
        var J_2_opciones = this.calcularOpciones(this.jugadores[1]);


        if(!J_1_opciones && !J_2_opciones )
        {
            var puntosJ1 = this.jugadores[0].calcularPuntos();
            var puntosJ2 = this.jugadores[1].calcularPuntos();

            //Gana el que tiene menos puntos
            if(puntosJ1 > puntosJ2)
                return 2;
            else if (puntosJ1 < puntosJ2)
                return 1;
            else if (puntosJ1 == puntosJ2)
                return 3;
        }
        else
        {
            return false;
        }
    }
    // /**
    //  * @description Elimina las fichas de la escena
    //  */
    eliminarFichas()
    {
        this.remove(this);
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
