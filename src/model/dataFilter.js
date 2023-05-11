/**
 *  @file      jsonConvertion.js
 *  @brief     Principal file
 *  @author    Created by Miakel Juillet
 *  @version   09.05.2023
 */

export function horizonAPI(data) {
  console.log(data);
  let texteSansEspaces = data.replace(/\s+/g, "");
  console.log(texteSansEspaces);

  const regexDensity = /Density \(g\/cm\^3\)=(\d+(\.\d{1,6})?)/;
  const regexRadius = /Vol\.MeanRadius\(km\)=(\d+(?:\.\d+)?)/;
  //const regexRotationRate = /rot\.rate(?:,)?\(rad\/s\)=\s*(-?\d+\.\d+)/;
  const regexRotationRate = /[Rr]ot\.[Rr]ate\(rad\/s\)=(-?\d+\.\d+)/
  const regexMeanRadius = /Vol\.MeanRadius\(km\)=([\d.]+)/
  const regexOrbitPeriod = /Siderealorbperiod=([\d.]+)/
  const regexMeanTemp = /Meansurfacetemp\(Ts\),K=([\d.]+)/
  const regexObliquity = /Obliquitytoorbit,deg=([\d.-]+)/
  const regexRotationDays = /Meansiderealday,hr=([\d.]+)/
  const regexOrbitalSpeed = /Orbitalspeed,km\/s=([\d.]+)/
  const regexPlacment = /(-?\d+(?:\.\d+)?(?:E[+-]?\d+)?)Y=(-?\d+(?:\.\d+)?(?:E[+-]?\d+)?)Z=(-?\d+(?:\.\d+)?(?:E[+-]?\d+)?)/

  const iregexRotationRate = texteSansEspaces.match(regexRotationRate);
  const iregexMeanRadius = texteSansEspaces.match(regexMeanRadius);
  const iregexOrbitPeriod  = texteSansEspaces.match(regexOrbitPeriod);
  const iregexMeanTemp = texteSansEspaces.match(regexMeanTemp);
  const iregexObliquity = texteSansEspaces.match(regexObliquity);
  const iregexRotationDays = texteSansEspaces.match(regexRotationDays);
  const iregexOrbitalSpeed = texteSansEspaces.match(regexOrbitalSpeed);
  const iregexPlacment = texteSansEspaces.match(regexPlacment);

  
  return {
    id : 111, 
    name : "yieuy",
    sizeRadius : iregexMeanRadius[1], 
    material : "yieuy.png", 
    coordinate : {
      x : iregexPlacment[1], 
      y : iregexPlacment[2],
      z : iregexPlacment[3]
    },
    rotationSpeed : iregexRotationRate[1], 
    rotationDuration : iregexRotationDays[1], 
    orbitSpeed : iregexOrbitalSpeed[1], 
    orbitDuration : iregexOrbitPeriod[1], 
    oblliquity : iregexObliquity[1],
    density : "yaaaaaaaaaa",
    meanTemperature : iregexMeanTemp[1]
  }; 
    

}