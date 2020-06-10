/**
 * Clase Habitación. Modela el habitáculo donde están la mesa, las sillas...
*/

class Habitacion extends THREE.Object3D {
    constructor() {
        super();

        // Modelamos el suelo
        var geometryGround = new THREE.BoxGeometry(50, 0.2, 50);

        // La textura del suelo
        var texture = new THREE.TextureLoader().load('../img/suelo.jpg')
        var materialGround = new THREE.MeshPhongMaterial ({map: texture});

        // Creamos el mesh
        var suelo = new THREE.Mesh(geometryGround, materialGround);
        
        // Aplicamos las transformaciones necesarias
        suelo.scale.set(2, 1, 2);
        suelo.position.y = -0.1;

        // Añadimos el modelo
        this.add(suelo);

        // Modelamos ahora las paredes
        var geometryPared = new THREE.BoxGeometry(50, 0.2, 50);
        var loaderLadrillos = new THREE.TextureLoader().load('../img/pared.jpg');
        var loader = new THREE.TextureLoader().load('../img/poster.jpg');
        var loader2 = new THREE.TextureLoader().load('../img/poster2.jpeg');


        loaderLadrillos.wrapS = THREE.RepeatWrapping;
        loaderLadrillos.wrapT = THREE.RepeatWrapping;
        loaderLadrillos.repeat.set( 4, 4 );
        // Material de las paredes
        var materialPared = new THREE.MeshPhongMaterial({bumpMap: loaderLadrillos,map: loaderLadrillos});

        var materialCartel = new THREE.MeshPhongMaterial({map: loader});
        var materialCartel2 = new THREE.MeshPhongMaterial({map: loader2});


        // Construimos los mesh de cada pared
        var pared1 = new THREE.Mesh(geometryPared, materialPared);
        var pared2 = new THREE.Mesh(geometryPared, materialPared);
        var pared3 = new THREE.Mesh(geometryPared, materialPared);
        var pared4 = new THREE.Mesh(geometryPared, materialPared);
        var techo = new THREE.Mesh(geometryPared, materialPared);
        var cartel = new THREE.Mesh(geometryPared, materialCartel);
        var cartel2 = new THREE.Mesh(geometryPared, materialCartel2);

        // Aplicamos las transformaciones necesarias
        pared1.position.set(-50, 25, 0);
        pared1.scale.set(1, 1, 2);
        pared1.rotation.z = Math.PI/2;

        pared2.position.set(50, 25, 0);
        pared2.scale.set(1, 1, 2);
        pared2.rotation.z = Math.PI/2;

        pared3.position.set(0, 25, 50);
        pared3.scale.set(1, 1, 2);
        pared3.rotation.z = Math.PI/2;
        pared3.rotation.y = Math.PI/2;

        pared4.position.set(0, 25, -50);
        pared4.scale.set(1, 1, 2);
        pared4.rotation.z = Math.PI/2;
        pared4.rotation.y = Math.PI/2;

        techo.position.set(0, 50, 0);
        techo.scale.set(2, 1, 2);

        cartel.position.set(-49, 15, 0);
        cartel.scale.set(0.5, 0.5, 0.5);
        cartel.rotation.x = Math.PI/2;
        cartel.rotation.z = 3*Math.PI/2;

        cartel2.position.set(49, 15, 0);
        cartel2.scale.set(0.5, 0.5, 0.5);
        cartel2.rotation.x = Math.PI/2;
        cartel2.rotation.z = Math.PI/2;


        
        // Añadimos los modelos
        this.add(pared1);
        this.add(pared2);
        this.add(pared3);
        this.add(pared4);
        this.add(techo);
        this.add(cartel);
        this.add(cartel2);


        // Añadimos la mesa
        this.mesa = new Mesa();
        this.mesa.scale.set(3, 3, 3);

        this.add(this.mesa);

        // Añadimos ambas sillas
        this.silla1 = new Silla();
        this.silla1.position.set(17, 0, 0);
        this.silla1.rotation.y = -Math.PI/2;
        this.silla2 = new Silla();
        this.silla2.position.set(-17, 0, 0);
        this.silla2.rotation.y = Math.PI/2;

        this.add(this.silla1);
        this.add(this.silla2);


    }
}