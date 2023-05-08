/**
 *  @file      Planet.js
 *  @brief     Class of Planet
 *  @author    Created by Miakel Juillet
 *  @version   08.05.2023
 */


class Planet extends PlanetaryCelestialBodies{

    constructor(moonsList) {
        this.moonsList = moonsList;
    }

    get moonsList() {
        return this.moonsList;
    }
}