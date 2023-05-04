class PlanetaryCelestialBodies {
    constructor(id, name, sizeRadius, material, position, rotationSpeed, rotationDuration, orbitSpeed, orbitDuration, meanTemperature) {
      
        this.id = id;
        this.name = name;
        this.sizeRadius = sizeRadius;
        this.material = material;
        this.position = position;
        this.rotationSpeed = rotationSpeed;
        this.rotationDuration = rotationDuration;
        this.orbitSpeed = orbitSpeed;
        this.orbitDuration = orbitDuration;
        this.meanTemperature = meanTemperature;

        var geometry = new THREE.SphereGeometry( this.sizeRadius, 16, 8 );
        var material = new THREE.MeshBasicMaterial( { color: this.color } );
        this.mesh =  new THREE.Mesh( geometry, material );
        
    }
  }