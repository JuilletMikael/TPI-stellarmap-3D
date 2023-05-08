/**
 *  @file      requests.js
 *  @brief     Controller used to make to handle requests.
 *  @author    Created by Miakel Juillet
 *  @version   08.05.2023
 */

import { GetNearEarthObjects, GetHorizonSpecificBody } from '../model/requests.js';

export async function GetPlanetaryCelestialBodies(body) {

    console.log(await GetHorizonSpecificBody(body));
}
