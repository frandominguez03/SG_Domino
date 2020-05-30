class Mitad extends THREE.Object3D
{
    constructor()
    {
        super();
        this.material =  new THREE.MeshPhongMaterial({color: 0xFFFFFF});
        this.geometrias = [];
        var geoFicha = new THREE.BoxGeometry (0.5,0.75,0.2);

        this.geometrias.push(geoFicha);

        var mitadBSP = new ThreeBSP(geoFicha);
        var bola = new THREE.SphereGeometry ( 0.05, 8, 8);
        bola.translate(0,0,0.1);
        var bolaBSP = new ThreeBSP(bola);
        var finalResult = mitadBSP.subtract(bolaBSP);
        finalResult = finalResult.toGeometry();



        this.geometrias.push(finalResult);

        var bola = new THREE.SphereGeometry ( 0.05, 8, 8);
        bola.translate(0.15,0.2,0.1);
        var bolaBSP = new ThreeBSP(bola);
        var finalResult = mitadBSP.subtract(bolaBSP);
        bola = new THREE.SphereGeometry ( 0.05, 8, 8);
        bola.translate(-0.15,-0.2,0.1);
        bolaBSP = new ThreeBSP(bola);
        finalResult = finalResult.subtract(bolaBSP);
        finalResult = finalResult.toGeometry();


        this.geometrias.push(finalResult);

        var bola = new THREE.SphereGeometry ( 0.05, 8, 8);
        bola.translate(0.15,0.2,0.1);
        var bolaBSP = new ThreeBSP(bola);
        var finalResult = mitadBSP.subtract(bolaBSP);
        bola = new THREE.SphereGeometry ( 0.05, 8, 8);
        bola.translate(-0.15,-0.2,0.1);
        bolaBSP = new ThreeBSP(bola);
        finalResult = finalResult.subtract(bolaBSP);
        bola = new THREE.SphereGeometry ( 0.05, 8, 8);
        bola.translate(0,0,0.1);
        bolaBSP = new ThreeBSP(bola);
        finalResult = finalResult.subtract(bolaBSP);
        finalResult = finalResult.toGeometry();


        this.geometrias.push(finalResult);

        var bola = new THREE.SphereGeometry ( 0.05, 8, 8);
        bola.translate(0.15,0.2,0.1);
        var bolaBSP = new ThreeBSP(bola);
        var finalResult = mitadBSP.subtract(bolaBSP);
        bola = new THREE.SphereGeometry ( 0.05, 8, 8);
        bola.translate(-0.15,0.2,0.1);
        bolaBSP = new ThreeBSP(bola);
        finalResult = finalResult.subtract(bolaBSP);
        bola = new THREE.SphereGeometry ( 0.05, 8, 8);
        bola.translate(0.15,-0.2,0.1);
        bolaBSP = new ThreeBSP(bola);
        finalResult = finalResult.subtract(bolaBSP);
        bola = new THREE.SphereGeometry ( 0.05, 8, 8);
        bola.translate(-0.15,-0.2,0.1);
        bolaBSP = new ThreeBSP(bola);
        finalResult = finalResult.subtract(bolaBSP);
        finalResult = finalResult.toGeometry();

        this.geometrias.push(finalResult);

        var bola = new THREE.SphereGeometry ( 0.05, 8, 8);
        bola.translate(0.15,0.2,0.1);
        var bolaBSP = new ThreeBSP(bola);
        var finalResult = mitadBSP.subtract(bolaBSP);
        bola = new THREE.SphereGeometry ( 0.05, 8, 8);
        bola.translate(-0.15,0.2,0.1);
        bolaBSP = new ThreeBSP(bola);
        finalResult = finalResult.subtract(bolaBSP);
        bola = new THREE.SphereGeometry ( 0.05, 8, 8);
        bola.translate(0.15,-0.2,0.1);
        bolaBSP = new ThreeBSP(bola);
        finalResult = finalResult.subtract(bolaBSP);
        bola = new THREE.SphereGeometry ( 0.05, 8, 8);
        bola.translate(-0.15,-0.2,0.1);
        bolaBSP = new ThreeBSP(bola);
        finalResult = finalResult.subtract(bolaBSP);
        bola = new THREE.SphereGeometry ( 0.05, 8, 8);
        bola.translate(0,0,0.1);
        bolaBSP = new ThreeBSP(bola);
        finalResult = finalResult.subtract(bolaBSP);
        finalResult = finalResult.toGeometry();

        this.geometrias.push(finalResult);

        var bola = new THREE.SphereGeometry ( 0.05, 8, 8);
        bola.translate(0.15,0.2,0.1);
        var bolaBSP = new ThreeBSP(bola);
        var finalResult = mitadBSP.subtract(bolaBSP);
        bola = new THREE.SphereGeometry ( 0.05, 8, 8);
        bola.translate(-0.15,0.2,0.1);
        bolaBSP = new ThreeBSP(bola);
        finalResult = finalResult.subtract(bolaBSP);
        bola = new THREE.SphereGeometry ( 0.05, 8, 8);
        bola.translate(0.15,-0.2,0.1);
        bolaBSP = new ThreeBSP(bola);
        finalResult = finalResult.subtract(bolaBSP);
        bola = new THREE.SphereGeometry ( 0.05, 8, 8);
        bola.translate(-0.15,-0.2,0.1);
        bolaBSP = new ThreeBSP(bola);
        finalResult = finalResult.subtract(bolaBSP);
        bola = new THREE.SphereGeometry ( 0.05, 8, 8);
        bola.translate(0.15,0,0.1);
        bolaBSP = new ThreeBSP(bola);
        finalResult = finalResult.subtract(bolaBSP)
        bola = new THREE.SphereGeometry ( 0.05, 8, 8);
        bola.translate(-0.15,0,0.1);
        bolaBSP = new ThreeBSP(bola);
        finalResult = finalResult.subtract(bolaBSP)
        finalResult = finalResult.toGeometry();

        this.geometrias.push(finalResult);



        this.add (this.geometrias);
    
    }


    getGeometria(i)
    {
        return this.geometrias[i];
    }

}