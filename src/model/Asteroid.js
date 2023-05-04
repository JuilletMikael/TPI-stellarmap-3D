class Asteroid {
    constructor() {
      
    }
    
    get mesh() {
        if (this.mesh === undefined || this.mesh === null) {
          const geometry = new THREE.SphereGeometry(this.sizeRadius);
          const texture = new THREE.TextureLoader().load("asteroid.png");
          const material = new THREE.MeshBasicMaterial({ map: texture });
          this.mesh = new THREE.Mesh(geometry, material);
          this.mesh.position.x += this.positionX;
        }
        return this.mesh;
    }
  }