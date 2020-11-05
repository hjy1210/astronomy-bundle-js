import {round} from '../utils/math';
import {createTimeOfInterest} from '../time';
import Venus from './Venus';

const toi = createTimeOfInterest.fromTime(2000, 1, 1, 0, 0, 0);
const venus = new Venus(toi);

it('tests getHeliocentricRectangularJ2000Coordinates', async () => {
    const coords = await venus.getHeliocentricRectangularJ2000Coordinates();

    expect(round(coords.x, 8)).toBe(-0.7186302);
    expect(round(coords.y, 8)).toBe(-0.02250409);
    expect(round(coords.z, 8)).toBe(0.04117196);
});

it('tests getHeliocentricRectangularDateCoordinates', async () => {
    const coords = await venus.getHeliocentricRectangularDateCoordinates();

    expect(round(coords.x, 8)).toBe(-0.71863021);
    expect(round(coords.y, 8)).toBe(-0.02250385);
    expect(round(coords.z, 8)).toBe(0.04117196);
});

it('tests getHeliocentricEclipticSphericalJ2000Coordinates', async () => {
    const coords = await venus.getHeliocentricEclipticSphericalJ2000Coordinates();

    expect(round(coords.lon, 8)).toBe(181.79364626);
    expect(round(coords.lat, 8)).toBe(3.27741784);
    expect(round(coords.radiusVector, 8)).toBe(0.72016035);
});

it('tests getHeliocentricEclipticSphericalDateCoordinates', async () => {
    const coords = await venus.getHeliocentricEclipticSphericalDateCoordinates();

    expect(round(coords.lon, 8)).toBe(181.79362696);
    expect(round(coords.lat, 8)).toBe(3.27741787);
    expect(round(coords.radiusVector, 8)).toBe(0.72016035);
});

it('tests getGeocentricRectangularJ2000Coordinates', async () => {
    const coords = await venus.getGeocentricRectangularJ2000Coordinates();

    expect(round(coords.x, 8)).toBe(-0.5501052);
    expect(round(coords.y, 8)).toBe(-0.99128734);
    expect(round(coords.z, 8)).toBe(0.04117589);
});

it('tests getGeocentricRectangularDateCoordinates', async () => {
    const coords = await venus.getGeocentricRectangularDateCoordinates();

    expect(round(coords.x, 8)).toBe(-0.55010552);
    expect(round(coords.y, 8)).toBe(-0.99128715);
    expect(round(coords.z, 8)).toBe(0.0411759);
});

it('tests getGeocentricEclipticSphericalJ2000Coordinates', async () => {
    const coords = await venus.getGeocentricEclipticSphericalJ2000Coordinates();

    expect(round(coords.lon, 8)).toBe(240.97234473);
    expect(round(coords.lat, 8)).toBe(2.08007147);
    expect(round(coords.radiusVector, 8)).toBe(1.13444337);
});

it('tests getGeocentricEclipticSphericalDateCoordinates', async () => {
    const coords = await venus.getGeocentricEclipticSphericalDateCoordinates();

    expect(round(coords.lon, 8)).toBe(240.97232569);
    expect(round(coords.lat, 8)).toBe(2.08007164);
    expect(round(coords.radiusVector, 8)).toBe(1.13444337);
});