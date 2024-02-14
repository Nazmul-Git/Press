import { Link } from "react-router-dom";


const LeftNav = () => {
    return (
        <div>
            <nav className="flex flex-col text-[#800000] space-y-4 pl-3">
                <Link to='/services' className="text-2xl font-semibold">Services</Link>
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
                <Link to='/services/vehicle' className="link link-hover">vehicle Graphics</Link>
            </nav>
        </div>
    );
};

export default LeftNav;