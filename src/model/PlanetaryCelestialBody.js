import * as THREE from 'three';

class PlanetaryCelestialBodies {

  constructor(id, name, sizeRadius, textureFile, coordinates, rotationSpeed, rotationDuration, orbitSpeed, orbitDuration, meanTemperature) {
    this.id = id;
    this.name = name;
    this.sizeRadius = sizeRadius;
    this.textureFile = textureFile;
    this.coordinates = coordinates;
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

  get coordinates() {
    return this.mesh.position(this.mesh.coordinates);
  }

  animation() {
    this.mesh.rotation = this.rotationSpeed;
    this.mesh.position.applyAxisAngle( new THREE.Vector3( 0, 0, 1), (168 * 3600) / (this.orbitSpeed * 10000000) ); // 168h in second / orbitspeed * échelle 
  }


}