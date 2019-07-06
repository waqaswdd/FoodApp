import React,{Component} from 'react';
import '../Custom.css';
import AddFood from '../component/AddFood';



class resPanel extends Component

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
                    <p>Add Food</p>
                </div>
                <div className="sideNav1">
                    <p>My Foods</p>
                </div>
            </div>
            <div className="logOut">
                <div className="search">
                    <input type="text" placeholder="Search by category"/>
                </div>
                {/* <div className="sBtn"><p><a href="">Search</a></p></div> */}
                <div className="lBtn"><p onClick={this.logout}>Logout</p></div>
                <h4>Resturant Name</h4>
            </div> 
            <AddFood />
        </div>
    );
}
}

export default resPanel;