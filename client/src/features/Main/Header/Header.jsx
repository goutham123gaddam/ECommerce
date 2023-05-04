import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export function Header(props) {
    
    return (
        <div className='Header1'>
            <div className='header1-left'>
                <div href='#' id='personal' className='header-button'><Link to="/" style={{textDecoration: 'none',color: 'white'}}>NetStoneGlobal</Link></div> 
            </div>
            {props.isHome?(
                <div className='header1-right'>
                <div href='#' className='header-button'>Business</div>
                <div href='#' className='header-button'>Store Finder</div>
                <div href='#' className='header-button'>Check coverage and network status</div>
                <div href='#' className='header-button'>Contact us</div>
                <div href='#' className='login-button'><Link to="/login" style={{textDecoration: 'none',color: 'black'}}>Log in</Link></div>
            </div>
            ):""}
        </div>
    )
}