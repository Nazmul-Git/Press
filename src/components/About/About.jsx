import img from '../../assets/aboutUs/about.jpg'

const About = () => {
    return (
        <div className="max-sm:px-4">
            <h1 className="text-7xl max-sm:text-5xl font-extrabold text-[#800000] mt-10 ">About Us</h1>
            <div className='flex py-10'>
                <div className='pr-6'>
                    <img src={img} alt="..." />
                </div>
                <div className="text-xl max-sm:text-lg">
                    <p className="text-justify">Prime Printing Press and Prime Digital World is one of the
                        largest printing presses based in Sultanate of Oman.
                        Incorporated in the year 2001, we are the most progressive and professionally managed printing
                        company with expertise in high volume printing
                        in the Middle East region.
                    </p>
                    <p className="pt-6 text-justify">Our state-of-the-art printing factory in Muscat,
                        features latest printing and binding machinery to ensure high standards in print production.Built upon a strong founding vision, Prime Printing Press has grown into a global printing company, catering to a wide range of clients in local and international markets.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default About;