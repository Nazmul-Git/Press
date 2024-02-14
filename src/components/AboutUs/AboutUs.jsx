/* eslint-disable react/no-unescaped-entities */

import { Link } from 'react-router-dom';
import img1 from '../../assets/aboutUs/veichle2.jpg'
import img2 from '../../assets/aboutUs/poster2.jpg'
const AboutUs = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col-reverse lg:flex-row">
                <div className='lg:w-1/2 m-0 max-sm:mt-10 md:mt-20 md:pt-6'>
                    <h3 className='text-xl max-sm:text-center font-bold text-[#800000]'>About Us</h3>
                    <h1 className="text-5xl font-bold">Presenting About Our Skills and Experience</h1>
                    <p className="py-6 text-justify">Prime Printing Press and Prime Digital World is one of the
                        largest printing presses based in Sultanate of Oman.
                        Incorporated in the year 2001, we are the most progressive and professionally managed printing
                        company with expertise in high volume printing
                        in the Middle East region.</p>
                    <p className="py-6 text-justify">Our state-of-the-art printing factory in Muscat,
                        features latest printing and binding machinery to ensure high standards in print production.Built upon a strong founding vision, Prime Printing Press has grown into a global printing company, catering to a wide range of clients in local and international markets. </p>
                    <Link to='/about'><button className="btn text-white text-lg w-40 h-14 bg-[#800000]">Get More Info</button></Link>
                </div>
                <div className='lg:w-1/2 relative mb-12 md:mb-16 lg:ml-6'>
                    <img src={img2} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={img1} className="w-2/3 absolute rounded-lg right-5 top-2/3 border-8 border-white" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;