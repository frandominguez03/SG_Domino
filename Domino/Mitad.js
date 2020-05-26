class Mitad extends THREE.Object3D
{
    constructor(valor,material)
    {
        super();

        this.geoFicha = new THREE.BoxGeometry (0.5,0.75,0.2);
        this.valor = valor;
        this.material = material;
        this.representarValor(valor);

        this.add (this.mitad);
    
    }

    getGeometria()
    {
        return this.geoFicha;
    }

    representarValor(valor)
    {
        var mitadBSP = new ThreeBSP(this.geoFicha);
        

        switch(valor)
        {
            case 0:
                this.mitad = new THREE.Mesh(this.geoFicha,this.material);
            break;

            case 1:
                var bola = new THREE.SphereGeometry ( 0.05, 15, 32);
                bola.translate(0,0,0.1);
                var bolaBSP = new ThreeBSP(bola);
                var finalResult = mitadBSP.subtract(bolaBSP);
            break;

            case 2:
                var bola = new THREE.SphereGeometry ( 0.05, 15, 32);
                bola.translate(0.15,0.2,0.1);
                var bolaBSP = new ThreeBSP(bola);
                var finalResult = mitadBSP.subtract(bolaBSP);
                bola = new THREE.SphereGeometry ( 0.05, 15, 32);
                bola.translate(-0.15,-0.2,0.1);
                bolaBSP = new ThreeBSP(bola);
                finalResult = finalResult.subtract(bolaBSP);
            break;

            case 3:
                var bola = new THREE.SphereGeometry ( 0.05, 15, 32);
                bola.translate(0.15,0.2,0.1);
                var bolaBSP = new ThreeBSP(bola);
                var finalResult = mitadBSP.subtract(bolaBSP);
                bola = new THREE.SphereGeometry ( 0.05, 15, 32);
                bola.translate(-0.15,-0.2,0.1);
                bolaBSP = new ThreeBSP(bola);
                finalResult = finalResult.subtract(bolaBSP);
                bola = new THREE.SphereGeometry ( 0.05, 15, 32);
                bola.translate(0,0,0.1);
                bolaBSP = new ThreeBSP(bola);
                finalResult = finalResult.subtract(bolaBSP);
            break;

            case 4:
                var bola = new THREE.SphereGeometry ( 0.05, 15, 32);
                bola.translate(0.15,0.2,0.1);
                var bolaBSP = new ThreeBSP(bola);
                var finalResult = mitadBSP.subtract(bolaBSP);
                bola = new THREE.SphereGeometry ( 0.05, 15, 32);
                bola.translate(-0.15,0.2,0.1);
                bolaBSP = new ThreeBSP(bola);
                finalResult = finalResult.subtract(bolaBSP);
                bola = new THREE.SphereGeometry ( 0.05, 15, 32);
                bola.translate(0.15,-0.2,0.1);
                bolaBSP = new ThreeBSP(bola);
                finalResult = finalResult.subtract(bolaBSP);
                bola = new THREE.SphereGeometry ( 0.05, 15, 32);
                bola.translate(-0.15,-0.2,0.1);
                bolaBSP = new ThreeBSP(bola);
                finalResult = finalResult.subtract(bolaBSP);
            break;

            case 5:
                var bola = new THREE.SphereGeometry ( 0.05, 15, 32);
                bola.translate(0.15,0.2,0.1);
                var bolaBSP = new ThreeBSP(bola);
                var finalResult = mitadBSP.subtract(bolaBSP);
                bola = new THREE.SphereGeometry ( 0.05, 15, 32);
                bola.translate(-0.15,0.2,0.1);
                bolaBSP = new ThreeBSP(bola);
                finalResult = finalResult.subtract(bolaBSP);
                bola = new THREE.SphereGeometry ( 0.05, 15, 32);
                bola.translate(0.15,-0.2,0.1);
                bolaBSP = new ThreeBSP(bola);
                finalResult = finalResult.subtract(bolaBSP);
                bola = new THREE.SphereGeometry ( 0.05, 15, 32);
                bola.translate(-0.15,-0.2,0.1);
                bolaBSP = new ThreeBSP(bola);
                finalResult = finalResult.subtract(bolaBSP);
                bola = new THREE.SphereGeometry ( 0.05, 15, 32);
                bola.translate(0,0,0.1);
                bolaBSP = new ThreeBSP(bola);
                finalResult = finalResult.subtract(bolaBSP)
            break;

            case 6:
                var bola = new THREE.SphereGeometry ( 0.05, 15, 32);
                bola.translate(0.15,0.2,0.1);
                var bolaBSP = new ThreeBSP(bola);
                var finalResult = mitadBSP.subtract(bolaBSP);
                bola = new THREE.SphereGeometry ( 0.05, 15, 32);
                bola.translate(-0.15,0.2,0.1);
                bolaBSP = new ThreeBSP(bola);
                finalResult = finalResult.subtract(bolaBSP);
                bola = new THREE.SphereGeometry ( 0.05, 15, 32);
                bola.translate(0.15,-0.2,0.1);
                bolaBSP = new ThreeBSP(bola);
                finalResult = finalResult.subtract(bolaBSP);
                bola = new THREE.SphereGeometry ( 0.05, 15, 32);
                bola.translate(-0.15,-0.2,0.1);
                bolaBSP = new ThreeBSP(bola);
                finalResult = finalResult.subtract(bolaBSP);
                bola = new THREE.SphereGeometry ( 0.05, 15, 32);
                bola.translate(0.15,0,0.1);
                bolaBSP = new ThreeBSP(bola);
                finalResult = finalResult.subtract(bolaBSP)
                bola = new THREE.SphereGeometry ( 0.05, 15, 32);
                bola.translate(-0.15,0,0.1);
                bolaBSP = new ThreeBSP(bola);
                finalResult = finalResult.subtract(bolaBSP)
            break;

        }

        if(valor != 0)
        {
            this.mitad = finalResult.toMesh(this.material);
            this.mitad.geometry.computeFaceNormals();
            this.mitad.geometry.computeVertexNormals();
        }
    }
}