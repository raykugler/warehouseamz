import React, { Component } from 'react';

import { connect } from 'react-redux';



class StageModal extends Component {
    constructor(props){
        super(props)
            }

    componentDidMount(){
        setTimeout(this.buildModalDisplay(),100)

    }
    buildModalDisplay=()=>{
        let areaInfo = this.props.modalInfo;
        let bigModal = document.getElementById('modalID'); 
        for(let i = 0; i < areaInfo.length; i++){
            let routeHolder = document.createElement('DIV');
                routeHolder.classList.add('routeHolder');

            let routeCodeTextHolder = document.createElement('INPUT');
                routeCodeTextHolder.type = "text";
                routeCodeTextHolder.name = areaInfo[i]._id;;
                routeCodeTextHolder.placeholder = areaInfo[i].routeCode;
                routeCodeTextHolder.size = 5;

                routeCodeTextHolder.classList.add('routeCodeTextHolder');

                routeHolder.appendChild(routeCodeTextHolder);

            let dspTextHolder = document.createElement('INPUT');
                dspTextHolder.type ='text';
                dspTextHolder.name = areaInfo[i].dsp;
                dspTextHolder.placeholder = areaInfo[i].dsp;
                dspTextHolder.size = 6;

                dspTextHolder.classList.add('dspTextHolder');
 
                routeHolder.appendChild(dspTextHolder);
            

            let routeLocation = document.createElement('INPUT');
                routeLocation.type = 'text';
                routeLocation.name = areaInfo[i].stagingArea;
                routeLocation.placeholder = areaInfo[i].stagingArea;
                routeLocation.size = 3;

                routeLocation.classList.add('routeLocation');

                routeHolder.appendChild(routeLocation);
            let unique = areaInfo[i]._id;
            let modalSubmitButton = document.createElement('BUTTON');
            let modalSubmitButtonText = document.createTextNode('Make Changes')
                modalSubmitButton.appendChild(modalSubmitButtonText);

                modalSubmitButton.classList.add('modalSubmitButton');
                modalSubmitButton.addEventListener('click', e => this.openRoute(unique));      
                routeHolder.appendChild(modalSubmitButton);

                
            
            bigModal.appendChild(routeHolder);
        }
 
    }
    openRoute=(e)=>{
        console.log(e)
    }


        render(){
            return(
                <div className='modalHolder' id='modalID'>
               
                
                
                </div>
    
    );
}}
 const mapStateToProps = state => ({
     modalInfo: state.modalInfo});

// const mapDispatchToProps = (dispatch: Function)=>({
//     handleLogin(event){
//         dispatch(logIn(event));
//     }
// })
//export default StageModal;
 export default connect(mapStateToProps,)(StageModal);