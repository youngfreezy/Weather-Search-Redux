import {FETCH_WEATHER} from '../actions/index';
export default function (state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
    // below line is same as: return state.concat([action.payload.data]);
    return [ action.payload.data, ...state ];
  }
  return state;
}