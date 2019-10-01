import React, { Component } from 'react';
import {connect} from 'react-redux';
import { displayTest } from '../actionCreators';
import DSPMenu from './DSPMenu';
import {colors} from './colors';


class Lanes extends Component {
    constructor(props){
        super(props)
console.log(colors)
    }
    
    componentDidMount(){
        console.log(this.props.displayData)
        setTimeout(this.mapMaker,200);

    }
    // setDisplayData=()=>{
    //     if(this.props.displayData === 'all'){
    //       this.props.  
    //     }
    // }
    mapMaker=()=>{
        console.log(`display: ${this.props.displayData}`)
        console.log(this.props.selectedDSPS)        
        let lane_one = document.getElementById('lane_one');
        let lane_two = document.getElementById('lane_two');
        while (lane_one.firstChild) {
            lane_one.removeChild(lane_one.firstChild);
          }
          while (lane_two.firstChild) {
            lane_two.removeChild(lane_two.firstChild);
          }
        let mergedData = this.props.mergedData;
        
        for(let i = 0; i < mergedData.lanes.length; i++){
            let currentLane = mergedData.lanes[i]
            for(let j = 0; j < currentLane.locations.length; j++){
                let currentArea = mergedData.lanes[i].locations[j].stagingLocation;
                let stagingArea = document.createElement('section');
                    stagingArea.classList.add('stagingArea');

                let stageNumber = document.createElement('button');
                    stageNumber.classList.add('stagingNumber');
                
                let digit = document.createTextNode(currentArea);
     
                let plannedRoutes = document.createElement('div');
                    plannedRoutes.classList.add('plannedRoutes');
                    
                    stageNumber.appendChild(digit);
                    stagingArea.appendChild(stageNumber);
                    
                    stagingArea.appendChild(plannedRoutes);
                let currentRoutes = mergedData.lanes[i].locations[j].routes;
                let gatheredRoutes = [];
     
                for(let m = 0; m < currentRoutes.length; m++){
                    if(this.props.selectedDSPS.includes(currentRoutes[m].dsp)){
                    let dsp = currentRoutes[m].dsp;
                    let routeCode = currentRoutes[m].routeCode;
                    let uniqueID = currentRoutes[m]._id;
                    let rackCount = currentRoutes[m].rack_count;
                    let rack_count_holder = document.createElement('DIV');
                        rack_count_holder.classList.add('rack_count_holder');
                //    let rack_count_text = document.createTextNode(rackCount);
                  //      rack_count_holder.appendChild(rack_count_text);
                    let routeButton = document.createElement('BUTTON');
 
                    let routeDSP = document.createElement('P');    
                        routeDSP.classList.add('routeDSP');
                    let routeDSPtext = document.createTextNode(`${dsp}`);
                        routeDSP.appendChild(routeDSPtext);    

                    let routeCodeHolder = document.createElement('P');
                        routeCodeHolder.classList.add('routeCodeHolder')    
                    let routeCodeText = document.createTextNode(`${routeCode}`);
                        routeCodeHolder.appendChild(routeCodeText);    
                    
                    
                        routeButton.appendChild(routeDSP);
                        routeButton.appendChild(routeCodeHolder);
                        
                        //routeButton.appendChild(rack_count_holder)
                        routeButton.classList.add('routeButton');
                        const result = colors.filter(color => color.dsp === dsp);
                
                        routeButton.style.backgroundColor = result[0].backgroundColor;
                        routeButton.style.color = result[0].color;
                        routeButton.addEventListener('click', e => this.props.preModalOpen(currentArea));             
                        plannedRoutes.appendChild(routeButton);
                        let localRouteData = {
                          route: routeCode,
                          dsp: dsp,
                          id: uniqueID,
                        }
                        gatheredRoutes.push(localRouteData);                
                    }
            }
            
            if (i === 0) {
              let lane = document.getElementById('lane_two');
              
                  lane.appendChild(stagingArea);
        } else {
              let lane = document.getElementById('lane_one');
                  lane.appendChild(stagingArea);
        }  
        // stageNumber.addEventListener('click', e => this.props.preModalOpen(currentArea, 'location',gatheredRoutes));
          }
        }
      }


    render(){
        return(
            <section className='stage_holder'>
                <DSPMenu mapMaker={this.mapMaker}/>
                <section className='lane' id='lane_one'></section>

                <div className='belt'><p>CONVEYOR BELT</p></div>

                <section className='lane' id='lane_two'></section>
                
            </section>
    );
}}

const mapStateToProps = state => ({
    mergedData: state.mergedData,
    displayData: state.displayData,
    selectedDSPS: state.selectedDSPS,
})

const mapDispatchToProps = (dispatch: Function)=>({
    displayChange(event){
        dispatch(displayTest(event))},
        
    }
)
export default connect (mapStateToProps, mapDispatchToProps)(Lanes);

