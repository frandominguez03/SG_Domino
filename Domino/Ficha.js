 class Ficha extends THREE.Object3D {
    constructor(valorSup, valorInf) {
        super();

        var material =  new THREE.MeshNormalMaterial();

        this.sup = new Mitad(valorSup,material)
        this.inf = new Mitad(valorInf,material)

        //Realizo las modificaciones necesarias para que el centro de la ficha esté en el origen
        this.sup.position.y = 0.375;
        this.inf.position.y = -0.375;

        this.resultado = new THREE.Object3D();
        this.resultado.add(this.sup,this.inf);
  
        this.add (this.resultado);
      
    }
  }