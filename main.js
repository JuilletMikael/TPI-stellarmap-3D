/**
 *  @file      main.js
 *  @brief     Principal file
 *  @author    Created by Miakel Juillet
 *  @version   08.05.2023
 */

import PlanetaryCelestialBodies from './src/assets/PlanetaryCelestialBodies.json';
import Allplanets from './src/assets/AllPlanetsData-08-05-2023.json';
import {horizonAPI} from './src/model/dataFilter.js';

horizonAPI(Allplanets.planets[0].result);