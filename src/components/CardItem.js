import React from "react";
import { Link } from "react-router-dom";

function CardItem(props){
    return(
        <>
            <li className="cards_item">
                <Link className="cards__item__link" to={props.path}>
                    <figure className="cards__item__pic-wrap" >
                        <img src={props.src} alt ='Travel Image'
                        className="cards__item__img"/>
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">
                            {props.t1}
                        </h5>
                        <h5 className="cards__item__text">
                            {props.t2}
                        </h5>
                        <h5 className="cards__item__text">
                            {props.t3}
                        </h5>
                        <h5 className="cards__item__text">
                            {props.t4}
                        </h5>

                    </div>
                </Link>
            </li>
        </>
        
    );
}

export default CardItem;