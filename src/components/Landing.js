import React from 'react';
import { connect } from 'react-redux';
import { setMain } from '../actionCreators';
import Main from './Main';

const Landing = (props: { isLoggedIn: string, }) => (
    <main className='landing'>
        <button onClick={e => props.handleMainChange('DDDgg')}>Change State</button>
        <p>{props.isLoggedIn}</p>
    <Main />
    </main>
)



const mapStateToProps = state => ({isLoggedIn: state.isLoggedIn});
const mapDispatchtoProps = (dispatch: Function)=>({
    handleMainChange(event){
        dispatch(setMain(event));
    }
})
export default connect(mapStateToProps, mapDispatchtoProps)(Landing);