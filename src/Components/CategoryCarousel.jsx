
import { FaArrowLeft,FaArrowRight } from "react-icons/fa6";
import {IMG_URL} from "../utils/constants"
import { useState } from "react";

const CategoryCarousel = (props) => {

  const[slidePosition,setSlidePosition] = useState(0)
  const moveCategoryBy = 3
  const visibleItems = 6
 

  
  const itemWidth = 144 + 32; // image width + gap
  
  

  // Carousel Left-Right Arrow Functions

  const totalItems = props.data.length
  const maxSlidePosition = totalItems - visibleItems;

  function moveCarouselToLeft(){
    
    setSlidePosition(prev => Math.max(0, prev - moveCategoryBy));
    console.log(slidePosition)

  }

  function moveCarouselToRight(){
 
    setSlidePosition(prev => Math.min(maxSlidePosition, prev + moveCategoryBy));

  
  }

  return (
  <>
    <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl">What's on your mind?</h1>
            <div>
             <button   className={`p-2 rounded-full mr-4 ${slidePosition <= 0 ? 'bg-gray-200 text-gray-400' : 'bg-gray-300'}`} onClick={moveCarouselToLeft} disabled={slidePosition<=0}> <FaArrowLeft/></button>
             <button className={`p-2 rounded-full mr-4 ${slidePosition >= maxSlidePosition ? 'bg-gray-200 text-gray-400' : 'bg-gray-300'}`} onClick={moveCarouselToRight} disabled={slidePosition >= maxSlidePosition}> <FaArrowRight/></button>
             </div>
     </div>    

     <div className="flex items-center overflow-hidden gap-8 border-b border-gray-400 pb-4 mb-4 transition-transform ">
                {props.data.map(
              
                  (category) =>
                  <div  className="shrink-0 transition-transform duration-700 ease-in-out" key={category.id} style={{ transform: `translateX(-${(slidePosition*itemWidth)}px)`} }>
                < img className="w-36 h-48 cursor-pointer"  src={IMG_URL+category.imageId}/>
                </div>)}
      </div>
  </>   

  )
}

export default CategoryCarousel