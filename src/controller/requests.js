/**
 *  @file      requests.js
 *  @brief     Controller used to make to handle requests.
 *  @author    Created by Miakel Juillet
 *  @version   08.05.2023
 */

import PlanetaryCelestialBodies from '../assets/PlanetaryCelestialBodies.json';
import { GetNearEarthObjects, GetHorizonSpecificBody } from '../model/requests.js';


export function GetPlanetaryCelestialBodies() {
    const planets = PlanetaryCelestialBodies.planets;

    console.log(GetHorizonSpecificBody(199));
}