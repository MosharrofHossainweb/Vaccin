

import Banner from "../Component/Banner/Banner";
import Brand from "../Component/Brand/brand";
import Covid from "../Component/Covid/Covid";
import Feedback from "../Component/Feedback/Feedback";
import Footer from "../Component/Footer/Footer";
import Navber from "../Component/Navber/Navber";
import Registraion from "../Component/Registration/Registraion";
import Result from "../Component/Result/Result";



const Home = () => {
  return (
    <>
    <Navber/>
    <Banner/>
    <Brand/>
    <Result/>
    <Registraion/>
    <Covid/>
    <Feedback/>
    <Footer/>
    </>
  );
}

export default Home
