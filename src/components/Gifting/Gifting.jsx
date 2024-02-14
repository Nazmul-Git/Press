import GiftingImage from "./GiftingImage";
import img1 from '/services/Mug Design/Al-Zaabi-Group-Abu-Dhabi-Logo-Design-1536x864.jpg'
import img2 from '/services/Mug Design/Eorga-Organic-Company-Bangalore-Logo-Design.jpg'
import img3 from '/services/Mug Design/ima.jpg'
import img4 from '/services/Mug Design/img1.jpg'
import img5 from '/services/Mug Design/img2.jpg'
import img6 from '/services/Mug Design/img3.jpg'

const Gifting = () => {
    const images = [img3,img1,img2,img4,img5,img6]
    return (
        <div>
            <h1 className='ml-4 text-5xl font-bold text-[#800000]'>Gifting</h1>
            <div className=' grid grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
            {
                images.map((image,i) => <GiftingImage key={i} image = {image}></GiftingImage>)
            }
            </div>
        </div>
    );
};

export default Gifting;