import { Link } from "react-router-dom";
import { EnvelopeIcon, PhoneIcon, } from '@heroicons/react/24/solid'
import logo1 from '../../assets/logo/Prime printing press logo.png'
import logo2 from '../../assets/logo/Prime digital logo.png'

const Navbar = () => {
    const navbarItem = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About us</Link></li>
        <li>
            <details>
                <summary><Link to='/services'>Services</Link></summary>
                <ul className='p-2 w-52'>
                    <li><Link to={`/services/businesscard`}>Business Card</Link></li>
                    <li><Link to={`/services/letterhead`}>Letter Head</Link></li>
                    <li><Link to={`/services/envelope`}>Book & Envelope</Link></li>
                    <li><Link to={`/services/book`}>Stamp</Link></li>
                    <li><Link to={`/services/box`}>Box</Link></li>
                    <li><Link to={`/services/paperfile`}>Paper Punch File</Link></li>
                    <li><Link to={`/services/rollup`}>Roll Up</Link></li>
                    <li><Link to={`/services/gifting`}>Gifting</Link></li>
                    <li><Link to={`/services/sign`}>3D Sign</Link></li>
                    <li><Link to={`/services/tshirt`}>T-Shirt</Link></li>
                    <li><Link to={`/services/wall`}>Wall Graphics</Link></li>
                    <li><Link to={`/services/vehicle`}>Vehicle Graphics</Link></li>
                </ul>
            </details>
        </li>
        <li><Link to='/contact'>Contact</Link></li>

    </>

    return (
        <div className="navbar text-[#800000] flex items-center justify-center">
            <div className="dropdown ">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-58">
                    {
                        navbarItem
                    }
                    <div className="bg-[#800000] text-white rounded-xl">
                        <li ><Link><PhoneIcon className="h-4 w-4" />+968-99364737</Link></li>
                        <li ><Link><EnvelopeIcon className="h-4 w-4" />sales@primeprintingpress.com</Link></li>
                    </div>
                </ul>
            </div>
            <div className="navbar-start">

                <Link to={`/`} className="lg:text-3xl md:text-2xl text-sm font-semibold">
                    <div >
                        <img src={logo1} alt="..." />
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex flex-col">
                <ul className="menu menu-horizontal text-lg px-24 font-semibold bg-[#800000] text-white">
                    <li><Link><PhoneIcon className="h-5 w-6" />+968-99364737</Link></li>
                    <li><Link><EnvelopeIcon className="h-5 w-6" />sales@primeprintingpress.com</Link></li>
                </ul>
                <ul className="menu menu-horizontal z-[1] px-1 text-xl font-semibold">
                    {
                        navbarItem
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <Link to={`/`} className="lg:text-3xl md:text-2xl text-sm font-semibold">
                    <div>
                        <img src={logo2} alt="..." />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;