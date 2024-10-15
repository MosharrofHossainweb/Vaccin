
import { useState } from 'react';
import './ResponsiveBar.css'
import { RiMenuUnfold4Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
const ResponsiveNav = () => {

  const[show,setShow]=useState(false)
  return (
    <>
      <section className="responsiveNav">
          <RiMenuUnfold4Fill onClick={()=>setShow(!show)} className="w-[45px] h-[45px] bg-[#C4C4C426] p-[7px] rounded-[10px] text-white" />
          {
            show&&
          <div className="resmenu">
                    <ul>
                        <li><Link to='#'>Home</Link></li>
                        <li><Link to='#'>Services</Link></li>
                        <li><Link to='#'>Schedule</Link></li>
                        <li><Link to='#'>Contact</Link></li>

                    </ul>
                  <div className="resmenu_button">
                          <a href="">Check Status</a>
                        </div>
                  </div>
          }
      </section>
    </>
  )
}

export default ResponsiveNav
