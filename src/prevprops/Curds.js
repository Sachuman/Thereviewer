import { createContext, useContext, useState } from "react";
import api from '../api/contacts';
import { v4 } from 'uuid';

const contactCrudContext = createContext();


export function Curd ({children}){
    const [contacts, setContacts] = useState([]);
    const [text, setText] = useState([]);
    const [searchResults, setSearchResults] = useState("");

    const retrieveContacts = async() =>{
        const response = await api.get('/contacts');
        if(response.data) {
          setContacts(response.data)};
      }

    const addContactHandler = async(contact) =>{
        const request = {
          id: v4(),
          ...contact
        }
        const respone  = await api.post("/contacts", request)
        setContacts([...contacts, respone.data]);
    }

    const removeContactHandler= async(id) =>{
        await api.delete(`/contacts/${id}`);
        const newContactList = contacts.filter((contact)=>{
            return contact.id !== id;
        });
        setContacts(newContactList);
    };

    const updateContactHandler = async (contact) => {
        const response = await api.put(`/contacts/${contact.id}`, contact);
        const { id } = response.data;
        setContacts(
          contacts.map((contact) => {
            return contact.id === id ? { ...response.data } : contact;
          })
        );
      };
    
    
    const searchHandler = (searchTerm) => {
        setText(searchTerm);
        if (searchTerm !== "") {
          const newContactList = contacts.filter((contact) => {
            console.log(contact);
            return Object.values(contact)
              .join(" ")
              .toLowerCase()
              .includes(searchTerm.toLowerCase());
          });
          setSearchResults(newContactList);
        }else {
          setSearchResults(contacts);
        }
      };

    const value = {
        contacts,
        retrieveContacts,
        removeContactHandler,
        addContactHandler,
        updateContactHandler,
        searchHandler,
        text,
        searchResults,
        
    }
    return <contactCrudContext.Provider value={ value }>
        {children}
    </contactCrudContext.Provider>
}

export function useCurd(){
    return useContext(contactCrudContext);
}

/// this section of the project was totally learnt from web, I am thankful to youtube for making me understand
/// on the use of createContext and useContext