import './Result.css'
import { Link } from 'react-router-dom'
const Result = () => {
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
        </div>
      </section>
    </>
  )
}

export default Result
