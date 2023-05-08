/**
 *  @file      Moon.js
 *  @brief     Class of moon
 *  @author    Created by Miakel Juillet
 *  @version   08.05.2023
 */


class Moon extends PlanetaryCelestialBodies {
    animation(planet) {
        this.mesh.position.set(
            Math.cos(time) * 8 + planet.position.x,
            Math.sin(time) * 8 + planet.position.y,
            0
        );
    }
}