import React, {useEffect, useRef} from "react";
import ContactCard from '../ContactCard';
import { Link } from "react-router-dom";
import '../../App.css'
import { useCurd } from "../../prevprops/Curds";


const ContactList = () => {

    const {contacts, retrieveContacts, searchResults, text, searchHandler} = useCurd();

    useEffect(()=>{
        retrieveContacts();
    }
    , [])

    const renderContactList = (text.length < 1 ? contacts : searchResults).map((contact) => {
        return (
            <ContactCard
                contact={contact}
                key={contact.id}
            />
            );
    });


    return(
        <>
        <div className="main">
            
            <h2 >The Views   +_v_+
                <Link to='/addyourview'>
                <button className="ui button black right">Add View</button>
                </Link>
            </h2>
            <div className="ui search">
                <div className="ui icon input">
                <input
                    type="text"
                    placeholder="Search Contacts"
                    className="prompt"
                    value={text}
                    onChange={(e) =>{
                        searchHandler(e.target.value);
                      }}
                />
                <i className="search icon"></i>
                </div>
            </div>
            <div className="ui celled list">
                {renderContactList.length > 0
                ? renderContactList
                : "No Reviews for this product"}
            </div>
            </div>
         
         </>);

}

export default ContactList;