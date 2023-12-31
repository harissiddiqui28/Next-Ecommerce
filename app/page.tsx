import Image from 'next/image'
import Hero from './(Components)/Hero'
import Categories from './(Components)/Categories'
import Recent from './(Components)/Recent'
import Banner from './(Components)/Banner'
import Offer from './(Components)/Offer'
import Special from './(Components)/Specialoffer'
import Bar from './(Components)/Bar'
import Brand from './(Components)/Brand'
import New from './(Components)/New'
import Byprice from './(Components)/Byprice'
import Condition from './(Components)/Condition'
import Footer from './(Components)/Footer'
import Text from './(Components)/Text'
import PageOne from './(Components)/PageOne'
import Cards from './(Components)/Cards'
import Product from './(Components)/Product'

export default function Home() {
  return (
  <>
    <Hero/>
       <Categories/>
        <Recent/>
        <Banner/>
        <Offer/>
        <Special/>
        <Bar/>
        <Brand/>
        <New/>
        <Byprice/>
        <Condition/>
        <Footer/>
        <Text/>
        {/* <PageOne/> */}
        {/* <Product/> */}
        
  </>
    
   
  )
}
