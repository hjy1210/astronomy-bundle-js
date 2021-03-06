import IRectangularCoordinates from '../../coordinates/interfaces/IRectangularCoordinates';
import IEclipticSphericalCoordinates from '../../coordinates/interfaces/IEclipticSphericalCoordinates';
import IEquatorialSphericalCoordinates from '../../coordinates/interfaces/IEquatorialSphericalCoordinates';

export default interface IPlanet {
    getHeliocentricEclipticRectangularJ2000Coordinates(): Promise<IRectangularCoordinates>;

    getHeliocentricEclipticRectangularDateCoordinates(): Promise<IRectangularCoordinates>;

    getHeliocentricEclipticSphericalJ2000Coordinates(): Promise<IEclipticSphericalCoordinates>;

    getHeliocentricEclipticSphericalDateCoordinates(): Promise<IEclipticSphericalCoordinates>;

    getGeocentricEclipticRectangularJ2000Coordinates(): Promise<IRectangularCoordinates>;

    getGeocentricEclipticRectangularDateCoordinates(): Promise<IRectangularCoordinates>;

    getGeocentricEclipticSphericalJ2000Coordinates(): Promise<IEclipticSphericalCoordinates>;

    getGeocentricEclipticSphericalDateCoordinates(): Promise<IEclipticSphericalCoordinates>;

    getGeocentricEquatorialSphericalJ2000Coordinates(): Promise<IEquatorialSphericalCoordinates>;

    getGeocentricEquatorialSphericalDateCoordinates(): Promise<IEquatorialSphericalCoordinates>;

    getApparentGeocentricEclipticSphericalCoordinates(): Promise<IEclipticSphericalCoordinates>;

    getApparentGeocentricEquatorialSphericalCoordinates(): Promise<IEquatorialSphericalCoordinates>;
}
