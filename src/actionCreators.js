import { SET_MAIN, SET_LOCATIONS, SET_ROUTES, SET_MERGED, SET_DISPLAY_DATA, SET_DSP_MENU, SET_SELECTED_DSPS, SET_MODAL_INFO } from './actions';
import { SET_LOGIN } from './actions';
import { SET_DISPLAY } from './actions';

export function setMain(main) {
    return {type: SET_MAIN, payload: main}
}
export function logIn(change) {
    return {type: SET_LOGIN, payload: change }
}
export function displayTest(newd){
    return {type: SET_DISPLAY, payload: newd}
}
export function setLocations(locations){
    return {type: SET_LOCATIONS, payload: locations}
}
export function setRoutes(routes){
    return {type: SET_ROUTES, payload: routes}
}
export function setMerged(merged){
    return {type: SET_MERGED, payload: merged}
}
export function setDisplay(displayData){
    return {type: SET_DISPLAY_DATA, payload: displayData}
}
export function setDSPData(dsps){
    return {type: SET_DSP_MENU, payload: dsps}
}
export function setSelectedDSPS(selectedDSPS){
    return {type: SET_SELECTED_DSPS, payload: selectedDSPS}
}
export function setModalInfo(modalInfo){
    return {type: SET_MODAL_INFO, payload: modalInfo};
}