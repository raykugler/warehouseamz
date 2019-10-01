
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { setDSPData, setSelectedDSPS  } from '../actionCreators';


class DSPMenu extends Component {
    constructor(props){
        super(props)

        setTimeout(this.dspFilter,100)
    }
    
dspFilter = () =>{

    let dsp_array =[];
    let data = this.props.mergedData;

    for(let i = 0; i < data.lanes.length; i++){
        let current_lane = data.lanes[i];
        for(let j = 0; j < current_lane.locations.length; j++){
            let route_bin = current_lane.locations[j].routes
                for(let h = 0; h < route_bin.length; h++){
                    dsp_array.push(route_bin[h].dsp)
            }
        }
    }

    const dsp_unique = [...new Set(dsp_array)];
    this.props.sendSelectedDSPS(dsp_unique)
    this.props.sendDSPData(dsp_unique)
    this.createDSPMenu(dsp_unique);
}    

createDSPMenu =(dsp_unique)=>{
    console.log(dsp_unique);
    let dsp_menu = document.getElementById("dsp_menu_id"); 
    let dsp_table = document.createElement('TABLE');
    dsp_table.setAttribute('id', 'dsp_table');
    let dsp_row = document.createElement('TR');  
    dsp_row.setAttribute('id', 'dsp_row');          
    for(let i = 0; i < dsp_unique.length; i++){
            // creating checkbox element 
            let dsp_td = document.createElement('TD')
            var checkbox = document.createElement('input'); 
              
            // Assigning the attributes 
            // to created checkbox 
            checkbox.type = "checkbox"; 
            checkbox.name = "name"; 
            checkbox.value = dsp_unique[i]; 
            checkbox.id = dsp_unique[i]; 
              
            // creating label for checkbox 
            var label = document.createElement('label'); 
              
            // assigning attributes for  
            // the created label tag  
            label.htmlFor = dsp_unique[i] + '_label'; 
              
            // appending the created text to  
            // the created label tag  
            label.appendChild(document.createTextNode(dsp_unique[i])); 
              
            // appending the checkbox 
            // and label to div 
            dsp_td.appendChild(checkbox); 
            dsp_td.appendChild(label); 
            dsp_row.appendChild(dsp_td);
        }
        
        dsp_table.appendChild(dsp_row);
        dsp_menu.appendChild(dsp_table);
        this.addAll();
}

addAll=()=>{
    let dsp_row = document.getElementById('dsp_row');
    let dsp_td = document.createElement('TD')
    let checkbox = document.createElement('input'); 
      
    // Assigning the attributes 
    // to created checkbox 
    checkbox.type = "checkbox"; 
    checkbox.name = "name"; 
    checkbox.value = 'all'; 
    checkbox.id = 'all'; 
      
    // creating label for checkbox 
    var label = document.createElement('label'); 
      
    // assigning attributes for  
    // the created label tag  
    label.htmlFor = 'all_label'; 
      
    // appending the created text to  
    // the created label tag  
    label.appendChild(document.createTextNode('all')); 
      
    // appending the checkbox 
    // and label to div 
    dsp_td.appendChild(checkbox); 
    dsp_td.appendChild(label); 
    dsp_row.appendChild(dsp_td);
}

getSelected=()=>{

    let selected = this.props.selectedDSPS;
    console.log(selected)
    let all_check = document.getElementById('all');


var dsp_table = document.getElementById("dsp_menu_id");
 
        //Reference all the CheckBoxes in Table.
        var chks = dsp_table.getElementsByTagName("INPUT");
 if(all_check.checked){
         selected = this.props.dspData;
 }
  else{      // Loop and push the checked CheckBox value in Array.
    selected = []
        for (var i = 0; i < chks.length; i++) {
            if (chks[i].checked) {
                selected.push(chks[i].value);
            }
        }
    }

        this.props.sendSelectedDSPS(selected)
        console.log(this.props.selectedDSPS)
        setTimeout(this.props.mapMaker,200);
    }

    render(){
        return(
            <section className='dsp_menu_holder' id='dsp_menu_id'>

            <button onClick={e=>this.getSelected()} className='filterButton'>FILTER</button>
            </section>
    );
}}

const mapStateToProps = state => ({
    mergedData: state.mergedData,
    displayData: state.displayData,
    dspData: state.dspData,
    selectedDSPS: state.selectedDSPS,
})

const mapDispatchToProps = (dispatch: Function)=>({
    sendDSPData(event){
        dispatch(setDSPData(event))},
    sendSelectedDSPS(event){
        dispatch(setSelectedDSPS(event))},
        
    }
)
export default connect (mapStateToProps, mapDispatchToProps)(DSPMenu);

