// import logo1 from '../../assets/logo/Prime printing press logo.png'
// import logo2 from '../../assets/logo/Prime digital logo.png'
import { FaFacebook, FaLinkedin, FaInstagram, FaPhone, FaWhatsapp, FaGoogle, FaLocationArrow,FaFax } from "react-icons/fa";
import { MdEmail, } from "react-icons/md";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="footer p-10 bg-[#800000] rounded-md text-white">
            <aside>
            <div className="space-y-2">
                    <h1 className=" text-5xl font-bold">Muscat Office</h1>
                    <h3 className=" text-3xl font-semibold">Prime Printing Press</h3>
                    <h3 className="text-3xl font-semibold">Prime Digital World</h3>
                    <p className="text-lg">
                        <span className="flex items-center gap-2"><FaLocationArrow /> P.O.Box 336, PC 112, CBD, Ruwi, Muscat, <br />
                            Muttrah 54 House Building <br />
                            Next to Central Bank of Oman <br />
                            Opposite of Bank Muscat
                        </span>
                        <span className="flex items-center gap-2"><MdEmail /> <a href="mailto:sales@primeprintingpress.com">sales@primeprintingpress.com</a></span>
                        <span className="flex items-center gap-2"><FaPhone /> <a href="tel:+96899364737">+968-99364737</a></span>
                        <span className="flex items-center gap-2"><FaFax /><a href="tel:+96822391571">+968-22391571</a></span>
                    </p>
                    <div className="flex gap-2 text-xl">
                        <a href="" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
                        <a href="" target="_blank" rel="noreferrer"><FaFacebook /></a>
                        <a href="" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                        <a href="" target="_blank" rel="noreferrer"><FaInstagram /></a>
                        <a href="" target="_blank" rel="noreferrer"><FaGoogle /></a>
                    </div>
                </div>
            </aside>
            <nav>
                <header className="footer-title">Services</header>
                <Link to='/services/businesscard' className="link link-hover">Business Card</Link>
                <Link to='/services/letterhead' className="link link-hover">Letterhead</Link>
                <Link to='/services/envelope' className="link link-hover">Book & Envelope</Link>
                <Link to='/services/book' className="link link-hover">Stamp</Link>
                <Link to='/services/box' className="link link-hover">Box</Link>
                <Link to='/services/paperfile' className="link link-hover">Paper Punch File</Link>
                <Link to='/services/rollup' className="link link-hover">Roll Up</Link>
                <Link to='/services/gifting' className="link link-hover">Gifting</Link>
                <Link to='/services/sign' className="link link-hover">3D Sign</Link>
                <Link to='/services/tshirt' className="link link-hover">T-Shirt</Link>
                <Link to='/services/wall' className="link link-hover">Wall Graphics</Link>
                <Link to='/services/vehicle' className="link link-hover">Vehicle Graphics</Link>
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                <Link to='/about' className="link link-hover">About us</Link>
                <Link to='/contact' className="link link-hover">Contact</Link>
                <Link to='/' className="link link-hover">Home</Link>
            </nav>
            <nav>
                <header className="footer-title">Legal</header>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            <aside>
                <div className="space-y-3">
                    <h1 className=" text-5xl font-bold">Dubai-UAE</h1>
                    <h3 className=" text-3xl font-semibold">Prime Digital World <span className="text-xl">LLC</span></h3>
                    <p className="text-lg">
                        <span className="flex items-center gap-2"><FaLocationArrow /> P.O.Box 3741,Behind Gold & Diamond Park<br />
                            Sheikh Zayed Road, Al Quoz Ind. 03
                        </span>
                        <span className="flex items-center gap-2"><MdEmail /> <a href="mailto:crm@pdwdubai.com">crm@pdwdubai.com</a></span>
                        <span className="flex items-center gap-2"><FaPhone /><a href="tel:+971502186248">+971-502186248</a></span>
                        <span className="flex items-center gap-2"><FaFax /> <a href="tel:+97122391571">+971-22391571</a></span>
                    </p>
                    <div className="flex gap-2 text-xl">
                        <a href="" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
                        <a href="" target="_blank" rel="noreferrer"><FaFacebook /></a>
                        <a href="" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                        <a href="" target="_blank" rel="noreferrer"><FaInstagram /></a>
                        <a href="" target="_blank" rel="noreferrer"><FaGoogle /></a>
                    </div>
                </div>
            </aside>
        </footer>
    );
};

export default Footer;