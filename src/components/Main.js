import React, { Component } from 'react';
import { map_data } from './data';
import {connect} from 'react-redux';
import { routeData} from './routeData';
import { displayTest, setLocations, setRoutes, setMerged } from '../actionCreators';
import Lanes  from  './Lanes';
import DSPMenu from './DSPMenu';
import { SET_SELECTED_DSPS } from '../actions';

class Main extends Component {
    constructor(props){
        super(props)

        this.props.sendLocations(map_data);    
        this.props.sendRoutes(routeData);    
        setTimeout(this.merge, 100)
    }


    merge= () => {
        const routes = this.props.routes;
        const locations = this.props.locations;
        const lanes = locations.lanes;
        const mergedData = this.props.mergedData;
        
        for(let i = 0; i < lanes.length; i++){
            for(let j = 0; j < lanes[i].locations.length; j++){
                
                let currentArea = lanes[i].locations[j].stagingLocation;
                
                let currentRoutes = lanes[i].locations[j];
                const result = routes.filter(route => route.stagingArea === currentArea);
                currentRoutes.routes = result;
 
        }}
        this.props.sendMerged(locations);    
        }

    render(){
        return(
            <div className='main_holder'>
            
                <Lanes />
                
            </div>
    );
}}

const mapStateToProps = state => ({
    displaySample: state.displaySample,
    routes: state.routes,
    locations: state.locations,
    mergedData: state.mergedData,
    selectedDSPS: state.selectedDSPS,
})

const mapDispatchToProps = (dispatch: Function)=>({
    displayChange(event){
        dispatch(displayTest(event))},
    
    sendLocations(event){
        dispatch(setLocations(event))},
    
    sendRoutes(event){
        dispatch(setRoutes(event))},
    
    sendMerged(event){
        dispatch(setMerged(event))},
        
    }
)
export default connect (mapStateToProps, mapDispatchToProps)(Main);

