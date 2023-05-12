/**
 *  @file      dataFilter.js
 *  @brief     Used to filter data coming from api 
 *  @author    Created by Miakel Juillet
 *  @version   12.05.2023
 */

/**
 * This function used to catch with regex data in the text returned by horizon API.
 *
 * @param data  big string - returned by API correspondant to a specific planet.
 * @return  object - content list of elements getted in data entry
 */
export function horizonAPIFilter(data) {
  
  // Delete space in text to have uniform data
  let texteSansEspaces = data.replace(/\s+/g, "");
  
  // Regex define for all elements
  const regexNameID = /Revised:\w+\d+,\d+([^\d]+)(\d+)/
  const regexDensity = /Density\,?(?:\(?gcm\^\-?3\)?|\(?g\/cm\^\-?3\)?)=(\d+\.\d+)/
  const regexRotationRate = /[Rr]ot\.[Rr]ate\,?\(?rad\/s\)?=(-?\d+\.\d+)/
  const regexMeanRadius = /Vol\.[Mm]ean[Rr]adius\(km\)=([\d.]+)/
  const regexOrbitPeriod = /(Siderealorb\.per\.\,?y?=|Siderealorbperiod=|siderealorbper=|Siderealorbitperiod=)(\d+(?:\.\d+)?)/
  const regexMeanTemp = /(Mean[Tt]emperature\(K\)=|Meansurfacetemp\(Ts\),K=)([\d.]+)/
  const regexObliquity = /(Obliquitytoorbit\[?1?\]?=|Obliquitytoorbit,deg=)([\d.-]+)/
  const regexRotationDays = /(Siderealrot\.period=|Sid.rot.period\(III\)=|Meansiderealday,hr=)([\dhms.]+)/
  const regexOrbitalSpeed = /([Oo]rbitvel\.km\/s=|Orbitalspeed,km\/s=|[Oo]rbitspeed\,km\/s=|orbitvelocity=)([\d.]+)/
  const regexPlacment = /(-?\d+(?:\.\d+)?(?:E[+-]?\d+)?)Y=(-?\d+(?:\.\d+)?(?:E[+-]?\d+)?)Z=(-?\d+(?:\.\d+)?(?:E[+-]?\d+)?)/


  // Match data with regex
  const matchNameID = texteSansEspaces.match(regexNameID);
  const matchDensity = texteSansEspaces.match(regexDensity);
  const matchRotationRate = texteSansEspaces.match(regexRotationRate);
  const matchMeanRadius = texteSansEspaces.match(regexMeanRadius);
  const matchOrbitPeriod  = texteSansEspaces.match(regexOrbitPeriod);
  const matchMeanTemp = texteSansEspaces.match(regexMeanTemp);
  const matchObliquity = texteSansEspaces.match(regexObliquity);
  const matchRotationDays = texteSansEspaces.match(regexRotationDays);
  const matchOrbitalSpeed = texteSansEspaces.match(regexOrbitalSpeed);
  const matchPlacment = texteSansEspaces.match(regexPlacment);
  
  // Return data in object form
  return {
    id : matchNameID[2], 
    name : matchNameID[1],
    sizeRadius : matchMeanRadius[1], 
    material : matchNameID[1] + ".png", 
    coordinate : {
      x : matchPlacment[1], 
      y : matchPlacment[2],
      z : matchPlacment[3]
    },
    rotationSpeed : matchRotationRate[1], 
    rotationDuration : matchRotationDays[2], 
    orbitSpeed : matchOrbitalSpeed[2], 
    orbitDuration : matchOrbitPeriod[2], 
    oblliquity : matchObliquity[2],
    density : matchDensity[1],
    meanTemperature :  matchMeanTemp ? matchMeanTemp[2] : "Unknown" 
  }; 
}