import React from "react";
import'../App.css';
import { Button } from "./CommonButton";
import './HeroSection.css';

function HeroSection(){
    return(
        <div className="hero-container">
            <h1>Welcome to the Reviewer</h1>
            <p>Find review of anything!</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>Add your opinion</Button>
                <Button className='btns' buttonStyle='btn--primary'
                buttonSize='btn--large'>View others views</Button>
            </div>
        </div>

    );
}

export default HeroSection;
