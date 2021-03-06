import {observationCalc} from '../utils';
import AstronomicalObject from '../astronomicalObject/AstronomicalObject';
import IRectangularCoordinates from '../coordinates/interfaces/IRectangularCoordinates';
import IEclipticSphericalCoordinates from '../coordinates/interfaces/IEclipticSphericalCoordinates';
import {DIAMETER_SUN} from '../constants/diameters';
import {earthEclipticSpherical2sunEclipticSpherical, spherical2rectangular} from '../utils/coordinateCalc';
import TimeOfInterest from '../time/TimeOfInterest';
import Earth from '../earth/Earth';
import {createEarth} from '../earth';
import {correctEffectOfAberration, correctEffectOfNutation} from '../utils/apparentCoordinateCalc';
import ILocation from '../earth/interfaces/ILocation';
import {createTimeOfInterest} from '../time';
import {getRise, getSet, getTransit} from '../utils/riseSetTransitCalc';
import {
    STANDARD_ALTITUDE_SUN_CENTER_REFRACTION,
    STANDARD_ALTITUDE_SUN_UPPER_LIMB_REFRACTION
} from '../constants/standardAltitude';

export default class Sun extends AstronomicalObject {
    protected name = 'sun';

    private earth: Earth;

    constructor(toi?: TimeOfInterest) {
        super(toi);

        this.earth = createEarth(toi);
    }

    public async getHeliocentricEclipticRectangularJ2000Coordinates(): Promise<IRectangularCoordinates> {
        return Promise.resolve({x: 0, y: 0, z: 0});
    }

    public async getHeliocentricEclipticRectangularDateCoordinates(): Promise<IRectangularCoordinates> {
        return Promise.resolve({x: 0, y: 0, z: 0});
    }

    public async getHeliocentricEclipticSphericalJ2000Coordinates(): Promise<IEclipticSphericalCoordinates> {
        return Promise.resolve({lon: 0, lat: 0, radiusVector: 0});
    }

    public async getHeliocentricEclipticSphericalDateCoordinates(): Promise<IEclipticSphericalCoordinates> {
        return Promise.resolve({lon: 0, lat: 0, radiusVector: 0});
    }

    public async getGeocentricEclipticRectangularJ2000Coordinates(): Promise<IRectangularCoordinates> {
        const coords = await this.getGeocentricEclipticSphericalJ2000Coordinates();

        return spherical2rectangular(coords.lon, coords.lat, coords.radiusVector);
    }

    public async getGeocentricEclipticRectangularDateCoordinates(): Promise<IRectangularCoordinates> {
        const coords = await this.getGeocentricEclipticSphericalDateCoordinates();

        return spherical2rectangular(coords.lon, coords.lat, coords.radiusVector);
    }

    public async getGeocentricEclipticSphericalJ2000Coordinates(): Promise<IEclipticSphericalCoordinates> {
        const coords = await this.earth.getHeliocentricEclipticSphericalJ2000Coordinates();

        return earthEclipticSpherical2sunEclipticSpherical(coords);
    }

    public async getGeocentricEclipticSphericalDateCoordinates(): Promise<IEclipticSphericalCoordinates> {
        const coords = await this.earth.getHeliocentricEclipticSphericalDateCoordinates();

        return earthEclipticSpherical2sunEclipticSpherical(coords);
    }

    public async getApparentGeocentricEclipticSphericalCoordinates(): Promise<IEclipticSphericalCoordinates> {
        let coords = await this.getGeocentricEclipticSphericalDateCoordinates();

        coords = correctEffectOfAberration(coords, this.T);
        coords = correctEffectOfNutation(coords, this.T);

        return coords;
    }

    public async getTransit(location: ILocation): Promise<TimeOfInterest> {
        const jd = await getTransit(this.constructor, location, this.jd0);

        return createTimeOfInterest.fromJulianDay(jd);
    }

    public async getRise(
        location: ILocation,
        standardAltitude: number = STANDARD_ALTITUDE_SUN_CENTER_REFRACTION
    ): Promise<TimeOfInterest> {
        const jd = await getRise(this.constructor, location, this.jd0, standardAltitude);

        return createTimeOfInterest.fromJulianDay(jd);
    }

    public async getRiseUpperLimb(location: ILocation): Promise<TimeOfInterest> {
        return await this.getRise(location, STANDARD_ALTITUDE_SUN_UPPER_LIMB_REFRACTION);
    }

    public async getSet(
        location: ILocation,
        standardAltitude: number = STANDARD_ALTITUDE_SUN_CENTER_REFRACTION
    ): Promise<TimeOfInterest> {
        const jd = await getSet(this.constructor, location, this.jd0, standardAltitude);

        return createTimeOfInterest.fromJulianDay(jd);
    }

    public async getSetUpperLimb(location: ILocation): Promise<TimeOfInterest> {
        return await this.getSet(location, STANDARD_ALTITUDE_SUN_UPPER_LIMB_REFRACTION);
    }

    public async getAngularDiameter(): Promise<number> {
        const distance = await this.getApparentDistanceToEarth();

        return observationCalc.getAngularDiameter(distance, DIAMETER_SUN);
    }

    public async getTopocentricAngularDiameter(location: ILocation): Promise<number> {
        const distance = await this.getTopocentricDistanceToEarth(location);

        return observationCalc.getAngularDiameter(distance, DIAMETER_SUN);
    }

    public async getApparentMagnitude(): Promise<number> {
        return Promise.resolve(-26.74);
    }

    public async getTopocentricApparentMagnitude(): Promise<number> {
        return Promise.resolve(-26.74);
    }
}
