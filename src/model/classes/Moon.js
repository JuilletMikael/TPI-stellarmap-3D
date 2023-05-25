/**
 *  @file      Moon.js
 *  @brief     Class of moon
 *  @author    Created by Miakel Juillet
 *  @version   23.05.2023
 */
import { PlanetaryCelestialBody } from './PlanetaryCelestialBody.js';

/**
* Moon is extended from PlanetaryCelestialBody class
* @extends PlanetaryCelestialBody
*/
export class Moon extends PlanetaryCelestialBody {

    constructor(id, name, sizeRadius, textureFile, coordinates, rotationSpeed, rotationDuration, orbitSpeed, orbitDuration, meanTemperature) {
        super(
            id, 
            name, 
            sizeRadius, 
            textureFile, 
            coordinates, 
            rotationSpeed, 
            rotationDuration, 
            orbitSpeed, 
            orbitDuration,
            meanTemperature
        );
    }

    /** 
    * Used to animate moon
    * @summary It specicly change the orbit to be around planet and not sun 
    * @param planet - This is the planet targeted 
    */
    animation(planet) {
        this.mesh.position.set(
            Math.cos(time) * 8 + planet.position.x,
            Math.sin(time) * 8 + planet.position.y,
            0
        );
    }
}