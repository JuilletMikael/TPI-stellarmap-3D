/**
 *  @file      main.js
 *  @brief     Principal file
 *  @author    Created by Miakel Juillet
 *  @version   15.05.2023
 */

import { horizonAPIFilter } from './src/model/dataFilter.js';
import { Renderer } from './src/model/classes/Renderer.js';
import { Planet } from './src/model/classes/Planet.js';

async function main() {

  const allPlanets = await import('./src/assets/AllPlanetsData-08-05-2023.json');
  let planetList = [];

  allPlanets.planets.forEach( element => {
    const filteredPlanet = horizonAPIFilter(element);
    const planet = generatePlanets(filteredPlanet);
    planetList.push(planet);
  });

  const renderer = new Renderer(document.getElementById('canvas'), planetList);

  const animate = () => {
    requestAnimationFrame(animate);
    renderer.animate();
  };
  animate();
}

function generatePlanets(filteredPlanet){
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