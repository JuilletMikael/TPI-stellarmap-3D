import { expect, test } from 'vitest';
import {horizonAPI} from './src/model/dataFilter.js';
import Allplanets from './src/assets/AllPlanetsData-08-05-2023.json';

test('horizonAPI() should return Mercury data', () => {

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

    const result = horizonAPI(mercury);

    expect(result).toEqual(mercuryExpected);

});

test('horizonAPI() should return Venus data', () => {

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
        orbitDuration : "224.70079922", 
        oblliquity : "177.3",
        density : "5.204",
        meanTemperature : "735"
    };

    const result = horizonAPI(venus);

    expect(result).toEqual(venusExpected);

});


test('horizonAPI() should return Earth data', () => {

    const earth = Allplanets.planets[2].result;
    const earthExpected = {
        id : "399", 
        name : "Earth",
        sizeRadius : "6371.01", 
        material : "Earth.png", 
        coordinate : {
          x : "1.073618289428096E+07", 
          y : "1.428930836016723E+08",
          z : "6.291878178878881E+06"
        },
        rotationSpeed : "0.00007292115", 
        rotationDuration : "24", 
        orbitSpeed : "29.79", 
        orbitDuration : "365.25636", 
        oblliquity : "23.4392911",
        density : "5.51",
        meanTemperature : "255"
    };

    const result = horizonAPI(earth);

    expect(result).toEqual(earthExpected);

})

test('horizonAPI() should return Mars data', () => {

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
        rotationDuration : "24.622962", 
        orbitSpeed : "24.13 ", 
        orbitDuration : "686.98", 
        oblliquity : "25.19",
        density : "3.933",
        meanTemperature : "210"
    };

    const result = horizonAPI(mars);

    expect(result).toEqual(marsExpected);

})

test('horizonAPI() should return Jupiter data', () => {

    const jupiter = Allplanets.planets[4].result;
    const jupiterExpected = {
        id : "599", 
        name : "Jupiter",
        sizeRadius : "71492", 
        material : "Jupiter.png", 
        coordinate : {
          x : "7.900239544305509E+08", 
          y : "3.977974646088730E+08",
          z : "-1.643804799922679E+07"
        },
        rotationSpeed : "0.00017585", 
        rotationDuration : "9h 55m 29.71s", 
        orbitSpeed : "13.0697", 
        orbitDuration : "11.861982204", 
        oblliquity : "3.13",
        density : "1.3262",
        meanTemperature : "165"
    };

    const result = horizonAPI(jupiter);

    expect(result).toEqual(jupiterExpected);

})
 

test('horizonAPI() should return Saturn data', () => {

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
        rotationDuration : "10h 39m 22.4s", 
        orbitSpeed : "9.68", 
        orbitDuration : "29.447498", 
        oblliquity : "26.73",
        density : "0.687",
        meanTemperature : "134"
    };

    const result = horizonAPI(saturn);

    expect(result).toEqual(saturnExpected);

})

test('horizonAPI() should return Uranus data', () => {

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
        meanTemperature : "76"
    };

    const result = horizonAPI(uranus);

    expect(result).toEqual(uranusExpected);

})



test('horizonAPI() should return Neptune data', () => {

    const neptune = Allplanets.planets[7].result;
    const neptuneExpected = {
        id : "899", 
        name : "Neptune",
        sizeRadius : "24622", 
        material : "Neptune.png", 
        coordinate : {
          x : "4.565706901419279E+09", 
          y : "-2.770728733134779E+08",
          z : "-9.486172147488065E+07"
        },
        rotationSpeed : "1.08333333", 
        rotationDuration : "16.11", 
        orbitSpeed : "5.43", 
        orbitDuration : "164.79", 
        oblliquity : "28.32",
        density : "1.638",
        meanTemperature : "72"
    };

    const result = horizonAPI(neptune);

    expect(result).toEqual(neptuneExpected);

})
