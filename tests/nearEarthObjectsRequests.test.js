/**
 *  @file      nearEarthObjects.test.js
 *  @brief     Used to test filtredata function to be sure every thing working.  
 *  @author    Created by Miakel Juillet
 *  @version   12.05.2023
 */

import { expect, test } from 'vitest';
import moment from 'moment';
import { GetNearEarthObjects } from './src/model/requests.js';

const APIkey = import.meta.env.VITE_API_KEY;

/**
 * Test NearEarthObjects sould return more than 3 value
 */
test('NearEarthObjects should return more than 3 data', async () => {

    //Given
    const startDate = moment().subtract(1, 'day').format('YYYY-MM-DD');
    const endDate = moment().format('YYYY-MM-DD');
    const apiKey = APIkey;
    //When
    const result = Object.keys(await GetNearEarthObjects(apiKey, startDate, endDate));
    //Then
    expect(result).toHaveLength(3);

})

/**
 * Test NearEarthObjects should return error API_KEY_INVALID
 */
test('NearEarthObjects should return error API_KEY_INVALID', async () => {

    //Given
    const startDate = moment().subtract(1, 'day').format('YYYY-MM-DD');
    const endDate = moment().format('YYYY-MM-DD');
    const apiKey = APIkey + "Fake";
    //When
    const result = await GetNearEarthObjects(apiKey, startDate, endDate);
    //Then
    expect(result.error).toHaveProperty(["code"], "API_KEY_INVALID");

})
