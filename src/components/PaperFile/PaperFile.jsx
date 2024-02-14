import PaperFileImage from "./PaperFileImage";
import img1 from '/services/paper file/Coastal-Shipping-Links-Kerala-Branding-Collaterals.jpg'
import img2 from '/services/paper file/DTALE-Architects-Engineers-Kochi-Branding-Designing.jpg'
import img3 from '/services/paper file/LH.jpg'


const PaperFile = () => {
    const images =[img1,img2,img3]
    return (
        <div>
            <h1 className='ml-4 text-5xl font-bold text-[#800000]'>Paper Punch File</h1>
            <div className=' grid grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
            {
                images.map((image,i) => <PaperFileImage key={i} image = {image}></PaperFileImage>)
            }
            </div>
        </div>
    );
};

export default PaperFile;