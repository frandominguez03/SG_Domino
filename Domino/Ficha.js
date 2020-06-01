 class Ficha extends THREE.Object3D {
   /**
    * @description Constructor de la case Ficha
    * @param {int} valorSup 
    * @param {int} valorInf 
    * @param {Array<Mitad>} mitades 
    * @description En la lista mitades estań las geometrías de las mitades correspondientes a cada valor
    */
    constructor(valorSup, valorInf,mitades)
    {
        super();

        var points = [];
        points.push(new THREE.Vector2(0,-4));
        for ( var i = 0; i < 4; i ++ )
          points.push( new THREE.Vector2( Math.sin( i * 0.2 ) * 10 + 5, ( i - 5 ) * 2 ) );
     
        this.geometryRevolucion = new THREE.LatheGeometry( points );
        this.materialRevolucion = new THREE.MeshPhongMaterial( { color: 0x000000, side: THREE.BackSide } )
        
        var material =  new THREE.MeshPhongMaterial({color: 0xf4f4f4});

        this.sup = new THREE.Mesh(mitades.getGeometria(valorSup),material);
        this.inf = new THREE.Mesh(mitades.getGeometria(valorInf),material);
        this.sup = this.colocarObjetosRevolucion(this.sup, valorSup);
        this.inf = this.colocarObjetosRevolucion(this.inf, valorInf);

        //Realizo las modificaciones necesarias para que el centro de la ficha esté en el origen
        this.sup.position.y = 0.375;
        this.inf.position.y = -0.375;

        var geoTrasera = new THREE.BoxGeometry (0.5,1.5,0.01);
        geoTrasera.translate(0,0,-0.1)

        this.material_negro = new THREE.MeshPhongMaterial({color: 0x00000});
        this.trasera = new THREE.Mesh(geoTrasera,this.material_negro);

        this.resultado = new THREE.Object3D();
        this.resultado.add(this.sup,this.inf,this.trasera);
  
        this.add (this.resultado);

      
    }

    /**
     * @description Esta función recibe un mesh y en función del valor que tenga le coloca un objeto de revolución encima del hueco con un material negro
     * @param {Mesh} mitad
     * @param {int} valor
     * @returns {Mesh}   
     */
    colocarObjetosRevolucion(mitad, valor)
    {
      
      var res = new THREE.Object3D();
      res.add(mitad);
      
      switch(valor)
      {
        case 0:
          return mitad;
        break;

        case 1:
          this.lathe = new THREE.Mesh( this.geometryRevolucion,this.materialRevolucion );
          this.lathe.scale.set(0.005,0.005,0.005);
          this.lathe.rotation.x = Math.PI/2
          this.lathe.position.z = 0.13;
          res.add(this.lathe);
        break;

        case 2:
          this.lathe = new THREE.Mesh( this.geometryRevolucion,this.materialRevolucion );
          this.lathe.scale.set(0.005,0.005,0.005);
          this.lathe.rotation.x = Math.PI/2
          this.lathe.position.set(0.15,0.2,0.13);
          res.add(this.lathe);
          this.lathe = new THREE.Mesh( this.geometryRevolucion,this.materialRevolucion );
          this.lathe.scale.set(0.005,0.005,0.005);
          this.lathe.rotation.x = Math.PI/2
          this.lathe.position.set(-0.15,-0.2,0.13);
          res.add(this.lathe);
        break;

        case 3:
          this.lathe = new THREE.Mesh( this.geometryRevolucion,this.materialRevolucion );
          this.lathe.scale.set(0.005,0.005,0.005);
          this.lathe.rotation.x = Math.PI/2
          this.lathe.position.z = 0.13;
          res.add(this.lathe);
          this.lathe = new THREE.Mesh( this.geometryRevolucion,this.materialRevolucion );
          this.lathe.scale.set(0.005,0.005,0.005);
          this.lathe.rotation.x = Math.PI/2
          this.lathe.position.set(0.15,0.2,0.13);
          res.add(this.lathe);
          this.lathe = new THREE.Mesh( this.geometryRevolucion,this.materialRevolucion );
          this.lathe.scale.set(0.005,0.005,0.005);
          this.lathe.rotation.x = Math.PI/2
          this.lathe.position.set(-0.15,-0.2,0.13);
          res.add(this.lathe);
        break;

        case 4:
          this.lathe = new THREE.Mesh( this.geometryRevolucion,this.materialRevolucion );
          this.lathe.scale.set(0.005,0.005,0.005);
          this.lathe.rotation.x = Math.PI/2
          this.lathe.position.set(0.15,0.2,0.13);
          res.add(this.lathe);
          this.lathe = new THREE.Mesh( this.geometryRevolucion,this.materialRevolucion );
          this.lathe.scale.set(0.005,0.005,0.005);
          this.lathe.rotation.x = Math.PI/2
          this.lathe.position.set(-0.15,0.2,0.13);
          res.add(this.lathe);
          this.lathe = new THREE.Mesh( this.geometryRevolucion,this.materialRevolucion );
          this.lathe.scale.set(0.005,0.005,0.005);
          this.lathe.rotation.x = Math.PI/2
          this.lathe.position.set(0.15,-0.2,0.13);
          res.add(this.lathe);
          this.lathe = new THREE.Mesh( this.geometryRevolucion,this.materialRevolucion );
          this.lathe.scale.set(0.005,0.005,0.005);
          this.lathe.rotation.x = Math.PI/2
          this.lathe.position.set(-0.15,-0.2,0.13);
          res.add(this.lathe);
        break;

        case 5:
          this.lathe = new THREE.Mesh( this.geometryRevolucion,this.materialRevolucion );
          this.lathe.scale.set(0.005,0.005,0.005);
          this.lathe.rotation.x = Math.PI/2
          this.lathe.position.z = 0.13;
          res.add(this.lathe);
          this.lathe = new THREE.Mesh( this.geometryRevolucion,this.materialRevolucion );
          this.lathe.scale.set(0.005,0.005,0.005);
          this.lathe.rotation.x = Math.PI/2
          this.lathe.position.set(0.15,0.2,0.13);
          res.add(this.lathe);
          this.lathe = new THREE.Mesh( this.geometryRevolucion,this.materialRevolucion );
          this.lathe.scale.set(0.005,0.005,0.005);
          this.lathe.rotation.x = Math.PI/2
          this.lathe.position.set(-0.15,0.2,0.13);
          res.add(this.lathe);
          this.lathe = new THREE.Mesh( this.geometryRevolucion,this.materialRevolucion );
          this.lathe.scale.set(0.005,0.005,0.005);
          this.lathe.rotation.x = Math.PI/2
          this.lathe.position.set(0.15,-0.2,0.13);
          res.add(this.lathe);
          this.lathe = new THREE.Mesh( this.geometryRevolucion,this.materialRevolucion );
          this.lathe.scale.set(0.005,0.005,0.005);
          this.lathe.rotation.x = Math.PI/2
          this.lathe.position.set(-0.15,-0.2,0.13);
          res.add(this.lathe);
        break;

        case 6:
          this.lathe = new THREE.Mesh( this.geometryRevolucion,this.materialRevolucion );
          this.lathe.scale.set(0.005,0.005,0.005);
          this.lathe.rotation.x = Math.PI/2
          this.lathe.position.set(0.15,0.2,0.13);
          res.add(this.lathe);
          this.lathe = new THREE.Mesh( this.geometryRevolucion,this.materialRevolucion );
          this.lathe.scale.set(0.005,0.005,0.005);
          this.lathe.rotation.x = Math.PI/2
          this.lathe.position.set(-0.15,0.2,0.13);
          res.add(this.lathe);
          this.lathe = new THREE.Mesh( this.geometryRevolucion,this.materialRevolucion );
          this.lathe.scale.set(0.005,0.005,0.005);
          this.lathe.rotation.x = Math.PI/2
          this.lathe.position.set(0.15,0,0.13);
          res.add(this.lathe);
          this.lathe = new THREE.Mesh( this.geometryRevolucion,this.materialRevolucion );
          this.lathe.scale.set(0.005,0.005,0.005);
          this.lathe.rotation.x = Math.PI/2
          this.lathe.position.set(-0.15,0,0.13);
          res.add(this.lathe);
          this.lathe = new THREE.Mesh( this.geometryRevolucion,this.materialRevolucion );
          this.lathe.scale.set(0.005,0.005,0.005);
          this.lathe.rotation.x = Math.PI/2
          this.lathe.position.set(0.15,-0.2,0.13);
          res.add(this.lathe);
          this.lathe = new THREE.Mesh( this.geometryRevolucion,this.materialRevolucion );
          this.lathe.scale.set(0.005,0.005,0.005);
          this.lathe.rotation.x = Math.PI/2
          this.lathe.position.set(-0.15,-0.2,0.13);
          res.add(this.lathe);
        break;


      }
      if(valor != 0)
      {
        return res;
      }
      
    }
  }