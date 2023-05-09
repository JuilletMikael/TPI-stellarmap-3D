/**
 *  @file      jsonConvertion.js
 *  @brief     Principal file
 *  @author    Created by Miakel Juillet
 *  @version   09.05.2023
 */

export function horizonAPI(data) {
    
    let texteSansEspaces = data.replace(/\s+/g, "");
    console.log(texteSansEspaces);

    const regexDensity = /Density \(g\/cm\^3\)=(\d+(\.\d{1,6})?)/;
    const regexRadius = /Vol\.MeanRadius\(km\)=(\d+(?:\.\d+)?)/;
    const regex = /rot\. rate(?:,)? \(rad\/s\) =\s*(-?\d+\.\d+)/;

    const match = texteSansEspaces.match(regex);
    
    if (match !== null) {
      console.log(match[1]);
    } else {
      console.log("Aucune correspondance trouvée.");
    }
    

}