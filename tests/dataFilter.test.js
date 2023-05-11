import { test } from 'vitest';
import {horizonAPI} from '../src/model/dataFilter.js';
import {horizonAPI} from './src/model/dataFilter.js';

test('horizonAPI() should return Mercury data', () => {

    horizonAPI(Allplanets.planets[0].result);


})