
import './Navber.css'
import logo from '../../assets/logo.png'
// import { RiMenu3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import ResponsiveNav from '../ResponsiveNav/ResponsiveNav';

const Navber = () => {
  // const [show, setShow] = useState(false);

  // const toggleMenu = () => {
  //   setShow(!show);
  // };

  return (
    <>
      <nav className="navber w-full mt-2  bg-[#0B153C]">
        <div className="container">
          <div className="manu_row p-3">
            <div className="manu_logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="manu">

                  <div className="manu_bar">
                    <ul>
                        <li><Link to='#'>Home</Link></li>
                        <li><Link to='#'>Services</Link></li>
                        <li><Link to='#'>Schedule</Link></li>
                        <li><Link to='#'>Contact</Link></li>

                    </ul>
                  <div className="check px-[85px] py-[10px]">
                          <a href="">Check Status</a>
                        </div>
                  </div>
            </div>
                  <ResponsiveNav/>
          </div>
        </div>
      </nav>
        
    </>
  );
};

export default Navber;
