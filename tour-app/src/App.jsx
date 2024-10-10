import { useEffect, useState } from 'react'
import './App.css'
import Loading from './loading/Loading'
import Tours from './Tour/Tours'

const url = 'http://localhost:5000/api/tours'
function App() {
  const loadingimg = "image/loading.gif"
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const fetchTours = async () =>{
    try {
      setLoading(true)
      const response = await fetch(url);
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
      
    } catch (error) {
        setLoading(false)
        console.log(error)
    }
  };

  useEffect(()=>{
  setTimeout(()=>fetchTours(),3000)  
  },[])

  const removeTour =(id) =>{
    const newTours = tours.filter((tour)=>tour.id !== id);
    setTours(newTours)
  }

  if(loading){
    return(
      <main>
        <Loading loading={loadingimg}/>
      </main>
    )
  }

  if(tours.length === 0){
    return(
      <main className='No_Tours'>
        <div className='Refresh_container'>
            <h2>No Tours Left</h2>
            <button className='Refresh_btn' onClick={fetchTours}> Refresh</button>
        </div>
      </main>
    )
  }

  return (
    <main>
     <Tours tours = {tours} removeTour={removeTour}/>
    </main>
  )
}

export default App
