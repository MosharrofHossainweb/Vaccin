import React from 'react'
import { Link } from 'react-router-dom'

const Commonbutton = ({CommonbuttonText}) => {
  return (
    <>
      <Link className='w-[140px] lg:w-[200px] lg:h-[69px] h-[49px] flex justify-center items-center border-2 border-solid border-Brancolor hover:bg-transparent transition-all rounded-[20px] bg-Brancolor text-[14px] md:text-[20px] lg:text-[24px] font-bold font-Monserit text-white' to={'#'}>{CommonbuttonText}</Link>
      
    </>
  )
}

export default Commonbutton
