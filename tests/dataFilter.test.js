/**
 *  @file      dataFilter.test.js
 *  @brief     Used to test filtredata function to be sure every thing working.  
 *  @author    Created by Miakel Juillet
 *  @version   12.05.2023
 */

import { expect, test } from 'vitest';
import {horizonAPIFilter} from './src/model/dataFilter.js';
import Allplanets from './src/assets/AllPlanetsData-08-05-2023.json';


/**
 * Test horizonAPIFilter() function should return Mercury data
 */
test('horizonAPIFilter() should return Mercury data', () => {
    //Given
    const mercury = Allplanets.planets[0];
    const mercuryExpected = {
        id : "199", 
        name : "Mercury",
        sizeRadius : "2440", 
        coordinate : {
          x : "6.439857249172552E+07", 
          y : "5.346674700502940E+07",
          z : "1.766200542283878E+05"
        },
        rotationSpeed : "0.00000124001", 
        rotationDuration : "58.6463", 
        orbitSpeed : "47.362", 
        orbitDuration : "0.2408467", 
        oblliquity : "2.11",
        density : "5.427",
        meanTemperature : "440"
    };

    //When
    const result = horizonAPIFilter(mercury);

    //Then
    expect(result).toEqual(mercuryExpected);
});

/**
 * Test horizonAPIFilter() function should return Mercury data
 */
test('horizonAPIFilter() should return Venus data', () => {
  //Given
  const venus = Allplanets.planets[1];
  const venusExpected = {
      id : "299", 
      name : "Venus",
      sizeRadius : "6051.84", 
      coordinate : {
        x : "-1.009251405140681E+08", 
        y : "3.413512994790523E+07",
        z : "2.169849297722414E+07"
      },
      rotationSpeed : "-0.00000029924", 
      rotationDuration : "243.018484", 
      orbitSpeed : "35.021", 
      orbitDuration : "0.61519726", 
      oblliquity : "177.3",
      density : "5.204",
      meanTemperature : "735"
  };

  //When
  const result = horizonAPIFilter(venus);

  //Then
  expect(result).toEqual(venusExpected);

});

/**
 * Test horizonAPIFilter() function should return Earth data
 */
test('horizonAPIFilter() should return Earth data', () => {

  //Given
  const earth = Allplanets.planets[2];
  const earthExpected = {
      id : "399", 
      name : "Earth",
      sizeRadius : "6371.01", 
      coordinate : {
        x : "-1.116613234083490E+08", 
        y : "-9.446394564291658E+07",
        z : "-4.091379678603614E+07"
      },
      rotationSpeed : "0.00007292115", 
      rotationDuration : "24h", 
      orbitSpeed : "29.79", 
      orbitDuration : "1.0000174", 
      oblliquity : "23.4392911",
      density : "5.51",
      meanTemperature : "287.6"
  };

  //When
  const result = horizonAPIFilter(earth);

  //Then
  expect(result).toEqual(earthExpected);

})

/**
 * Test horizonAPIFilter() function should return Mars data 
 */
test('horizonAPIFilter() should return Mars data', () => {

  //Given
  const mars = Allplanets.planets[3];
  const marsExpected = {
      id : "499", 
      name : "Mars",
      sizeRadius : "3389.92", 
      coordinate : {
        x : "-9.172658128265008E+07", 
        y : "2.475395789325977E+08",
        z : "7.984203671250358E+06"
      },
      rotationSpeed : "0.0000708822", 
      rotationDuration : "24.622962h", 
      orbitSpeed : "24.13", 
      orbitDuration : "1.88081578", 
      oblliquity : "25.19",
      density : "3.933",
      meanTemperature : "210"
  };

  //When
  const result = horizonAPIFilter(mars);

  //Then
  expect(result).toEqual(marsExpected);

})

/**
 * Test horizonAPIFilter() function should return Jupiter data
*/
test('horizonAPIFilter() should return Jupiter data', () => {

  //Given
  const jupiter = Allplanets.planets[4];
  const jupiterExpected = {
      id : "599", 
      name : "Jupiter",
      sizeRadius : "69911", 
      coordinate : {
        x : "7.900239544305509E+08", 
        y : "3.977974646088730E+08",
        z : "-1.643804799922679E+07"
      },
      rotationSpeed : "0.00017585", 
      rotationDuration : "9h55m29.71s", 
      orbitSpeed : "13.0697", 
      orbitDuration : "11.861982204", 
      oblliquity : "3.13",
      density : "1.3262",
      meanTemperature : "Unknown"
  };

  //When
  const result = horizonAPIFilter(jupiter);

  //Then
  expect(result).toEqual(jupiterExpected);

})
 
/**
 * Test horizonAPIFilter() function should return Saturn data
*/
test('horizonAPIFilter() should return Saturn data', () => {

  //Given
  const saturn = Allplanets.planets[5];
  const saturnExpected = {
      id : "699", 
      name : "Saturn",
      sizeRadius : "58232", 
      coordinate : {
        x : "1.377989499063393E+09", 
        y : "-6.338851815853779E+08",
        z : "-3.764483124414477E+07"
      },
      rotationSpeed : "0.000163785", 
      rotationDuration : "10h39m22.4s", 
      orbitSpeed : "9.68", 
      orbitDuration : "29.447498", 
      oblliquity : "26.73",
      density : "0.687",
      meanTemperature : "Unknown"
  };

  //When
  const result = horizonAPIFilter(saturn);

  //Then
  expect(result).toEqual(saturnExpected);

})

/**
 * Test horizonAPIFilter() function should return Uranus data
 */
test('horizonAPIFilter() should return Uranus data', () => {

  //Given
  const uranus = Allplanets.planets[6];
  const uranusExpected = {
      id : "799", 
      name : "Uranus",
      sizeRadius : "25362", 
      coordinate : {
        x : "2.056177409121107E+09", 
        y : "2.306377240773124E+09",
        z : "-1.704586625654197E+07"
      },
      rotationSpeed : "-0.000101237", 
      rotationDuration : "17.24", 
      orbitSpeed : "6.8", 
      orbitDuration : "84.0120465", 
      oblliquity : "97.77",
      density : "1.271",
      meanTemperature : "Unknown"
  };

  //When
  const result = horizonAPIFilter(uranus);

  //Then
  expect(result).toEqual(uranusExpected);

})

/**
 * Test horizonAPIFilter() function should return Neptune data
 */
test('horizonAPIFilter() should return Neptune data', () => {

  //Given
  const neptune = Allplanets.planets[7];
  const neptuneExpected = {
      id : "899", 
      name : "Neptune",
      sizeRadius : "24624", 
      coordinate : {
        x : "4.567398114374511E+09", 
        y : "-2.794219386842926E+08",
        z : "-9.485098077934098E+07"
      },
      rotationSpeed : "0.000108338", 
      rotationDuration : "16.11", 
      orbitSpeed : "5.43", 
      orbitDuration : "164.788501027", 
      oblliquity : "28.32",
      density : "1.638",
      meanTemperature : "Unknown"
  };

  //When
  const result = horizonAPIFilter(neptune);

  //Then
  expect(result).toEqual(neptuneExpected);

})

/**
 * Test horizonAPIFilter() function should return Moon (Luna) data
 */
test('horizonAPIFilter() should return Moon (Luna) data', () => {
  //Given
  const moon = Allplanets.moons[0];
  const moonExpected = {
      id : "301", 
      name : "Moon",
      sizeRadius : "1737.53", 
      coordinate : {
        x : "-3.599084823076050E+05", 
        y : "-1.437692228511653E+05",
        z : "7.425111683050563E+03"
      },
      rotationSpeed : "0.0000026617", 
      rotationDuration : "27.3", 
      orbitSpeed : "1.023219504166749", 
      orbitDuration : "0.07479452054", 
      oblliquity : "6.67",
      density : "3.3437",
      meanTemperature : "Unknown"
  };

  //When
  const result = horizonAPIFilter(moon);

  //Then
  expect(result).toEqual(moonExpected);
});
