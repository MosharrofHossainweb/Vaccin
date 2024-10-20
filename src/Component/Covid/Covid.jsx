import React from 'react'
import './Covid.css'
const Covid = () => {
  return (
    <>
      <section className='Covid bg-[url(images/bg.png)]'>
        <div className="container">
            <div className="Covid_Pre">
                <h2>Covid-19 Prevention</h2>
                <h3> <span className='text-Brancolor'>COVID-19</span> Symptoms</h3>
                <p>Adipiscing nec etiam tortor elit quisque. Arcu aliquet convallis aenean eu velit.
                Mi vestibulum, ullamcorper venenatis imperdiet augue arcu donec neque.</p>
                <div className="covid_img">
                    <img src="images/Group 65.png" alt="" />
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Covid
