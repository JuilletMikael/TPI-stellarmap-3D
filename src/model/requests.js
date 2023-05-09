/**
 *  @file      requests.js
 *  @brief     Model that used to make requests.
 *  @author    Created by Miakel Juillet
 *  @version   08.05.2023
 */

import moment from 'moment';

const urlHorizon = import.meta.env.VITE_API_URL_HORIZON;
const urlNeo = import.meta.env.VITE_API_URL_NEO;
const APIkey = import.meta.env.VITE_API_KEY;

/**
 * Get information about a specicific body
 * 
 * @param 
 * @return Response from API 
 */
export function GetHorizonSpecificBody(bodyId) {
    return new Promise(resolve => {
        const parameters = {};
        parameters.format = 'json';
        parameters.COMMAND = bodyId;
        parameters.OBJ_DATA = 'YES';
        parameters.MAKE_EPHEM = 'YES';
        parameters.EPHEM_TYPE = 'VECTORS';
        parameters.START_TIME = moment().subtract(1, 'day').format('YYYY-MM-DD');
        parameters.STOP_TIME = moment().format('YYYY-MM-DD');
        parameters.STEP_SIZE = '1d';

        fetch(formatURL(urlHorizon, parameters), {
            headers: {
                'Origin' : 'http://localhost:5173'
              }
        })
        .then(response => {
            resolve(response);
        })
        .catch(error => {
            console.error('Error:', error);
            resolve(error);
        });
  
    })
}
  
/**
 * Get near earth objects informations
 *
 * @return Response from API 
 */
export function GetNearEarthObjects() {
    return new Promise(resolve => {
        const parameters = {};
        parameters.start_date = moment().subtract(1, 'day').format('YYYY-MM-DD');
        parameters.end_date = moment().format('YYYY-MM-DD');
        parameters.api_key = APIkey;

        fetch(formatURL(urlNeo, parameters))
        .then(response => {
            console.log(response)
            return response.json()
        })
        .then(data => {
            console.log(data)
            resolve(data.data);
        })
        .catch(function (err) {
            console.log("Something went wrong!", err);
        });
  
    })
}

/**
 * Format url to add parameters to the url
 *
 * @param url target url 
 * @param parameters all parameters for the requests
 * @return  fullURL formated
 */
function formatURL(url, parameters) {
  
    var fullURL = url + "?";

    Object.keys(parameters).forEach( (key, index) => {
        fullURL = fullURL + key + "=" + parameters[key]

        if (index !== Object.keys(parameters).length - 1) {
            fullURL = fullURL + "&";
        }

    });

    return fullURL;
}