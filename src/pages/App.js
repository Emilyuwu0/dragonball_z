import "../styles/App.css";



import About from "../components/Home/About";
import HeroIndex from "../components/Home/Hero/index";
import Pjs from "../components/Home/Pj";
import Planets from "../components/Home/Planets";
import Trans from "../components/Home/Trans/Trans";
import Footer from "../components/Home/Footer";

export default function Home() {
 
  return (
    <div>
     <HeroIndex/>
      <About />
      <Pjs/>
      <Trans/>
      <Planets/>
      <Footer/>
    </div>
  );
}
