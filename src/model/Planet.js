class Planet extends PlanetaryCelestialBodies{

    constructor(moonsList) {
        this.moonsList = moonsList;
    }

    get moonsList() {
        return this.moonsList;
    }
}