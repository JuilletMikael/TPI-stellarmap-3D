/**
 *  @file      jsonConvertion.js
 *  @brief     Principal file
 *  @author    Created by Miakel Juillet
 *  @version   09.05.2023
 */

export function horizonAPI(data) {
  
  let texteSansEspaces = data.replace(/\s+/g, "");
  
  const regexNameID = /Revised:\w+\d+,\d+([^\d]+)(\d+)/
  const regexDensity = /Density\,?(?:\(?gcm\^\-?3\)?|\(?g\/cm\^\-?3\)?)=(\d+\.\d+)/
  const regexRotationRate = /[Rr]ot\.[Rr]ate\,?\(?rad\/s\)?=(-?\d+\.\d+)/
  const regexMeanRadius = /Vol\.[Mm]ean[Rr]adius\(km\)=([\d.]+)/
  // eart (2) = /Siderealorbperiod=([\d.]+)//(Siderealorb\.per\.d=|Siderealorbperiod=|siderealorbper=|Siderealorbitperiod=)(\d+(\.\d+)?)(?!y)/
  const regexOrbitPeriod = /(Siderealorb\.per\.\,?y?=|Siderealorbperiod=|siderealorbper=|Siderealorbitperiod=)(\d+(?:\.\d+)?)/
  // earth (2) = /Meansurfacetemp\(Ts\),K=([\d.]+)/ if temps == null temp == unknown | réfléchir a enlever la température car chiant
  const regexMeanTemp = /(Mean[Tt]emperature\(K\)=|Meansurfacetemp\(Ts\),K=)([\d.]+)/
  // earth (2) = /Obliquitytoorbit,deg=([\d.-]+)/
  const regexObliquity = /(Obliquitytoorbit\[?1?\]?=|Obliquitytoorbit,deg=)([\d.-]+)/
  // earth (2) = /Meansiderealday,hr=([\d.]+)/
  const regexRotationDays = /(Siderealrot\.period=|Sid.rot.period\(III\)=|Meansiderealday,hr=)([\dhms.]+)/
  //earth (2) = /Orbitalspeed,km\/s=([\d.]+)/
  const regexOrbitalSpeed = /([Oo]rbitvel\.km\/s=|Orbitalspeed,km\/s=|[Oo]rbitspeed\,km\/s=|orbitvelocity=)([\d.]+)/
  const regexPlacment = /(-?\d+(?:\.\d+)?(?:E[+-]?\d+)?)Y=(-?\d+(?:\.\d+)?(?:E[+-]?\d+)?)Z=(-?\d+(?:\.\d+)?(?:E[+-]?\d+)?)/

 
  const iregexNameID = texteSansEspaces.match(regexNameID);
  const iregexDensity = texteSansEspaces.match(regexDensity);
  const iregexRotationRate = texteSansEspaces.match(regexRotationRate);
  const iregexMeanRadius = texteSansEspaces.match(regexMeanRadius);
  const iregexOrbitPeriod  = texteSansEspaces.match(regexOrbitPeriod);
  let iregexMeanTemp = texteSansEspaces.match(regexMeanTemp);
  const iregexObliquity = texteSansEspaces.match(regexObliquity);
  const iregexRotationDays = texteSansEspaces.match(regexRotationDays);
  const iregexOrbitalSpeed = texteSansEspaces.match(regexOrbitalSpeed);
  const iregexPlacment = texteSansEspaces.match(regexPlacment);

function filterTemp(){
  if (iregexMeanTemp === null) { return iregexMeanTemp = "Unknown"}
    else { return iregexMeanTemp[2]}
}
  
  return {
    id : iregexNameID[2], 
    name : iregexNameID[1],
    sizeRadius : iregexMeanRadius[1], 
    material : iregexNameID[1] + ".png", 
    coordinate : {
      x : iregexPlacment[1], 
      y : iregexPlacment[2],
      z : iregexPlacment[3]
    },
    rotationSpeed : iregexRotationRate[1], 
    rotationDuration : iregexRotationDays[2], 
    orbitSpeed : iregexOrbitalSpeed[2], 
    orbitDuration : iregexOrbitPeriod[2], 
    oblliquity : iregexObliquity[2],
    density : iregexDensity[1],
    meanTemperature :  filterTemp() 
  }; 
}