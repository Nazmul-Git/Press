import Book from "../Book/Book";
import BusinessCard from "../BusinessCard/BusinessCard";
import LetterHead from "../LetterHead/LetterHead";
import Tshirt from "../Tshirt/Tshirt";
import PaperFile from "../PaperFile/PaperFile";
import Envelope from "../Envelope/Envelope";
import Box from "../Box/Box";
import RollUp from "../RollUp/RollUp";
import Gifting from "../Gifting/Gifting";
import Sign from "../Sign/Sign";
import WallGraphics from "../WallGraphics/WallGraphics";
import Vehicle from "../Vehicle/Vehicle";

const AllServices = () => {
    return (
        <div>
            <h1 className="text-center text-7xl font-bold text-[#800000] mb-6">Our All Services in One Page</h1>
            <BusinessCard></BusinessCard>
            <LetterHead></LetterHead>
            <Envelope></Envelope>
            <Book></Book>
            <Box></Box>
            <PaperFile></PaperFile>
            <RollUp></RollUp>
            <Gifting></Gifting>
            <Sign></Sign>
            <Tshirt></Tshirt>
            <WallGraphics></WallGraphics>
            <Vehicle></Vehicle>
        </div>
    );
};

export default AllServices;