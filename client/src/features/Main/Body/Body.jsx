import React from 'react';
import './Body.css';
import Deals from './Deals/Deals';
import Latest from './Latest/Latest';

function Body() {

    return (
        <>
            <div className='header-image'><img src='https://i20.haber7.net/resize/1280x720//haber/haber7/og_image/2022/38/iphone_14_prolarin_kamerasinda_buyuk_sorun_1663576482_2154.jpg'></img></div>
            <Deals />
            <div className='body-highlight'>Best Network Ever</div>
            <Latest />
        </>
    )
}

export default Body;