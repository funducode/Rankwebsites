import * as types from '../constants/ActionTypes';
export function loadWebsites(visitDate){
  return {
    type: types.LOAD_WEBSITES,
    visitDate
  };
}
