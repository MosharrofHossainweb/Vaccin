import Commonbutton from '../../Common/Commonbutton'
import './banner.css'
const Banner = () => {
  return (
    <>
      <section className="banner bg-[url('images/bannerBg.png')]">
        <div className="container">
            <div className="banner_row p-2 lg:pr-5">
                <div className="banner_text p-2 lg:pr-5 ">
                <h2 className="">Get Vaccinated. Boost your Immune System</h2>
                <h1>COVID-19 Vaccination
                Got Easier With, <span >Vaccination.ng</span>
                  </h1>
                <p>Vaccination.ng will help you find the nearest
                centre for vaccination, in all 36 states in Nigeria.</p>
                <div className="button flex gap-5">
                  <Commonbutton CommonbuttonText={'Get Vaccine'}/>
                  <Commonbutton CommonbuttonText={'Help Centre'}/>
                </div>
                </div>
                <div className="banner_img pl-5">
                  <img src="images/madicin.png" alt="vaccin" className='mr-5 ' />
                  <div className="Animated_img ">
                    <img className='animation_1' src="images\Group 17 (1).png" alt="gp" />
                    <img className='animation_2' src="images\Group 18.png" alt="gp" />
                  </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Banner
