import CategoryCarousel from "./Components/CategoryCarousel"
import Header from "./Components/Header"

const App = () => {
  return (
    <div className="items-center">
        <Header/>
    <div className="px-40 py-4">  <CategoryCarousel/></div>
      
     </div>
  )
}

export default App