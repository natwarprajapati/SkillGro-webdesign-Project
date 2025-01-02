import { About } from "../Components/About"
import { Banner } from "../Components/Banner"
import { BlogPost } from "../Components/BlogPost"
import { Brand } from "../Components/Brand"
import { Categories } from "../Components/Categories"
import { Courses } from "../Components/Courses"
import { FactArea } from "../Components/FactArea"
import { FaqqArea } from "../Components/FaqqArea"
import { Features } from "../Components/Features"
import { InstucterTwo } from "../Components/InstrucorTwo"
import { Instructor } from "../Components/Instructor"
import { NewsLetter } from "../Components/NewsLatter"

export const Home = () => {
  return (
    <>
      <Banner />
      <Categories/>
      <Brand/>
      <About/>
      <Courses/>
      <NewsLetter/>
      <Instructor/>
      <FactArea/>
      <FaqqArea/>
      <Features/>
      <InstucterTwo/>
      <BlogPost/>
    </>
    )
}