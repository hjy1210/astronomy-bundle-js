import {EPOCH_J2000} from '../constants/epoch';
import IEclipticSphericalCoordinates from '../coordinates/interfaces/IEclipticSphericalCoordinates';
import IEquatorialSphericalCoordinates from '../coordinates/interfaces/IEquatorialSphericalCoordinates';
import {deg2rad, normalizeAngle, rad2deg, sec2deg} from './angleCalc';
import {getEpochInterval, getEpochIntervalToJ2000} from './timeCalc';

export function correctPrecessionForEclipticCoordinates(
    lon0: number,
    lat0: number,
    radiusVector: number,
    jd: number,
    startingEpoch: number = EPOCH_J2000,
): IEclipticSphericalCoordinates {
    const lonRad0 = deg2rad(lon0);
    const latRad0 = deg2rad(lat0);

    const T = getEpochIntervalToJ2000(startingEpoch);
    const t = getEpochInterval(jd, startingEpoch);

    const eta = (sec2deg(47.0029) - sec2deg(0.06603) * T + sec2deg(0.00006) * Math.pow(T, 2)) * t
        + (sec2deg(-0.03302) + sec2deg(0.000598) * T) * Math.pow(t, 2)
        + sec2deg(0.00006) * Math.pow(t, 3);

    const Pi = 174.876384 + sec2deg(3289.4789) * T + sec2deg(0.60622) * Math.pow(T, 2)
        - (sec2deg(869.8089) + sec2deg(0.50498) * T) * t
        + sec2deg(0.03536) * Math.pow(t, 2);

    const p = (sec2deg(5029.0966) + sec2deg(2.22226) * T - sec2deg(0.000042) * Math.pow(T, 2)) * t
        + (sec2deg(1.11113) - sec2deg(0.000042) * T) * Math.pow(t, 2)
        + sec2deg(0.000006) * Math.pow(t, 3);

    const etaRad = deg2rad(eta);
    const PiRad = deg2rad(Pi);

    // Meeus 21.7
    const A = Math.cos(etaRad) * Math.cos(latRad0) * Math.sin(PiRad - lonRad0) - Math.sin(etaRad) * Math.sin(latRad0);
    const B = Math.cos(latRad0) * Math.cos(PiRad - lonRad0);
    const C = Math.cos(etaRad) * Math.sin(latRad0) + Math.sin(etaRad) * Math.cos(latRad0) * Math.sin(PiRad - lonRad0);

    const lon = p + Pi - rad2deg(Math.atan2(A, B));
    const lat = rad2deg(Math.asin(C));

    return {
        lon: normalizeAngle(lon),
        lat: lat,
        radiusVector: radiusVector,
    }
}

export function correctPrecessionForEquatorialCoordinates(
    rightAscension0: number,
    declination0: number,
    radiusVector: number,
    jd: number,
    startingEpoch: number = EPOCH_J2000,
): IEquatorialSphericalCoordinates {
    const raRad0 = deg2rad(rightAscension0);
    const dRad0 = deg2rad(declination0);

    const T = getEpochIntervalToJ2000(startingEpoch);
    const t = getEpochInterval(jd, startingEpoch);

    const xi = (sec2deg(2306.2181) + sec2deg(1.39656) * T - sec2deg(0.000139) * Math.pow(T, 2)) * t
        + (sec2deg(0.30188) - sec2deg(0.000344) * T) * Math.pow(t, 2)
        + sec2deg(0.017988) * Math.pow(t, 3);

    const zeta = (sec2deg(2306.2181) + sec2deg(1.39656) * T - sec2deg(0.000139) * Math.pow(T, 2)) * t
        + (sec2deg(1.09468) + sec2deg(0.000066) * T) * Math.pow(t, 2)
        + sec2deg(0.018203) * Math.pow(t, 3);

    const theta = (sec2deg(2004.3109) - sec2deg(0.8533) * T - sec2deg(0.000217) * Math.pow(T, 2)) * t
        - (sec2deg(0.42665) + sec2deg(0.000217) * T) * Math.pow(t, 2)
        - sec2deg(0.041833) * Math.pow(t, 3);

    const xiRad = deg2rad(xi);
    const thetaRad = deg2rad(theta);

    // Meeus 21.4
    const A = Math.cos(dRad0) * Math.sin(raRad0 + xiRad);
    const B = Math.cos(thetaRad) * Math.cos(dRad0) * Math.cos(raRad0 + xiRad) - Math.sin(thetaRad) * Math.sin(dRad0);
    const C = Math.sin(thetaRad) * Math.cos(dRad0) * Math.cos(raRad0 + xiRad) + Math.cos(thetaRad) * Math.sin(dRad0);

    const rightAscension = rad2deg(Math.atan2(A, B)) + zeta;
    const declination = rad2deg(Math.asin(C));

    return {
        rightAscension: normalizeAngle(rightAscension),
        declination: declination,
        radiusVector: radiusVector,
    }
}
