import React from 'react'
import { Slide } from 'react-slideshow-image'
import img1 from '../Images/teste/img_1.jpg'
import img2 from '../Images/teste/img_2.jpg'
import img3 from '../Images/teste/img_3.jpg'

import '../JavascriptComponents/MenuButtonPaths/Portfolio.css'

const Slideshow = ({property}) => {
        const {index, picture, city, address, bedrooms, bathrooms, carSpaces} = property;
        const nextProperty = () => {
            const newIndex = this.state.property.index+1;
            this.setState({
                property: data.properties[newIndex]
            })
        }
        
        const prevProperty = () => {
            const newIndex = this.state.property.index-1;
            this.setState({
                property: data.properties[newIndex]
            })
        }

    return (
        <div id={`card-${index}`} className="card">
            <img src={picture} alt={city} />
            <div className="details">
                <span className="index">{index+1}</span>
                <p className="location">
                    {city}<br />
                    {address}
                </p>
                <ul className="features">
                    <li className="icon-bed">{bedrooms} <span>bedrooms</span></li>
                    <li className="icon-bath">{bathrooms} <span>bathrooms</span></li>
                    <li className="icon-car">{carSpaces} <span>parking spots</span></li>
                </ul>
            </div>
        </div>
    )
}

export default Slideshow;