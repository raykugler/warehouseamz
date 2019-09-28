
import { SET_LOGIN, SET_DISPLAY, SET_LOCATIONS, SET_ROUTES, SET_MERGED, SET_DISPLAY_DATA, SET_DSP_MENU, SET_SELECTED_DSPS } from './actions';
const DEFAULT_STATE = {
      isLoggedIn: true ,
      displaySample: 'KLKLK',
      locations: 'L',
      routes: 'R' ,
      mergedData: 'jjj',
      displayData: 'all',
      dspData: '',
      selectedDSPS: []
};
const logIn = (state, action) => Object.assign({}, state, { isLoggedIn: action.payload});
const displayChange = (state, action) => Object.assign({}, state, { displaySample: action.payload});
const setLocations = (state, action) => Object.assign({}, state, {locations: action.payload});
const setRoutes = (state, action) => Object.assign({}, state, {routes: action.payload});
const setMerged =(state, action) => Object.assign({}, state, {mergedData: action.payload});
const setDisplayed = (state, action) => Object.assign({}, state, { displayData: action.payload});
const setDSPData = (state, action) => Object.assign({}, state, { dspData: action.payload});
const setSelectedDSPS = (state, action) => Object.assign({}, state, { selectedDSPS: action.payload});

const rootReducer = (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case SET_LOGIN: 
            return logIn(state, action);
        case SET_DISPLAY:
            return displayChange(state, action);
        case SET_LOCATIONS: 
            return setLocations(state, action);
        case SET_ROUTES:
            return setRoutes(state, action);
        case SET_MERGED:
            return setMerged(state, action);
        case SET_DISPLAY_DATA:
            return setDisplayed(state, action);
        case SET_DSP_MENU:
            return setDSPData(state, action);
        case SET_SELECTED_DSPS:
            return setSelectedDSPS(state, action);
        default:
            return state;
    }
};

export default rootReducer;