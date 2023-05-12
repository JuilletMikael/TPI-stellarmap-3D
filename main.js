/**
 *  @file      main.js
 *  @brief     Principal file
 *  @author    Created by Miakel Juillet
 *  @version   12.05.2023
 */

import { horizonAPIFilter } from './src/model/dataFilter.js';
import { GetAsteroid } from './src/controller/requests.js'

async function main() {
    const allPlanets = await import('./src/assets/AllPlanetsData-08-05-2023.json');
    const filteredPlanet = horizonAPIFilter(allPlanets.planets[0].result);
    console.log(filteredPlanet);
    
    const asteroid = await GetAsteroid();
    console.log(asteroid);
  }
  
  main();