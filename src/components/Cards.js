import React from "react";
import CardItem from "./CardItem";
import './Cards.css';

function Cards(){
    return(
        <div className="cards">
            <h1> See some reviews down below</h1>
            <div className="cards__wrapper">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src = "images/sample.jpeg"  
                        t1 = " Product: Blender Bottle"
                        t2 = "How much did you buy for: $10"
                        t3 = "Stars: 9/10"
                        t4 = "Opinion: I would definetly consider this as a good investment, wish it was cheaper!"
                        
                        label ="Blender Bottle"
                        path="/theview"
                        />
                        <CardItem
                        src = "images/sample3.jpeg"  
                        t1 = " Product: Sketchers Slip on Running Shoes "
                        t2 = "How much did you buy for: $40"
                        t3 = "Stars: 8.5/10"
                        t4 = "Opinion: Great shoes, lasted for one year and going solid. Really comfy too."
                        
                        label ="Sketchers Shoes"
                        path="/theview"
                        />
                        <CardItem
                        src = "images/sample2.jpeg"  
                        t1 = "Product: DIY headrest "
                        t2 = "How much did you buy for: $10"
                        t3 = "Stars: 9/10"
                        t4 = "Opinion: Best for the price, you can also customize by changing the cushion inside too."
                        
                        label ="Headrest by DIY"
                        path="/theview"
                        />

                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        src = "images/sample4.jpeg"  
                        t1 = " Product: Himalaya Anti-Dandruff cream"
                        t2 = "How much did you buy for: $8"
                        t3 = "Stars: 7/10"
                        t4 = "Opinion: Its great, but once I stoped for 3 days and the hair became really dandruffy, which had never happened before"
                        
                        label ="Himalaya Anti-Dandruff Cream"
                        path="/theview"
                        />
                        <CardItem
                        src = "images/sample5.jpeg"  
                        t1 = " Product: Syska Iron-Stellar"
                        t2 = "How much did you buy for: $15"
                        t3 = "Stars: 9/10"
                        t4 = "Opinion: Really awesome for its price! Works great. You wont get any modern high iron features like water splasher, but again who needs that!"
                        
                        label ="Syska Iron-Stellar"
                        path="/theview"
                        />

                    </ul>
                   
                    
                    
                </div>
            </div>

        </div>
    )
}

export default Cards;