import { FaFacebook, FaLinkedin, FaInstagram, FaPhone, FaWhatsapp, FaGoogle, FaLocationArrow, FaFax } from "react-icons/fa";
import { MdEmail, } from "react-icons/md";

const Contact = () => {
    return (
        <div>
            <div className="flex justify-between max-sm:flex-col max-sm:gap-5 md:gap-6 pb-6 max-sm:pl-6 mt-6">
                <div className="space-y-3">
                    <h1 className="lg:text-7xl text-5xl font-extrabold text-[#800000]">Muscat Office</h1>
                    <h3 className="lg:text-5xl text-3xl font-bold">Prime Printing Press</h3>
                    <h3 className="lg:text-5xl text-3xl font-bold">Prime Digital World</h3>
                    <p className="lg:text-3xl text-xl space-y-2">
                        <span className="flex items-center gap-4 font-semibold"><span className="text-[#800000]"><FaLocationArrow /></span> P.O.Box 336, PC 112, CBD, Ruwi, Muscat, <br />
                            Muttrah 54 House Building <br />
                            Next to Central Bank of Oman <br />
                            Opposite of Bank Muscat
                        </span>
                        <span className="flex items-center gap-4"><span className="text-[#800000]"><MdEmail /></span> sales@primeprintingpress.com</span>
                        <span className="flex items-center gap-4"><span className="text-[#800000]"><FaPhone /></span> +968-99364737</span>
                        <span className="flex items-center gap-4"><span className="text-[#800000]"><FaFax /></span> +968-22391571</span>
                    </p>
                    <div className="flex gap-2 lg:text-3xl text-xl text-[#800000]">
                        <a href="" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
                        <a href="" target="_blank" rel="noreferrer"><FaFacebook /></a>
                        <a href="" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                        <a href="" target="_blank" rel="noreferrer"><FaInstagram /></a>
                        <a href="" target="_blank" rel="noreferrer"><FaGoogle /></a>
                    </div>
                </div>
                <div className="space-y-3">
                    <h1 className="lg:text-7xl text-5xl font-extrabold text-[#800000]">Dubai-UAE</h1>
                    <h3 className="lg:text-5xl text-3xl font-bold">Prime Digital World LLC</h3>
                    <p className="lg:text-3xl text-xl space-y-2">
                        <span className="flex items-center gap-4 font-semibold"><span className="text-[#800000]"><FaLocationArrow /></span> P.O.Box 3741, Behind Gold & Diamond Park<br />
                            Sheikh Zayed Road, Al Quoz Ind. 03
                        </span>
                        <span className="flex items-center gap-4"><span className="text-[#800000]"><MdEmail /></span> crm@pdwdubai.com</span>
                        <span className="flex items-center gap-4"><span className="text-[#800000]"><FaPhone /></span>
                        +971-502186248</span>
                        <span className="flex items-center gap-4"><span className="text-[#800000]"><FaFax /></span> +971-22391571</span>
                    </p>
                    <div className="flex gap-2 lg:text-3xl text-xl text-[#800000]">
                        <a href="" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
                        <a href="" target="_blank" rel="noreferrer"><FaFacebook /></a>
                        <a href="" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                        <a href="" target="_blank" rel="noreferrer"><FaInstagram /></a>
                        <a href="" target="_blank" rel="noreferrer"><FaGoogle /></a>
                    </div>
                </div>
            </div>

            <div className="max-w-1/2 my-6" >
                <iframe className="w-full rounded border-4 border-[#800000]" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3656.130843263617!2d58.545299075331265!3d23.599639978773574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDM1JzU4LjciTiA1OMKwMzInNTIuNCJF!5e0!3m2!1sen!2sbd!4v1703740059554!5m2!1sen!2sbd" width="800" height="450" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
};

export default Contact;