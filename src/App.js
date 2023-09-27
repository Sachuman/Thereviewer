import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/pages/Home'

import SignUp from './components/pages/SignUp';

import EditContact from "./components/EditContact";
import AddContact from './components/pages/AddContact';
import ContactList from "./components/pages/ContactList";
import { Curd } from "./prevprops/Curds";


function App() {
  // const LOCAL_STORAGE_KEY = "contacts";
  // const [contacts, setContacts] = useState([]);

  // for the use of local storage use parse and stringify to convert to json from string and vice-versa
  // useEffect(() => {
  //     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <Router>
      <Navbar/>
      <Curd>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/theview" element={<ContactList />}/>
        <Route path="/addyourview" element={<AddContact />}/> 
        <Route path="edit" element={<EditContact />}/>       
        <Route path="/sign-up" element={<SignUp />}/>
      </Routes>
      </Curd>
    </Router>
    // I would like to thank Youtube to help me learn react js! The react js documentation is also good!
    
  );
}

export default App;
