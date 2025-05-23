
import { FaArrowLeft,FaArrowRight } from "react-icons/fa6";
import {IMG_URL} from "../utils/constants"

const CategoryCarousel = (props) => {

  return (
  <>
    <div className="flex justify-between items-center   ">
        <h1 className="font-bold text-xl">What's on your mind?</h1>
            <div>
             <button className="bg-gray-300 p-2 rounded-full mr-4"> <FaArrowLeft/></button>
             <button className="bg-gray-300 p-2 rounded-full mr-4"> <FaArrowRight/></button>
             </div>
     </div>    

     <div className="flex items-center gap-8 overflow-hidden border-b border-gray-400 pb-4 mb-4">
                {props.data.map((category) => < img className="w-36 h-48" key={category.id} src={IMG_URL+category.imageId}/>)}
      </div>

  </>   

  )
}

export default CategoryCarousel