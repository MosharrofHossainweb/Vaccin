import React from 'react';
import './Feedback.css';

const Feedback = () => {
  return (
    <>
      <section className='Feedback lg:mb-[300px] md:mb-[150px] mb-[90px]'>
        <div className="container">
          <div className="Feedback_info">
            <h2>FEEDBACK</h2>
            <h3>What our Patients Think</h3>
            <div className="Feedback_car bg-[url(images/covid.png)] bg-no-repeat bg-cover bg-center mb-[50px]">
              <p>Adipiscing nec etiam tortor elit quisque. Arcu aliquet convallis aenean eu velit.
                Mi vestibulum, ullamcorper venenatis imperdiet augue arcu donec neque.</p>
              <div className="FeedCard_Row flex flex-wrap lg:gap-[65px] gap-5 px-7">
                <div className="Single_card mb-2 rounded-lg hover:bg-Brancolor transition-all">
                  <div className="card_img flex gap-3">
                    <img src="images/Rectangle 25.png" alt="img" className='w-[55px] h-[55px] lg:w-[70px] lg:h-[70px]' />
                    <img src="images/Group 70.png" alt="" className='im2' />
                  </div>
                  <p>“Been stressing about a close centre to get the covid-19 vaccine, until I tried Vaccination.ng”</p>
                </div>

                <div className="Single_card mb-2 rounded-lg hover:bg-Brancolor">
                  <div className="card_img flex gap-3">
                    <img src="images/Rectangle 24.png" alt="img" className='w-[55px] h-[55px] lg:w-[70px] lg:h-[70px]' />
                    <img src="images/Group 73.png" alt="" className='im2' />
                  </div>
                  <p>“Got my vaccine very close to my house. Was very easy scheduling an appointment.”</p>
                </div>

                <div className="Single_card mb-2 rounded-lg hover:bg-Brancolor">
                  <div className="card_img flex gap-3">
                    <img src="images/Rectangle 26.png" alt="img" className='w-[55px] h-[55px] lg:w-[70px] lg:h-[70px]' />
                    <img src="images/Group 73.png" alt="" className='im2' />
                  </div>
                  <p>“Been stressing about a close centre to get the covid-19 vaccine, until I tried Vaccination.ng”</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Feedback;
