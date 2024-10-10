import React from 'react'
import './Tours.css'
import Tour from './Tour'

const Tours = ({tours, removeTour}) => {
  return (
    <section className="main_container">
        <div className='title'>
            <h2>Ours Tours</h2>
            <div className='underline'></div>        
        </div>
        <div>
            {
                tours.map((tour)=>{
                    return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
                })
            }
        </div>
    </section>
  )
}

export default Tours