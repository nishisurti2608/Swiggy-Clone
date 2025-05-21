
import { FaArrowLeft,FaArrowRight } from "react-icons/fa6";




const CategoryCarousel = () => {
  return (
    <div className="flex justify-between items-center  border-b border-gray-400 pb-4 mb-4 ">
        <h1 className="font-bold text-xl">What's on your mind?</h1>
            <div>
             <button className="bg-gray-300 p-2 rounded-full mr-4"> <FaArrowLeft/></button>
             <button className="bg-gray-300 p-2 rounded-full mr-4"> <FaArrowRight/></button>
             </div>
    </div>
  )
}

export default CategoryCarousel