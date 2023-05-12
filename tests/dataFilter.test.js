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

    const mercury = Allplanets.planets[0].result;
    const mercuryExpected = {
        id : "199", 
        name : "Mercury",
        sizeRadius : "2440", 
        material : "Mercury.png", 
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

    const result = horizonAPIFilter(mercury);

    expect(result).toEqual(mercuryExpected);

});

/**
 * Test horizonAPIFilter() function should return Mercury data
 */
test('horizonAPIFilter() should return Venus data', () => {

    const venus = Allplanets.planets[1].result;
    const venusExpected = {
        id : "299", 
        name : "Venus",
        sizeRadius : "6051.84", 
        material : "Venus.png", 
        coordinate : {
          x : "1.073618289428096E+07", 
          y : "1.428930836016723E+08",
          z : "6.291878178878881E+06"
        },
        rotationSpeed : "-0.00000029924", 
        rotationDuration : "243.018484", 
        orbitSpeed : "35.021", 
        orbitDuration : "0.61519726", 
        oblliquity : "177.3",
        density : "5.204",
        meanTemperature : "735"
    };

    const result = horizonAPIFilter(venus);

    expect(result).toEqual(venusExpected);

});

/**
 * Test horizonAPIFilter() function should return Earth data
 */
test('horizonAPIFilter() should return Earth data', () => {

    const earth = Allplanets.planets[2].result;
    const earthExpected = {
        id : "399", 
        name : "Earth",
        sizeRadius : "6371.01", 
        material : "Earth.png", 
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

    const result = horizonAPIFilter(earth);

    expect(result).toEqual(earthExpected);

})

/**
 * Test horizonAPIFilter() function should return Mars data 
 */
test('horizonAPIFilter() should return Mars data', () => {

    const mars = Allplanets.planets[3].result;
    const marsExpected = {
        id : "499", 
        name : "Mars",
        sizeRadius : "3389.92", 
        material : "Mars.png", 
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

    const result = horizonAPIFilter(mars);

    expect(result).toEqual(marsExpected);

})

/**
 * Test horizonAPIFilter() function should return Jupiter data
*/
test('horizonAPIFilter() should return Jupiter data', () => {

    const jupiter = Allplanets.planets[4].result;
    const jupiterExpected = {
        id : "599", 
        name : "Jupiter",
        sizeRadius : "69911", 
        material : "Jupiter.png", 
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

    const result = horizonAPIFilter(jupiter);

    expect(result).toEqual(jupiterExpected);

})
 
/**
 * Test horizonAPIFilter() function should return Saturn data
*/
test('horizonAPIFilter() should return Saturn data', () => {

    const saturn = Allplanets.planets[5].result;
    const saturnExpected = {
        id : "699", 
        name : "Saturn",
        sizeRadius : "58232", 
        material : "Saturn.png", 
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

    const result = horizonAPIFilter(saturn);

    expect(result).toEqual(saturnExpected);

})

/**
 * Test horizonAPIFilter() function should return Uranus data
 */
test('horizonAPIFilter() should return Uranus data', () => {

    const uranus = Allplanets.planets[6].result;
    const uranusExpected = {
        id : "799", 
        name : "Uranus",
        sizeRadius : "25362", 
        material : "Uranus.png", 
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

    const result = horizonAPIFilter(uranus);

    expect(result).toEqual(uranusExpected);

})

/**
 * Test horizonAPIFilter() function should return Neptune data
 */
test('horizonAPIFilter() should return Neptune data', () => {

    const neptune = Allplanets.planets[7].result;
    const neptuneExpected = {
        id : "899", 
        name : "Neptune",
        sizeRadius : "24624", 
        material : "Neptune.png", 
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

    const result = horizonAPIFilter(neptune);

    expect(result).toEqual(neptuneExpected);

})