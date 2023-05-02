import React from 'react';
import './Header.css';

export function Header() {
    
    return (
        <div className='Header1'>
            <div className='header1-left'>
                <div href='#' id='personal' className='header-button'>NetStoneGlobal</div> 
            </div>
            <div className='header1-right'>
                <div href='#' className='header-button'>Business</div>
                <div href='#' className='header-button'>Store Finder</div>
                <div href='#' className='header-button'>Check coverage and network status</div>
                <div href='#' className='header-button'>Contact us</div>
                <div href='#' className='login-button'>Login</div>
            </div>
        </div>
    )
}