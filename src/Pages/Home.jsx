// import React from 'react'
import TopBar from '../Components/TopBar'
import Header from '../Components/Header'
import SectionOne from '../Components/SectionOne'
import SectionTwo from '../Components/SectionTwo'
import SectionThree from '../Components/SectionThree'
import SectionNewsLetter from '../Components/SectionNewsLetter'
import SectionInstructor from '../Components/SectionInstructor'
import SectionFaqqArea from '../Components/SectionFaqqArea'
import SectionFeaturesArea from '../Components/SectionFeaturesArea'
import SectionInstucterTwo from '../Components/SectionInstucterTwo'
import SectionBlogPost from '../Components/SectionBlogPost'
import SectionCategories from '../Components/SectionCategories'
import SectionCourses from '../Components/SectionCourses'
import Footer from '../Components/Footer/Footer'
import SectionFactArea from '../Components/SectionFact'
import SectionAboutArea from '../Components/SectionAboutArea'

function Home() {
  return (
    <div className='home'>
    {/* <TopBar/> */}
    {/* <Header/> */}
    {/* <SectionOne/> */}
    <SectionTwo/>
    <SectionCategories/>
    <SectionThree/>
    <SectionAboutArea/>
    <SectionCourses/>
    <SectionNewsLetter/>
    <SectionInstructor/>
    <SectionFactArea/>
    <SectionFaqqArea/>
    <SectionFeaturesArea/>
    <SectionInstucterTwo/>
    <SectionBlogPost/>
    <Footer/>
    </div>
  )
}

export default Home