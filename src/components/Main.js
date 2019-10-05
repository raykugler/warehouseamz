import React, { Component } from 'react';
import { map_data } from './data';
import {connect} from 'react-redux';
import { routeData} from './routeData';
import { displayTest, setLocations, setRoutes, setMerged, setModalInfo } from '../actionCreators';
import Lanes  from  './Lanes';
import Modal from 'react-modal';
import DSPMenu from './DSPMenu';
import { SET_SELECTED_DSPS } from '../actions';
import StageModal from './StageModal';
const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      //marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      height                : '700px',
      width                 : '800px',
      backgroundColor       : '#cbeeef'
    }
  };

Modal.setAppElement('#root')
class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            modalIsOpen: false
          };
          
        this.props.sendLocations(map_data);    
        this.props.sendRoutes(routeData);    
        setTimeout(this.merge, 100)
    }

preModalOpen=(e)=>{
    let mdata = this.props.mergedData.lanes[0].locations;
    let ddata = this.props.mergedData.lanes[1].locations;
    let areaRoutes = '';
    const result = mdata.filter(mdat => mdat.stagingLocation === e);
        if (result.length > 0) {
            areaRoutes = result[0].routes;
        }

    const dresult = ddata.filter(ddat => ddat.stagingLocation === e);
        if (dresult.length > 0){
            areaRoutes = dresult[0].routes
        }

    this.props.sendModalInfo(areaRoutes);
    this.openModal();
}

openModal() {
    this.setState({modalIsOpen: true});

  }

//   afterOpenModal() {
//     // references are now sync'd and can be accessed.
//     this.subtitle.style.color = '#f00';
//   }

  closeModal=()=> {
    this.setState({modalIsOpen: false});
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
             <Modal

          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
            <StageModal />
              <button onClick={this.closeModal}>close</button>
        </Modal>
                <Lanes preModalOpen={this.preModalOpen}/>
                
            </div>
    );
}}

const mapStateToProps = state => ({
    displaySample: state.displaySample,
    routes: state.routes,
    locations: state.locations,
    mergedData: state.mergedData,
    selectedDSPS: state.selectedDSPS,
    modalInfo: state.modalInfo,
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

    sendModalInfo(event){
        dispatch(setModalInfo(event))},
        
    }
)
export default connect (mapStateToProps, mapDispatchToProps)(Main);

