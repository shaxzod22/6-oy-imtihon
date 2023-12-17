
import { useContext } from 'react'
import './../components/styles/Main.scss'
import FoodDrinkSection from './FoodDrinkSection'
import NavbarSection from './NavbarSection'
import { InputContext } from '../App'
import PrivateSection from './PrivateSection'
import SearchedPage from './SearchedPage'
import SuggestedSection from './SuggestedSection'


const Main = () => {
  const {search} = useContext(InputContext)
  console.log(search);
  return (
    
    <main className="main">
    <NavbarSection/>
    
    <section className="data">
    {search?<SearchedPage/>:
    <>
    <PrivateSection/>
    <SuggestedSection/>
    <FoodDrinkSection/>
    </>}
    </section>
    </main> 
    
    )
  }
  
  export default Main
  