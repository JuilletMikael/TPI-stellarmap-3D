/**
 *  @file      main.js
 *  @brief     Principal file
 *  @author    Created by Miakel Juillet
 *  @version   12.05.2023
 */

import Allplanets from './src/assets/AllPlanetsData-08-05-2023.json';
import {horizonAPIFilter} from './src/model/dataFilter.js';

console.log(horizonAPIFilter(Allplanets.planets[0].result));