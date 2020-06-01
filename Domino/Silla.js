class Silla extends THREE.Object3D {
    constructor() {
        super();

        var that = this;
        var materialLoader = new THREE.MTLLoader();
        var objectLoader = new THREE.OBJLoader();

        materialLoader.load('modeloSilla/Office_chair.mtl',
            function (materials) {
                objectLoader.setMaterials(materials);
                objectLoader.load('modeloSilla/Office_chair.obj',
                    function (object) {
                        var modelo = object;
                        modelo.scale.set(0.015, 0.015, 0.015);
                        that.add(modelo);
                    }, null, null);
            });
    }
}