import React,{Component} from 'react';
import '../Custom.css';
import KFC from '../misc/images/KFC_logo.png';
import HNS from '../misc/images/hot.jpg';
import Subway from '../misc/images/subway.jpg';
import Braodway from '../misc/images/broadway.png';
import Kababjees from '../misc/images/kabab.jpg';
import Hardees from '../misc/images/hardees.jpg';



class ResturantList extends Component

{
    constructor(){
        super();
    }
        render(){

    
    return (
            <div className="viewPanel">
                <div className="resturantThumb">
                    <div className="resImage">
                        <img src={KFC}/>
                    </div>
                    <h2>KFC</h2>
                    <div className="foodDisc">
                        <div className="disc">Zinger Burger</div>
                        <div className="disc">Tenders</div>
                        <div className="disc">Spicy Crispy Chicken</div>
                        <div className="disc">Honey BBQ Sandwich</div>
                        <div className="disc">Potato Salad</div>
                    </div>
                </div>
                
                <div className="resturantThumb">
                    <div className="resImage">
                        <img src={HNS}/>
                    </div>
                    <h2>Hot N Spicy</h2>
                    <div className="foodDisc">
                        <div className="disc">Chicken Tikka</div>
                        <div className="disc">Beef Afhgani Boti</div>
                        <div className="disc">B.B.Q Playtter</div>
                        <div className="disc">Chicken Makhni</div>
                        <div className="disc">Rainbow Delight</div>
                        <div className="disc">Kheer</div>
                    </div>
                </div>
                <div className="resturantThumb">
                    <div className="resImage">
                        <img src={Subway}/>
                    </div>
                    <h2>Subway </h2>
                    <div className="foodDisc">
                        <div className="disc">Oven Roasted Chicken</div>
                        <div className="disc">Turkey Thigh</div>
                        <div className="disc">Veggie Delight</div>
                        <div className="disc">Steak and Cheese</div>
                        <div className="disc">Subway Club</div>
                    </div>
                </div>
                <div className="resturantThumb">
                    <div className="resImage">
                        <img src={Braodway}/>
                    </div>
                    <h2>Broadway Pizza</h2>
                    <div className="foodDisc">
                        <div className="disc">Wicked Blend</div>
                        <div className="disc">Dancing Fajita</div>
                        <div className="disc">All Cheese</div>
                        <div className="disc">Chorus Spice</div>
                        <div className="disc">Westside Garlic</div>
                        <div className="disc">Poppin B.B.Q</div>
                    </div>
                </div>
                <div className="resturantThumb">
                    <div className="resImage">
                        <img src={Kababjees}/>
                    </div>
                    <h2>Kababjees</h2>
                    <div className="foodDisc">
                        <div className="disc">Chicken Masto Kabab</div>
                        <div className="disc">Joja Shashlik Boti</div>
                        <div className="disc">Texas Stick Boti</div>
                        <div className="disc">Supreme Nachos</div>
                        <div className="disc">Lahori Fish</div>
                    </div>
                </div>
                <div className="resturantThumb">
                    <div className="resImage">
                        <img src={Hardees}/>
                    </div>
                    <h2>Hardees Resturant</h2>
                    <div className="foodDisc">
                        <div className="disc">Zinger Burger</div>
                        <div className="disc">Tenders</div>
                        <div className="disc">Spicy Crispy Chicken</div>
                        <div className="disc">Honey BBQ Sandwich</div>
                        <div className="disc">Potato Salad</div>
                    </div>
                </div>
            </div>
    );
}
}
export default ResturantList;