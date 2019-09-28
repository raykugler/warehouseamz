import React from 'react';
import { connect } from 'react-redux';
import {logIn} from '../actionCreators';
import Main from './Main';
import LogIn from './LogIn';

const LandingTwo = (props: { isLoggedIn: boolean, }) => {
    if(props.isLoggedIn === true){
        return(
            <Main />
    )}
    else{
        return(
            <LogIn />
    )}
}



const mapStateToProps = state => ({isLoggedIn: state.isLoggedIn});
const mapDispatchtoProps = (dispatch: Function)=>({
    handleMainChange(event){
       dispatch(logIn(event));
    }
})
export default connect(mapStateToProps, mapDispatchtoProps)(LandingTwo);