import { INCREAMENT, DECREAMENT, OEM, NOTIFICATION } from './action-types';

export const INCREAMENT1 = ({
    type: INCREAMENT
});
export const DECREAMENT1 = ({
    type: DECREAMENT
});
export const OEM1 = oem => ({
    type: OEM,
    payload: {
        oem
    }
});
export const NOTIFICATION1 = ({
    type: NOTIFICATION,
})