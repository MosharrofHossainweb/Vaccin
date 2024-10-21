import './Result.css'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import { useState } from 'react';

const Result = () => {

const [show,setShow] = useState(false)
// ----------funtionality------------

const handelShow1=()=>{
  setShow(!show)
}

  return (
    <>
      <section className='result bg-[url("images/bg.png")] pt-[62px] pb-[60px] '>
        <div className="container">
          <div className="main_result">
              <h2>Check your COVID-19 result on our Database</h2> 
            <div className="resultCollect">
                <div className="inputs_box">
                      <input className='in1' type="text" placeholder='Okeowo' />
                      <input className='in2' type="text" placeholder='NIK Number' />
                    <div className="chech_but">
                      <Link className='check_b' to={'#'}>Check</Link>
                    </div>
                </div>
            </div>
                <h3>Need a certificate for your COVID-19 result? Please click here</h3>
          
          </div>
          <div className="why">

            <div className="why_head">
              <h2>Why get vaccinated
              today?</h2>
              <p>Magna adipiscing at elit at ornare lectus nibh lorem. 
Ac, sed ac lorem pellentesque vestibulum risus matti. 
In molestie condimentum malesuada non.</p>
            </div>

            <div className="why_protec">
              <div className="protect1">
                <img src="images\Group 31.png" alt="" />
                <h2>Protects your immune 
                system against viruses</h2>
                <p>Velit ut consectetur mauris, orci amet, 
                      faucibus. 
                      Sit turpis fringilla ipsum pretium,
                      dictum. Dolor eget vel nulla lorem ac.</p>
                    <div className="arrow flex h-7">
                  <h3 onClick={handelShow1} >Read More 
                      </h3>
                    <  FaArrowRight  className='arrow mt-1.5 pl-1' />
                      </div>  
                  {
                          show&&
                          
                        <p className='text-blue-800 pl-9 py-3 rounded-md bg-[#C4C4C433] '>
                          Lorem ipsum, dolor 
                          sit amet consectetur
                        sit amet consectetur adipisicing 
                        elit. Esse, at!</p>
                        }
              </div>

              <div className="Protec_part2  lg:mt-[200px] md:mt-[30px] mt-[20px] flex flex-wrap lg:gap-[70px] md:gap-[50px] gap-[30px]">
                    <div className="protect2 hover:scale-[1.1]">
                      <img src="images\Group 32.png" alt="" />
                      <h2>Minimize the spread
                      of the Virus</h2>

                      <div className="arrow flex ">
                        <h3>Read More 
                                      </h3>
                    <  FaArrowRight  className='arrow mt-1.5 pl-1' />
                      </div>
                        
                    </div>
                    <div className="protect2 hover:scale-[1.1] ">
                      <img src="images\Group 33.png" alt="" />
                      <h2>Protect yourself</h2>

                      <div className="arrow flex ">
                        <h3>Read More 
                                      </h3>
                    <  FaArrowRight  className='arrow mt-1.5 pl-1' />
                      </div>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  )
}

export default Result
