/**
 * Modelo de la mesa central del juego
 */
class Mesa extends THREE.Object3D {
    constructor() {
        super();

        // Creamos el tablero principal
        var geometriaTablero = new THREE.BoxGeometry(4, 0.2, 4);

        // Tendrá textura de madera
        var textura = new THREE.TextureLoader().load('../img/wood.jpg');
        var material = new THREE.MeshPhongMaterial({map: textura});

        // Construimos el mesh
        var tablero = new THREE.Mesh(geometriaTablero, material);

        // Lo subimos lo necesario
        tablero.position.set(0, 3.3, 0);

        // Lo añadimos a la escena
        this.add(tablero);

        // Creamos ahora los soportes
        var geometriaSoporte = new THREE.BoxGeometry(0.3, 3, 0.3);

        // Construimos los mesh, también con el mismo material (y textura)
        var soporte1 = new THREE.Mesh(geometriaSoporte, material);
        var soporte2 = new THREE.Mesh(geometriaSoporte, material);
        var soporte3 = new THREE.Mesh(geometriaSoporte, material);
        var soporte4 = new THREE.Mesh(geometriaSoporte, material);

        // Posicionamos los soportes donde corresponda
        soporte1.position.set(-1.85, 1.7, -1.85);
        soporte2.position.set(-1.85, 1.7, 1.85);
        soporte3.position.set(1.85, 1.7, -1.85);
        soporte4.position.set(1.85, 1.7, 1.85);

        // Los añadimos a la escena
        this.add(soporte1);
        this.add(soporte2);
        this.add(soporte3);
        this.add(soporte4);
    }
}