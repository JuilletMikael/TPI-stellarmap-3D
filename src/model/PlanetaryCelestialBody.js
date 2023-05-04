class PlanetaryCelestialBodies {
    constructor(id, name, sizeRadius, textureFile, position, rotationSpeed, rotationDuration, orbitSpeed, orbitDuration, meanTemperature) {
        this.id = id;
        this.name = name;
        this.sizeRadius = sizeRadius;
        this.textureFile = textureFile;
        this.position = position;
        this.rotationSpeed = rotationSpeed;
        this.rotationDuration = rotationDuration;
        this.orbitSpeed = orbitSpeed;
        this.orbitDuration = orbitDuration;
        this.meanTemperature = meanTemperature;
    }

    get mesh() {
        if (this.mesh === undefined || this.mesh === null) {
          const geometry = new THREE.SphereGeometry(this.sizeRadius);
          const texture = new THREE.TextureLoader().load(this.textureFile);
          const material = new THREE.MeshBasicMaterial({ map: texture });
          this.mesh = new THREE.Mesh(geometry, material);
          this.mesh.position.x += this.positionX;
        }
        return this.mesh;
    }

  }