import React from 'react';
import { Header } from './Header/Header';
import './Main.css';
import Body from './Body/Body'
import Footer from './Footer/Footer';

export function Main() {
    
    return (
        <div className='body'>
            <Header />
            <Body />
            <Footer />
        </div>
    )
}