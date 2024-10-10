import React from 'react'
import './Loading.css'

const Loading = ({loading}) => {
  return (
    <div className='loading'><img src={loading} alt="" srcset="" /></div>
  )
}

export default Loading