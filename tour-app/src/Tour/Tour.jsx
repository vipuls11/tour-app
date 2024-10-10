import React, { useState } from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Tour.css'

const Tour = ({id ,name, image , info, price, removeTour}) => {
    console.log(id, name,'tour')
    const [readMore, setReadMore] = useState(false)
  return (
    <div className='Tour_container' id={id}>
       
        <LazyLoadImage src={image} alt="" effect="blur"  className="LazyLoadImage"/>
        <div className='title_price'>
        <h3>{name}</h3>
        <p className='price'>₹ {price}</p>
        </div>
        <p>
          {readMore ? info : `${info.substring(0,100)}...`}
          <button onClick={()=>{setReadMore(!readMore)}} className='read_more'>{readMore ? 'show less' : 'read more'}</button>
        </p>
        
        <button className='delete_btn' onClick={()=>removeTour(id)}>Not Interested</button>
    </div>
  )
}

export default Tour