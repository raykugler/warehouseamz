import React, { Component } from 'react';
import { logIn } from '../actionCreators';
import { connect } from 'react-redux';



class LogIn extends Component {
    constructor(props){
        super(props)
    }
        render(){
            return(
                <div className='convBelt' id='convBelt'>
                <button onClick={e => this.props.handleLogin(true)}>PLPLPL</button>
                  <p>BBBBBBB</p>
                
                </div>
    
    );
}}
const mapStateToProps = state => ({isLoggedIn: state.isLoggedIn});
const mapDispatchToProps = (dispatch: Function)=>({
    handleLogin(event){
        dispatch(logIn(event));
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
