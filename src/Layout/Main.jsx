import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { FaFacebook, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Main = () => {
    const copy = String.fromCodePoint(0x00A9);
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <div className="flex justify-between text-sm rounded-sm font-semibold mt-1 px-4">
                <p >copyright<span className="text-[#C32148]">{copy}</span> <span className="font-bold">2024</span></p>
                <div className="flex gap-2">
                    <p> Develop by <span className='font-mono font-bold hover:font-extrabold hover:underline text-[#C32148]'>Nazmul Hasan Sunny</span> </p>
                    <div className="flex gap-2 items-center text-[#C32148]">
                        <a href="https://wa.me/+8801753249719" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
                        <a href="https://www.facebook.com/tahsinahmed.sunny/" target="_blank" rel="noreferrer"><FaFacebook /></a>
                        <a href="https://www.linkedin.com/in/nazmul-hasan-sunny" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                        <a href="https://github.com/Nazmul-Git" target="_blank" rel="noreferrer"><FaGithub /></a>
                        <a href="mailto:nazmul.hasan16021998@gmail.com" target="_blank" rel="noreferrer"><SiGmail /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;