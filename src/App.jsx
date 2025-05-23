import { useEffect, useState } from "react"
import CategoryCarousel from "./Components/CategoryCarousel"
import Header from "./Components/Header"
import { SWIGGY_API_URL } from "./utils/constants"


const App = () => {

  const[category,setCategory]=useState([])

  //Fetching Data

  useEffect(()=>{
    console.log("Rendered!")
  fetchData()
  },[])


  const fetchData = async () => {
    const api_data = await fetch(SWIGGY_API_URL).then((res)=> res.json().then((data)=> setCategory(data?.data?.cards[0].card?.card?.gridElements?.infoWithStyle?.info)))
  }

  return (
    <div className="items-center">
        <Header/>
    <div className="px-40 py-4">  <CategoryCarousel data={category}/></div>
      
     </div>
  )
}

export default App