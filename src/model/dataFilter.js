/**
 *  @file      jsonConvertion.js
 *  @brief     Principal file
 *  @author    Created by Miakel Juillet
 *  @version   09.05.2023
 */

export function horizonAPI(data) {
  let texteSansEspaces = data.replace(/\s+/g, "");

  const regexRadius = /Vol\.MeanRadius\(km\)=(\d+(?:\.\d+)?)/;
  //const regexRotationRate = /rot\.rate(?:,)?\(rad\/s\)=\s*(-?\d+\.\d+)/;

  console.log(texteSansEspaces);
  
  const regexNameID = /Revised:\w+\d+,\d+([^\d]+)(\d+)/
  const regexDensity = /Density(?:\(gcm\^-3\)|,g\/cm\^3)=(\d+\.\d+)/
  const regexRotationRate = /[Rr]ot\.[Rr]ate\(rad\/s\)=(-?\d+\.\d+)/
  const regexMeanRadius = /Vol\.MeanRadius\(km\)=([\d.]+)/
  // eart (2) = /Siderealorbperiod=([\d.]+)/
  const regexOrbitPeriod = /Siderealorb\.per\.=([\d.]+)/
  // earth (2) = /Meansurfacetemp\(Ts\),K=([\d.]+)/
  const regexMeanTemp = /MeanTemperature\(K\)=([\d.]+)/
  // earth (2) = /Obliquitytoorbit,deg=([\d.-]+)/
  const regexObliquity = /Obliquitytoorbit\[1\]=([\d.-]+)/
  // earth (2) = /Meansiderealday,hr=([\d.]+)/
  const regexRotationDays = /Siderealrot\.period=([\d.]+)/
  //earth (2) = /Orbitalspeed,km\/s=([\d.]+)/
  const regexOrbitalSpeed = /MeanOrbitvel\.km\/s=([\d.]+)/
  const regexPlacment = /(-?\d+(?:\.\d+)?(?:E[+-]?\d+)?)Y=(-?\d+(?:\.\d+)?(?:E[+-]?\d+)?)Z=(-?\d+(?:\.\d+)?(?:E[+-]?\d+)?)/

 
  const iregexNameID = texteSansEspaces.match(regexNameID);
  const iregexDensity = texteSansEspaces.match(regexDensity);
  const iregexRotationRate = texteSansEspaces.match(regexRotationRate);
  const iregexMeanRadius = texteSansEspaces.match(regexMeanRadius);
  const iregexOrbitPeriod  = texteSansEspaces.match(regexOrbitPeriod);
  const iregexMeanTemp = texteSansEspaces.match(regexMeanTemp);
  const iregexObliquity = texteSansEspaces.match(regexObliquity);
  const iregexRotationDays = texteSansEspaces.match(regexRotationDays);
  const iregexOrbitalSpeed = texteSansEspaces.match(regexOrbitalSpeed);
  const iregexPlacment = texteSansEspaces.match(regexPlacment);

  console.log(iregexNameID)
  console.log(iregexDensity)
  console.log(iregexRotationRate )
  console.log(iregexMeanRadius)
  console.log(iregexOrbitPeriod  )
  console.log(iregexMeanTemp)
  console.log(iregexObliquity)
  console.log(iregexRotationDays )
  console.log(iregexOrbitalSpeed )
  console.log(iregexPlacment)

  
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
    rotationDuration : iregexRotationDays[1], 
    orbitSpeed : iregexOrbitalSpeed[1], 
    orbitDuration : iregexOrbitPeriod[1], 
    oblliquity : iregexObliquity[1],
    density : iregexDensity[1],
    meanTemperature : iregexMeanTemp[1]
  }; 
    

}