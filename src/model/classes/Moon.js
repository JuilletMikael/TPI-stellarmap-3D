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

    constructor(id, name, sizeRadius, textureFile, coordinates, rotationSpeed, rotationDuration, orbitSpeed, orbitDuration, meanTemperature, orbitingBody) {
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
        this.orbitingBody = orbitingBody;
    }
}