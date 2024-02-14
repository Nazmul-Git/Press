import PaperFileImage from "../PaperFile/PaperFileImage";
import img1 from '/services/Roll up & Pop Up Design/POP UP & Wall Graphics.jpg'
import img2 from '/services/Roll up & Pop Up Design/Popup Design.jpg'
import img3 from '/services/Roll up & Pop Up Design/Roll UP_1.jpg'
import img4 from '/services/Roll up & Pop Up Design/Roll UP_11.jpg'
import img5 from '/services/Roll up & Pop Up Design/Roll UP_12.jpg'
import img6 from '/services/Roll up & Pop Up Design/Roll UP_13.jpg'
import img7 from '/services/Roll up & Pop Up Design/Roll UP_15.jpg'
import img8 from '/services/Roll up & Pop Up Design/Roll UP_16.jpg'
import img9 from '/services/Roll up & Pop Up Design/Roll UP_21.jpg'
import img10 from '/services/Roll up & Pop Up Design/Roll UP_22.jpg'
import img11 from '/services/Roll up & Pop Up Design/Roll UP_25.jpg'
import img12 from '/services/Roll up & Pop Up Design/Roll UP_3.jpg'
import img13 from '/services/Roll up & Pop Up Design/Roll UP_4.jpg'
import img14 from '/services/Roll up & Pop Up Design/Roll UP_5.jpg'
import img15 from '/services/Roll up & Pop Up Design/Roll UP_6.jpg'
import img16 from '/services/Roll up & Pop Up Design/Roll UP_7.jpg'

const RollUp = () => {
    const images = [img4,img5,img6,img7,img8,img8,img9,img10,img11,img12,img13,img14,img15,img16,img3,img2,img1]
    return (
        <div>
            <h1 className='ml-4 text-5xl font-bold text-[#800000]'>Roll Up</h1>
            <div className=' grid grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
            {
                images.map((image,i) => <PaperFileImage key={i} image = {image}></PaperFileImage>)
            }
            </div>
        </div>
    );
};

export default RollUp;