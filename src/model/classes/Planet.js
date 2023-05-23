/**
 *  @file      Planet.js
 *  @brief     Class of Planet
 *  @author    Created by Miakel Juillet
 *  @version   23.05.2023
 */
import { PlanetaryCelestialBody } from './PlanetaryCelestialBody.js';

/**
* Planet is extended from PlanetaryCelestialBody class
* @extends PlanetaryCelestialBody
*/
export class Planet extends PlanetaryCelestialBody{

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
}