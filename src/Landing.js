import i1 from './LandingImages/1.jpg';
import React from 'react';
import { Carousel } from 'antd';

import './styles/App.css';

class Landing extends React.Component {
    render() {
        return(
            <div className='landing'>
                {/* <img src={'https://image.shutterstock.com/z/stock-photo-popular-photographers-attraction-of-braies-lake-colorful-autumn-landscape-in-italian-alps-705417145.jpg'} alt={'landing image'}/> */}
                <img src={i1} alt={'landing image'}/>
            <Carousel autoplay>
                <div>
                    <img src={'require(./LandingImages/1.jpg)'} alt={'landing image'}/>
                </div>
                <div>
                    <img src={'./LandingImages/landing2.jpg'} alt={'landing image'}/>
                </div>
                <div>
                    <img src={'./LandingImages/landing3.jpg'} alt={'landing image'}/>
                </div>
                <div>
                    <img src={'./LandingImages/landing1.jpg'} alt={'landing image'}/>
                </div>
            </Carousel>

                {/* <h1>
                    Hi, I'm Tong Kong
                </h1>
                <h3>
                    I create programs and music.
                </h3> */}
            </div>
        )
    }
}

export default Landing;