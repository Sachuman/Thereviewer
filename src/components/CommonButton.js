import React from 'react';
import './CommonButton.css';
import {Link} from 'react-router-dom';

const ok = ['btn--primary', 'btn--outline']
const jjj = ['btn--medium', 'btn--large'];

export const Button = ({
      children,
      type,
      onClick, 
      buttonStyle, 
      buttonSize}) => {
        const checkButtonStyle = ok.includes(buttonStyle) ? buttonStyle : ok[0]
        const checkButtonSize = jjj.includes(buttonSize) ? buttonSize : jjj[0]
        
        return(
            <Link to='sign-up' className='btn-mobile'>
                <button className = {`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
                    {children}
                </button>
            </Link>
        )

      };