import React, { useState } from "react";
import Footer from "../Footer";
import { useCurd } from "../../prevprops/Curds";
import { useNavigate } from "react-router-dom";

const AddContact = () =>{

    const[name,setName] = useState("");
    const[price,setPrice] = useState("");
    const[stars,setStars] = useState("");
    const[opinion,setOpinion] = useState("");
    const {addContactHandler} = useCurd();
    const navigate = useNavigate();

    const add = (e) =>{
        e.preventDefault();
        if(name === "" || price==="" || stars ==="" || opinion ===""){
            alert("Can't submit empty");
            return;
        }
        addContactHandler({name, price, stars, opinion});
        setName("");
        setPrice("");
        setStars("");
        setOpinion("");
        alert("Successfully added");
        navigate('/theview');
        

     }

        return(
            <>
            <div className="ui main">
                <h2>Add Your Review</h2>
                <form className="ui form" onSubmit={add}>
                    <div className="field">
                        <label>Name of the Product</label>
                        <input type="text" name="name" placeholder="Name" value = {name} onChange={(e)=> setName(e.target.value)}/>

                    </div>
                    <div className="field">
                        <label>Price</label>
                        <input type="text" name="price" placeholder="Price" 
                        value = {price} onChange={(e)=> setPrice(e.target.value)}/>
                        
                    </div>
                    <div className="field">
                        <label>Stars</label>
                        <input type="text" name="name" placeholder="Ratings" value = {stars} onChange={(e)=> setStars(e.target.value)}/>
                        
                    </div>
                    <div className="field">
                        <label>Opinion</label>
                        <input type="text" name="name" placeholder="Your opinion on the product" value = {opinion} onChange={(e)=> setOpinion(e.target.value)}/>
                        
                    </div>
                    
                    <button className="ui button black">Add your View</button>

                </form>
            </div>
            <Footer />
            </>
            
        )
    }


export default AddContact;