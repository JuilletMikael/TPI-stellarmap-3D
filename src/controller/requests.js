/**
 *  @file      requests.js
 *  @brief     Controller used to make to handle requests.
 *  @author    Created by Miakel Juillet
 *  @version   12.05.2023
 */

import { GetNearEarthObjects } from '../model/requests.js';
import moment from 'moment';

/**
 * Get asteroid List with the actual date and yesterday date and the key 
 *
 * @return  
 */
export async function GetAsteroid() {
    const APIkey = import.meta.env.VITE_API_KEY;
    const startDate = moment().subtract(1, 'day').format('YYYY-MM-DD');
    const endDate = moment().format('YYYY-MM-DD');

    return await GetNearEarthObjects(APIkey, startDate, endDate);
}