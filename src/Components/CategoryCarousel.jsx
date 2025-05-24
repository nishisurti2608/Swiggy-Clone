
import { FaArrowLeft,FaArrowRight } from "react-icons/fa6";
import {IMG_URL} from "../utils/constants"
import { useState } from "react";

const CategoryCarousel = (props) => {

  const[slidePosition,setSlidePosition] = useState(0)
  
  
  

  // Carousel Left-Right Arrow Functions

  const totalItems = props.data.length

  function moveCarouselToLeft(){
  }

  function moveCarouselToRight(){

  }

  return (
  <>
    <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl">What's on your mind?</h1>
            <div>
             <button className="bg-gray-300 p-2 rounded-full mr-4" onClick={moveCarouselToLeft}> <FaArrowLeft/></button>
             <button className="bg-gray-300 p-2 rounded-full mr-4" onClick={moveCarouselToRight}> <FaArrowRight/></button>
             </div>
     </div>    

     <div className="flex items-center overflow-hidden gap-8   border-b border-gray-400 pb-4 mb-4 ">
                {props.data.map(
              
                  (category) =>
                  <div  className="shrink-0   duration-10" key={category.id} style={{ transform: `translateX(-400px)`} }>
                < img className="w-36 h-48 cursor-pointer"  src={IMG_URL+category.imageId}/>
                </div>)}
      </div>
  </>   

  )
}

export default CategoryCarousel