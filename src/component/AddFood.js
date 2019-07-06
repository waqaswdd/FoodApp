import React,{Component} from 'react';
import '../Custom.css';
import {Addfod} from '../store/actions/AuthAction';
import { Link } from 'react-router-dom'




class Addfood extends Component

{
    constructor(){
        super();
        this.state={}
          this.AddFoods=this.AddFoods.bind(this);
    }
     AddFoods(){
        const {
            FoodName,
            FoodPrice,
            
        }=this.state

        let addFoodDetails ={
            
            FoodName,
            FoodPrice,
            router:this.props.history
        }
        Addfod(addFoodDetails);
        
    }


    render(){

    
    return (
        <div className="foodWrapper">
            <h1>Add Food</h1>
            <div className="foodfield">
            <p>Food Name</p>
            <input  onChange={(e) => { this.setState({ FoodName: e.target.value }) }} type="text" placeholder="Enter Food Title"/>
            <p>Food Price</p>
            <input   onChange={(e) => { this.setState({ FoodPrice: e.target.value }) }} type="text" placeholder="Enter Food Title"/>
            <p>Food Image</p>
            <input type="file" />
            <p onClick={this.AddFoods}>Add Food</p>
            </div>
        </div>
        
    );
}
}

export default Addfood;