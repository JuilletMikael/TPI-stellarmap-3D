/**
 *  @file      Planet.js
 *  @brief     Class of Planet
 *  @author    Created by Miakel Juillet
 *  @version   15.05.2023
 */
import { PlanetaryCelestialBodies } from './PlanetaryCelestialBody.js';


export class Planet extends PlanetaryCelestialBodies{

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
            meanTemperature);
      }
}