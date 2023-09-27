import React, {useState} from "react";
import { useLocation } from "react-router-dom";
import { useCurd } from "../prevprops/Curds";
import { useNavigate } from "react-router-dom";


const EditContact= () =>{
    
    const location = useLocation();
    const {id, name, price, stars, opinion} = location.state.contact;
    const [newName, setNewName] = useState(name);
    const [newPrice, setNewPrice] = useState(price);
    const [newStars, setNewStars] = useState(stars);
    const [newOpinion, setNewOpinion] = useState(opinion);
    const {updateContactHandler} = useCurd();
    const navigate = useNavigate();

    const update = (e) =>{
        e.preventDefault();
        if( newName === "" || newPrice==="" || newStars ==="" || newOpinion ===""){
            alert("Can't submit empty");
            return;
        }
        updateContactHandler({id, name: newName, price: newPrice, stars: newStars, opinion:newOpinion});
        setNewName("");
        setNewPrice("");
        setNewStars("");
        setNewOpinion("");
        navigate("/theview");

     }

        return(
            <>
            <div className="ui main">
                <h2>Add Your Review</h2>
                <form className="ui form" onSubmit={update}>
                    <div className="field">
                        <label>Name of the Product</label>
                        <input type="text" name="name" placeholder="Name" value = {newName} onChange={(e)=> setNewName(e.target.value)}/>

                    </div>
                    <div className="field">
                        <label>Price</label>
                        <input type="text" name="price" placeholder="Price" 
                        value = {newPrice} onChange={(e)=>setNewPrice(e.target.value)}/>
                        
                    </div>
                    <div className="field">
                        <label>Stars</label>
                        <input type="text" name="name" placeholder="Ratings" value = {newStars} onChange={(e)=> setNewStars(e.target.value)}/>
                        
                    </div>
                    <div className="field">
                        <label>Opinion</label>
                        <input type="text" name="name" placeholder="Your opinion on the product" value = {newOpinion} onChange={(e)=> setNewOpinion(e.target.value)}/>
                        
                    </div>
                    
                    <button className="ui button black">Update your View</button>

                </form>
            </div>
            </>
            
        )
    }


export default EditContact;