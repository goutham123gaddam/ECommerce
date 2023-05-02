import React from 'react';
import './Slideshow.css';
import Product from './Product/Product';
import Strings from '../../../../Strings/strings.json';

function Slideshow() {

    return (
        <>
            <div className='slideshow'>
                {Strings.latest.map((obj) => {
                    return (
                        <Product 
                            discount={obj.discount}
                            img={obj.img}
                            speciality={obj.speciality}
                            company={obj.company}
                            model={obj.model}
                            price={obj.price}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default Slideshow;