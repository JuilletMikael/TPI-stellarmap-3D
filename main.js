/**
 *  @file      main.js
 *  @brief     Principal file
 *  @author    Created by Miakel Juillet
 *  @version   12.05.2023
 */

import { horizonAPIFilter } from './src/model/dataFilter.js';
import { render } from './src/model/renderer.js';
import { Planet } from './src/model/classes/Planet.js';
import * as THREE from 'three';

async function main() {
  const scene = render();

  const allPlanets = await import('./src/assets/AllPlanetsData-08-05-2023.json');

  allPlanets.planets.forEach( async element => {
    const filteredPlanet = horizonAPIFilter(element);
    const planet = await generatePlanets(filteredPlanet);

    scene.add(planet.mesh)
  });
}
  
async function generatePlanets(filteredPlanet){
  const planet = new Planet(
    filteredPlanet.id,
    filteredPlanet.name,
    filteredPlanet.sizeRadius,
    filteredPlanet.name + ".jpg",
    filteredPlanet.coordinate,
    filteredPlanet.rotationSpeed,
    filteredPlanet.rotationDuration,
    filteredPlanet.orbitSpeed,
    filteredPlanet.orbitDuration,
    filteredPlanet.meanTemperature
  )
  return planet;
}

main();