import {createTimeOfInterest} from '../time';
import Venus from '../planets/Venus';
import Moon from '../moon/Moon';
import Sun from '../sun/Sun';
import {
    STANDARD_ALTITUDE_MOON_CENTER_REFRACTION,
    STANDARD_ALTITUDE_PLANET_REFRACTION,
    STANDARD_ALTITUDE_SUN_UPPER_LIMB_REFRACTION,
} from '../constants/standardAltitude';
import {getRise, getSet, getTransit} from './riseSetTransitCalc';
import {round} from './math';

const toi = createTimeOfInterest.fromTime(1988, 3, 20, 0, 0, 0);
const jd0 = toi.getJulianDay0();

it('tests getTransit', async () => {
    const location = {
        lat: 42.3333,
        lon: -71.0833,
    };

    const jd = await getTransit(Venus, location, jd0);

    expect(round(jd, 6)).toBe(2447241.319796);
});

describe('test for getRise', () => {
    it('tests rise of venus', async () => {
        const location = {
            lat: 42.3333,
            lon: -71.033,
        };

        const jd = await getRise(Venus, location, jd0, STANDARD_ALTITUDE_PLANET_REFRACTION);

        expect(round(jd, 6)).toBe(2447241.017517);
    });

    it('is not possible to rise sun because of midnight sun', async () => {
        const jd0 = 2459001.5;
        const location = {
            lat: 80,
            lon: 0,
        };

        try {
            await getRise(Sun, location, jd0, STANDARD_ALTITUDE_SUN_UPPER_LIMB_REFRACTION);

            fail('Expected error was not thrown');
        } catch (error) {
            expect(error.message).toBe('Astronomical object cannot rise on given day 2459001.5.');
        }
    });

    it('is not possible to rise moon because rise happens the next day', async () => {
        const jd0 = 2459163.5;
        const location = {
            lat: 52.519,
            lon: 13.408,
        };

        try {
            await getRise(Moon, location, jd0, STANDARD_ALTITUDE_MOON_CENTER_REFRACTION);

            fail('Expected error was not thrown');
        } catch (error) {
            expect(error.message).toBe(
                'Astronomical object cannot rise on given day 2459163.5. Rise happens the next day.',
            );
        }
    });
});

describe('test for getSet', () => {
    it('tests set of venus', async () => {
        const location = {
            lat: 42.3333,
            lon: -71.033,
        };

        const jd = await getSet(Venus, location, jd0, STANDARD_ALTITUDE_PLANET_REFRACTION);

        expect(round(jd, 6)).toBe(2447240.621156);
    });

    it('is not possible to set sun because of midnight sun', async () => {
        const jd0 = 2459001.5;
        const location = {
            lat: 80,
            lon: 0,
        };

        try {
            await getSet(Sun, location, jd0, STANDARD_ALTITUDE_SUN_UPPER_LIMB_REFRACTION);

            fail('Expected error was not thrown');
        } catch (error) {
            expect(error.message).toBe('Astronomical object cannot set on given day 2459001.5.');
        }
    });

    it('is not possible to set moon because set happens the next day', async () => {
        const jd0 = 2459177.5;
        const location = {
            lat: 52.519,
            lon: 13.408,
        };

        try {
            await getSet(Moon, location, jd0, STANDARD_ALTITUDE_MOON_CENTER_REFRACTION);

            fail('Expected error was not thrown');
        } catch (error) {
            expect(error.message).toBe(
                'Astronomical object cannot set on given day 2459177.5. Set happens the next day.',
            );
        }
    });
});