import React from "react";
import user from './avatar.jpg';
import { useCurd } from "../prevprops/Curds";
import { Link } from "react-router-dom";
import './ContactCard.css';

const CardContact = (props) => {
        const {removeContactHandler} = useCurd();
        const deleteContact= (id) =>{
            removeContactHandler(id);
        }
        const{id, name, price, stars, opinion} = props.contact;

        return(
         <>
          <div className="cards">

            <li className="cards_item">
            
        
                <figure>
                    <img className="ui avatar image" src={user} alt="user" />
                </figure>
                    
                <div className="cards__item__info">
                        <h5 className="cards__item__text">
                            Product: {name}
                        </h5>
                        <h5 className="cards__item__text">
                            Price: {price}
                        </h5>
                        <h5 className="cards__item__text">
                            Stars: {stars}
                        </h5>
                        <h5 className="cards__item__text">
                            Opinion: {opinion}
                        </h5>
                        
                </div>
                <i className="trash alternate icon" style = {{color: "red", marginTop: '7px', paddingLeft:'650px', marginLeft:'10px'}}
                        onClick={()=> deleteContact(id)} ></i>

                <Link to = {`/edit`} state= {{contact: props.contact}}>
                <i className="edit alternate icon" style = {{color: "black", marginTop: '7px', paddingLeft:'650px'}}
                         ></i>
                </Link>

        
            </li>
          </div>
        
        </>
        

    );
}

export default CardContact;