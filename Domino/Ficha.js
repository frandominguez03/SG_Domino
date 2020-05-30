 class Ficha extends THREE.Object3D {
    constructor(valorSup, valorInf,mitades) {
        super();
        
        var material =  new THREE.MeshPhongMaterial({color: 0xFFFFFF});

        this.sup = new THREE.Mesh(mitades.getGeometria(valorSup),material);
        this.inf = new THREE.Mesh(mitades.getGeometria(valorInf),material);

        //Realizo las modificaciones necesarias para que el centro de la ficha esté en el origen
        this.sup.position.y = 0.375;
        this.inf.position.y = -0.375;

        var geoTrasera = new THREE.BoxGeometry (0.5,1.5,0.01);
        geoTrasera.translate(0,0,-0.1)

        this.trasera = new THREE.Mesh(geoTrasera,new THREE.MeshPhongMaterial());

        this.resultado = new THREE.Object3D();
        this.resultado.add(this.sup,this.inf,this.trasera);
  
        this.add (this.resultado);
      
    }
  }