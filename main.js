/**
 *  @file      main.js
 *  @brief     Principal file
 *  @author    Created by Miakel Juillet
 *  @version   30.05.2023
 */

import { horizonAPIFilter } from './src/model/dataFilter.js';
import { GetAsteroid } from './src/controller/requests.js'
import { Renderer } from './src/model/classes/Renderer.js';
import { Planet } from './src/model/classes/Planet.js';
import { Moon } from './src/model/classes/Moon.js';
import { Asteroid } from './src/model/classes/Asteroid.js';
import { Color } from 'three';

/** 
* Main function of teh project will be ussed first
*/
async function main() {

  const loading = document.getElementById("loading");
  
  await init();

  //Disable display loading 
  loading.style.display = "none";   
}


/**
 * This function is used to initiate the solar system planet 
 */
async function init(){
  const allPlanets = await import('./src/assets/AllPlanetsData-08-05-2023.json');
  let bodiesList = [];

  const moonGetted = allPlanets.moons[0];
  const filtredMoon = horizonAPIFilter(moonGetted);
  const moon = new Moon(
    filtredMoon.id,
    filtredMoon.name,
    filtredMoon.sizeRadius,
    filtredMoon.name + ".jpg",
    {
      x: filtredMoon.coordinate.x * 50,
      y: filtredMoon.coordinate.y * 50,
      z: filtredMoon.coordinate.z * 50
    },
    filtredMoon.rotationSpeed,
    filtredMoon.rotationDuration,
    filtredMoon.orbitSpeed,
    filtredMoon.orbitDuration,
    filtredMoon.meanTemperature, 
    "Earth"
  );
  
  // Loop around all planets getted from the allPlanets data
  allPlanets.planets.forEach( element => {
    const filteredPlanet = horizonAPIFilter(element);
    const planet = generatePlanet(filteredPlanet);
    bodiesList.push(planet);
  });

  const body = bodiesList.find(bodies => bodies.name === moon.orbitingBody);
  moon.placePlanetarySystem(body);
  moon.createOrbit();

 // await generateAsteroid(bodiesList);
  const renderer = new Renderer(document.getElementById('canvas'), bodiesList);

  const animate = () => {
    requestAnimationFrame(animate);
    moon.animation();
    renderer.animate();
  };

  animate();  

  var reply_click = function()
  {
      let speed = null;

      switch(this.id){
        case "speed1": speed = 0.01
          break;
        case "speed2": speed = 10
          break;
        case "speed3": speed = 30
          break;
      }

      bodiesList.forEach(body => {
        body.speedChanger = speed 
      })

      moon.speedChanger = speed;
  }
  document.getElementById('speed1').onclick = reply_click;
  document.getElementById('speed2').onclick = reply_click;
  document.getElementById('speed3').onclick = reply_click;

  window.addEventListener('click', (event) => {
    const clickedObject = renderer.onPointerMove(event);
    
    //handle null clickedObject
    if (clickedObject != null ) {
      const body = bodiesList.find(bodies => bodies.name === clickedObject.object.name);
      body.showDescription(document.getElementById("body__Description"));
    }
  });
}

/** 
* Generates planets with the planet class by using planet filtred 
* @param  filteredPlanet - Data from the planet that's filtred in amont
* @return planet object generated by the class
*/
function generatePlanet(filteredPlanet){
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

async function generateAsteroid(bodiesList){
  const gettedObjects = await GetAsteroid();
  gettedObjects.forEach(element => {
      const asteroid = new Asteroid(
      element.id,
      element.name,
      element.estimated_diameter.kilometers.estimated_diameter_max,
      element.close_approach_data[0].close_approach_date_full,
      element.is_potentially_hazardous_asteroid,
      bodiesList.find(planet => planet.name == element.close_approach_data[0].orbiting_body),
      element.close_approach_data[0].miss_distance.kilometers
    )
  });
}


main();