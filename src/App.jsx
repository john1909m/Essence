// import { useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Categories from './Components/Categories/Categories'
import PopularProducts from './Components/PopularProducts/PopularProducts'
import SaleSection from './Components/SaleSection/SaleSection'
import HomeSwiper from './Components/Swiper/HomeSwiper'



function App() {
  // const [count, setCount] = useState(0)

  

  return (
    <>
     <HomeSwiper></HomeSwiper>
     <Categories></Categories>
     <SaleSection></SaleSection>
     <PopularProducts></PopularProducts>
    </>
  )
}

export default App
