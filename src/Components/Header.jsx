import Logo from "./Logo"

import { MdKeyboardArrowDown } from "react-icons/md";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { RiDiscountPercentLine } from "react-icons/ri";
import { IoHelpBuoy } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { CgShoppingBag } from "react-icons/cg";









const Header = () => {
  return (
  
    <div className="px-12  h-20 flex  items-center justify-between bg-white shadow-lg  ">
      
        <header className="flex justify-evenly items-center px-8">
            {/* logo and city selector */}
        <div className="cursor-pointer transition  delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-125">   <Logo/></div>
        <div className="pr-12 cursor-pointer flex group px-10 "> <span className="border-b-2 border-black group-hover:text-orange-600 group-hover:border-orange-600 text-sm font-semibold">Other</span><p className="text-gray-600 px-2 group-hover:text-gray-400 text-sm">Ahmedabad, Gujarat, India</p><MdKeyboardArrowDown color="#FF5200" fontSize="1.3em"/></div>
       </header>
            {/* Navigation with react-icons */}
        <nav>
            <ul className="flex justify-evenly gap-12">
               <li className="font-medium text-black flex items-center  gap-2  hover:text-orange-600 hover:cursor-pointer"> <PiSuitcaseSimpleBold fontSize="1.3em"/>Swiggy Corporate</li>
                <li className="font-medium text-black flex items-center gap-2  hover:text-orange-600 hover:cursor-pointer"><IoSearch fontSize="1.3em" />Search</li>
                <li className="font-medium text-black flex items-center gap-2  hover:text-orange-600 hover:cursor-pointer"><RiDiscountPercentLine  fontSize="1.3em"/>Offers <sup className="font-bold text-orange-600">NEW</sup></li>
                <li className="font-medium text-black flex items-center gap-2  hover:text-orange-600 hover:cursor-pointer"><IoHelpBuoy fontSize="1.3em" />Help</li>
                <li className="font-medium text-black flex items-center gap-2  hover:text-orange-600 hover:cursor-pointer"><FaRegUser fontSize="1.3em"  />Sign In</li>
                <li className="font-medium text-black flex items-center gap-2  hover:text-orange-600 hover:cursor-pointer"><CgShoppingBag  fontSize="1.3em" />Cart</li>
            </ul>
        </nav>
     
  
    </div>
  )
}

export default Header