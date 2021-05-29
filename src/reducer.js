import * as types from './action-types';

export const stat = {
  value: 2,
  oem: 0,
  notification: false,
}
export default function rootReducer(state = stat, action) {
  switch (action.type) {
    case types.INCREAMENT:
      return { value: state.value + 1 }
    case types.DECREAMENT:
      return { value: state.value - 1 }
    case types.OEM: {
      const oem = action.payload;
      return { oem }
    }
    case types.NOTIFICATION:
        return { notification: !state.notification }
    default:
      return state
  }
}
