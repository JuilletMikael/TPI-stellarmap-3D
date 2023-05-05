class Moon extends PlanetaryCelestialBodies {
    animation(planet) {
        this.mesh.position.set(
            Math.cos(time) * 8 + planet.position.x,
            Math.sin(time) * 8 + planet.position.y,
            0
        );
    }
}