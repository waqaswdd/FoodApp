import React,{Component} from 'react';
import '../Custom.css';




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
                    <p><a href="">Resturants</a></p>
                </div>
                <div className="sideNav1">
                    <p><a href="">My Requests</a></p>
                </div>
            </div>
            <div className="logOut">
                <div className="search">
                    <input type="text" placeholder="Search by category"/>
                </div>
                <div className="sBtn"><p><a href="">Search</a></p></div>
                <div className="lBtn"><p onClick={this.logout}>Logout</p></div>
                <h4>Muhammad Waqas</h4>
            </div>
            <div className="viewPanel">
            </div> 

        </div>
    );
}
}

export default userPanel;