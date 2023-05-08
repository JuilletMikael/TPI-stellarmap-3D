/**
 *  @file      main.js
 *  @brief     Principal file
 *  @author    Created by Miakel Juillet
 *  @version   08.05.2023
 */

import { GetPlanetaryCelestialBodies } from './src/controller/requests.js';
import PlanetaryCelestialBodies from './src/assets/PlanetaryCelestialBodies.json';

const planets = PlanetaryCelestialBodies.planets;

GetPlanetaryCelestialBodies(499)

