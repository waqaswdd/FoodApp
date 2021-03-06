import React,{Component} from 'react';
import '../Custom.css';
import KFC from '../misc/images/KFC_logo.png';
import ResturantList from './ResturantThumb';



class userPanel extends Component

{
    constructor(){
        super();
    }
    logout() {
        localStorage.clear();
        window.location.href = '/';
    
    }
        render(){

    
    return (
        <div className="panelWrapper">
            <div className="sideBar">
                <div className="sideNav">
                    <p>Resturants</p>
                </div>
                <div className="sideNav1">
                    <p>My Requests</p>
                </div>
            </div>
            <div className="logOut">
                <div className="search">
                    <input type="text" placeholder="Search by category"/>
                </div>
                {/* <div className="sBtn"><p><a href="">Search</a></p></div> */}
                <div className="lBtn"><p onClick={this.logout}>Logout</p></div>
                <h4>Muhammad Waqas</h4>
            </div> 
            <ResturantList/>
        </div>
    );
}
}

export default userPanel;