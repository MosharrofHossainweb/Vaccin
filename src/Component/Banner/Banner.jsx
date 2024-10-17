import { Link } from 'react-router-dom'
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
            <div className="clock_part flex items-center gap-2 md:gap-[20px] lg:ml-[70px]  w-[260px] lg:w-[400px] text-[14px] font-bold md:text-[20px]; ">
              <img src="images\Group 5.png" alt="clock" />
               <h2 className='text-[#ffffff] font-Monserit font-bold text-[14px]        lg:text-[24px] '>Schedule your Vaccination</h2>
            </div>
            <div className="submit m-2 p-3">
              <div className="submit_row ">
                <div className="location flex gap-5">
                  <img src="images/loca.png" className='w-[50px] h-[50px]' alt="location" />
                  <div className="loc_text">
                    <h2 className='l'>Location</h2>
                    <h3>Ikeja Lagos, Nigeria</h3>
                  </div>
                </div>
                <div className="location flex gap-5">
                  <img src="images/calendar.png" className='w-[50px] h-[50px]' alt="location" />
                  <div className="loc_text">
                    <h2 className='l'>Date</h2>
                    <h3>29 February, 2022</h3>
                  </div>
                </div>
                <div className="location flex gap-5">
                  <img src="images/shield.png" className='w-[50px] h-[50px]' alt="location" />
                  <div className="loc_text">
                    <h2 className='l'>Vaccine Type</h2>
                    <h3>Mordena</h3>
                  </div>
                </div>
                  <Link className='sub' to={'#'}>Submit</Link>
              </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Banner
