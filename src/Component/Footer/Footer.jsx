import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FiYoutube } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";
import { IoIosSend } from "react-icons/io";
const Footer = () => {
  return (
    <>
      <footer className='footer mt-[20px]'>
            <div className="Footer_main bg-[url('images/bg.png')] bg-no-repeat bg-cover bg-center">
                 
                     <div className="container">
                        <div className="pop_up_box flex justify-center items-center relative">

                                <div className="pop_up absolute lg:top-[-200px] md:top[-130px]">
                                    <h2>Get a quote</h2>
                                    <h3>Please do enter your email address below</h3>
                                    <div className="serch flex ">
                                        <input type="text" />
                                        <button><IoIosSend /></button>
                                    </div>

                                </div>
                        </div>
                        <div className="footer_nav">
                            <nav>
                                <div className="footer_manu">

                                        <div className="nav_log pb-3">
                                            <img src="images/logo.png" alt="logo" />
                                        </div>
                                        <div className="nav_main_manu">
                                             <ul className='nav_manu'>
                                                <li><Link to='#'>Home</Link></li>
                                                <li><Link to='#'>Services</Link></li>
                                                <li><Link to='#'>Schedule</Link></li>
                                                <li><Link to='#'>Contact</Link></li>

                                             </ul>
                                        </div>
                                        <div className="footer_Social">
                                             <FiYoutube         className='text-[#fff] hover:text-blue-300 lg:text-5xl md:text-3xl 2xl' />
                                             <FaInstagram       className='text-[#fff] hover:text-blue-300 lg:text-5xl md:text-3xl 2xl' />
                                             <CiTwitter         className='text-[#fff] hover:text-blue-300 lg:text-5xl md:text-3xl 2xl' />
                                             <SlSocialFacebook  className='text-[#fff] hover:text-blue-300 lg:text-5xl md:text-3xl 2xl' />
                                        </div>
                                </div>
                            </nav>
                        </div>
                     </div>
            </div>
      </footer>
    </>
  )
}

export default Footer
