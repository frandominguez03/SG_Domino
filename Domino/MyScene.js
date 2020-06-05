/// La clase fachada del modelo
class MyScene extends THREE.Scene {
  constructor (myCanvas) { 
    super();

    // Variable para controlar si el juego está iniciado
    this.iniciado = false;
    
    this.renderer = this.createRenderer(myCanvas);
    
    this.gui = this.createGUI ();
  
    this.createLights ();
  
    this.createCamera ();

    this.juego = new Domino();
    this.add(this.juego);

    // Añadimos la habitación
    this.room = new Habitacion();
    this.add(this.room);

    // Añadimos ambas sillas
    this.silla1 = new Silla();
    this.silla1.position.set(15, 0, 0);
    this.silla1.rotation.y = -Math.PI/2;
    this.silla2 = new Silla();
    this.silla2.position.set(-15, 0, 0);
    this.silla2.rotation.y = Math.PI/2;

    this.add(this.silla1);
    this.add(this.silla2);

    // Añadimos la mesa
    this.mesa = new Mesa();
    this.mesa.scale.set(3, 3, 3);

    this.add(this.mesa);

  }
  
  createCamera () {
    // Para crear una cámara le indicamos
    //   El ángulo del campo de visión vértical en grados sexagesimales
    //   La razón de aspecto ancho/alto
    //   Los planos de recorte cercano y lejano
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    // También se indica dónde se coloca
    this.camera.position.set (15, 20, 45);
    // Y hacia dónde mira
    var look = new THREE.Vector3 (0,13,0);
    this.camera.lookAt(look);
    this.add (this.camera);
  }

  
  createGUI () {
    // Se crea la interfaz gráfica de usuario
    var gui = new dat.GUI();
    
    // La escena le va a añadir sus propios controles. 
    // Se definen mediante una   new function()
    // En este caso la intensidad de la luz y si se muestran o no los ejes
    this.guiControls = new function() {
      // En el contexto de una función   this   alude a la función
      this.lightIntensity =1;
    }

    // Se crea una sección para los controles de esta clase
    var folder = gui.addFolder ('Luz y Ejes');
    
    // Se le añade un control para la intensidad de la luz
    folder.add (this.guiControls, 'lightIntensity', 0, 1, 0.1).name('Intensidad de la Luz : ');
    
    return gui;
  }
  
  createLights () {
    // Se crea una luz ambiental, evita que se vean complentamente negras las zonas donde no incide de manera directa una fuente de luz
    // La luz ambiental solo tiene un color y una intensidad
    // Se declara como   var   y va a ser una variable local a este método
    //    se hace así puesto que no va a ser accedida desde otros métodos
    var ambientLight = new THREE.AmbientLight(0xccddee, 0.5);
    // La añadimos a la escena
    this.add (ambientLight);
    
    // Se crea una luz focal que va a ser la luz principal de la escena
    // La luz focal, además tiene una posición, y un punto de mira
    // Si no se le da punto de mira, apuntará al (0,0,0) en coordenadas del mundo
    // En este caso se declara como   this.atributo   para que sea un atributo accesible desde otros métodos.
    this.luz1 = new THREE.SpotLight( 0xffffff, 0.5 );
    this.luz1.position.set( 0, 25, -50 );
    this.add (this.luz1);

    this.luz2 = new THREE.SpotLight( 0xffffff, 0.5 );
    this.luz2.position.set( 0, 25, 50 );
    this.add (this.luz2);

    this.luz3 = new THREE.SpotLight( 0xffffff, 0.5 );
    this.luz3.position.set( 50, 25, 0 );
    this.add (this.luz3);

    this.luz4 = new THREE.SpotLight( 0xffffff, 0.5 );
    this.luz4.position.set( -50, 25, 0 );
    this.add (this.luz4);
  }
  
  createRenderer (myCanvas) {
    // Se recibe el lienzo sobre el que se van a hacer los renderizados. Un div definido en el html.
    
    // Se instancia un Renderer   WebGL
    var renderer = new THREE.WebGLRenderer();
    
    // Se establece un color de fondo en las imágenes que genera el render
    renderer.setClearColor(new THREE.Color(0xEEEEEE), 1.0);
    
    // Se establece el tamaño, se aprovecha la totalidad de la ventana del navegador
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    // La visualización se muestra en el lienzo recibido
    $(myCanvas).append(renderer.domElement);
    
    return renderer;  
  }
  
  getCamera () {
    // En principio se devuelve la única cámara que tenemos
    // Si hubiera varias cámaras, este método decidiría qué cámara devuelve cada vez que es consultado
    return this.camera;
  }
  
  setCameraAspect (ratio) {
    // Cada vez que el usuario modifica el tamaño de la ventana desde el gestor de ventanas de
    // su sistema operativo hay que actualizar el ratio de aspecto de la cámara
    this.camera.aspect = ratio;
    // Y si se cambia ese dato hay que actualizar la matriz de proyección de la cámara
    this.camera.updateProjectionMatrix();
  }
    
  onWindowResize () {
    // Este método es llamado cada vez que el usuario modifica el tamapo de la ventana de la aplicación
    // Hay que actualizar el ratio de aspecto de la cámara
    this.setCameraAspect (window.innerWidth / window.innerHeight);
    
    // Y también el tamaño del renderizador
    this.renderer.setSize (window.innerWidth, window.innerHeight);
  }

  update () {
    // Este método debe ser llamado cada vez que queramos visualizar la escena de nuevo.
    
    // Literalmente le decimos al navegador: "La próxima vez que haya que refrescar la pantalla, llama al método que te indico".
    // Si no existiera esta línea,  update()  se ejecutaría solo la primera vez.
    requestAnimationFrame(() => this.update())
    
    // Le decimos al renderizador "visualiza la escena que te indico usando la cámara que te estoy pasando"
    this.renderer.render (this, this.getCamera());

    // Se actualizan los elementos de la escena para cada frame
    // Se actualiza la intensidad de la luz con lo que haya indicado el usuario en la gui
    this.luz1.intensity = this.guiControls.lightIntensity;

    // Actualizamos el juego
    this.juego.update();

    // TWEEN
    TWEEN.update();

  }
  /**
   * @description Función que traza un rayo y obtiene un array con todos los objetos atravesados por el rayo
   * @param {Evento del ratón} event 
   */
  onDocumentMouseDown(event)
  {
    var mouse = new THREE.Vector2();
    mouse.x = (event.clientX/window.innerWidth)*2 - 1;
    mouse.y = 1 - 2 * (event.clientY/window.innerHeight);

    var raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse,this.camera);

    var pickedObjects = raycaster.intersectObjects(this.juego.getFichasSeleccionables(),true);
    var that = this;
    if(pickedObjects.length > 0)
    {
      console.log(pickedObjects[0].object.userData);
      this.juego.jugarFicha(pickedObjects[0].object.userData);
      //Esperamos a que se termine la animación
      setTimeout(() => {  this.cambioDeTurno(); }, 4000);

    }
  }

  /**
   * @description Función para iniciar el juego con una tecla del teclado
   * @param {Evento del teclado} event 
   */
  onKeyPress(event) {
    var x = event.which || event.keyCode;
    
    // Solo admitimos un pulsado de la tecla de inicio de juego para evitar movimientos no deseados de la cámara
    if(!this.iniciado) {
      if(x == 71 || x == 103) {
        var that = this;

        var origen = {x: 15, y: 20, z: 45};
        var destino = {x: 20, y: 15, z: 0};

        var animacionCamara = new TWEEN.Tween(origen)
          .to(destino, 2000)
          .easing(TWEEN.Easing.Quadratic.InOut)
          .onUpdate(function() {
            that.camera.position.set(origen.x, origen.y, origen.z);
            // Cambiamos a dónde mira
            var look = new THREE.Vector3 (0,13,0);
            that.camera.lookAt(look);
          });
        
        animacionCamara.start();
      }
    }

    if(x == 80 || x == 112)
    {
      this.cambioDeTurno();
    }

    if(x == 88 || x == 120)
    {
      this.vistaDesdeArriba();
    }
    
    this.iniciado = true;
  }

  /**
   * @description Funcion que se encarga de pasar el turno y realizar la animación de cámara necesaria
   */
  cambioDeTurno()
  {
    
    var that = this;

    var origen;
    var mitad;
    var destino;


    if(this.juego.jugador_actual == 0)
    {
      origen = {x: 20, y: 15, z: 0};
      mitad = {x: 0, y: 15, z: 20};
      destino = {x: -20, y: 15, z: 0};
    }
    else
    {
      origen = {x: -20, y: 15, z: 0};
      mitad = {x: 0, y: 15, z: -20};
      destino = {x: 20, y: 15, z: 0};
    }



    var animacionCambioTurno_1 = new TWEEN.Tween(origen)
      .to(mitad, 2000)
      .easing(TWEEN.Easing.Quadratic.InOut)
      .onUpdate(function() {
        that.camera.position.set(origen.x, origen.y, origen.z);
        // Cambiamos a dónde mira
        var look = new THREE.Vector3 (0,13,0);
        that.camera.lookAt(look);
      });

      var animacionCambioTurno_2 = new TWEEN.Tween(mitad)
      .to(destino, 2000)
      .easing(TWEEN.Easing.Quadratic.InOut)
      .onUpdate(function() {
        that.camera.position.set(mitad.x, mitad.y, mitad.z);
        // Cambiamos a dónde mira
        var look = new THREE.Vector3 (0,13,0);
        that.camera.lookAt(look);
      });



      animacionCambioTurno_1.chain(animacionCambioTurno_2);
      animacionCambioTurno_1.start();

      this.juego.cambioDeTurno();

  }

  /**
   * @description Animacion para proporcionar una vista del tablero desde arriba
   */
  vistaDesdeArriba()
  {
    var that = this;

    var origen;
    var destino;

    console.log(this.camera.position.x);
    if(this.camera.position.x == 20)
    {
      origen = {x: this.camera.position.x, y: 15, z: 0};
      destino = {x: 1, y: 40, z: 0};
    }

    else if(this.camera.position.x == -20)
    {
      origen = {x: this.camera.position.x, y: 15, z: 0};
      destino = {x: -1, y: 40, z: 0};
    }

    else
    {
      if(this.camera.position.y == 40)
      {
        origen = {x: 0, y: 40, z: 0};
        if(this.juego.jugador_actual == 0)
        {
          destino = {x: 20, y: 15, z: 0};
        }
        else
        {
          destino = {x: -20, y: 15, z: 0};
        }
      }
    }

    var animacionVistaPajaro = new TWEEN.Tween(origen)
      .to(destino, 2000)
      .easing(TWEEN.Easing.Quadratic.InOut)
      .onUpdate(function() {
        that.camera.position.set(origen.x, origen.y, origen.z);
        // Cambiamos a dónde mira
        var look = new THREE.Vector3 (0,13,0);
        that.camera.lookAt(look);
      });

    //   var animacionCambioTurno_2 = new TWEEN.Tween(mitad)
    //   .to(destino, 2000)
    //   .easing(TWEEN.Easing.Quadratic.InOut)
    //   .onUpdate(function() {
    //     that.camera.position.set(mitad.x, mitad.y, mitad.z);
    //     // Cambiamos a dónde mira
    //     var look = new THREE.Vector3 (0,13,0);
    //     that.camera.lookAt(look);
    //   });



    //   animacionCambioTurno_1.chain(animacionCambioTurno_2);
    animacionVistaPajaro.start();

  }


}



/// La función   main
$(function () {
  
  // Se instancia la escena pasándole el  div  que se ha creado en el html para visualizar
  var scene = new MyScene("#WebGL-output");

  // Se añaden los listener de la aplicación. En este caso, el que va a comprobar cuándo se modifica el tamaño de la ventana de la aplicación.
  window.addEventListener ("resize", () => scene.onWindowResize());
  //Click para firefox
  window.addEventListener ("mousedown", (event) => scene.onDocumentMouseDown(event), true);
  //Click para Chrome
  window.addEventListener ("pointerdown", (event) => scene.onDocumentMouseDown(event), true);
  // Pulsar tecla
  window.addEventListener ("keypress", () => scene.onKeyPress(event));
  // Que no se nos olvide, la primera visualización.
  scene.update();
});