import img1 from '/services/Letter Head & Envelope Design/LH_1.jpg'
import img2 from '/services/Letter Head & Envelope Design/LH_10.jpg'
import img3 from '/services/Letter Head & Envelope Design/LH_11.jpg'
import img4 from '/services/Letter Head & Envelope Design/LH_2.jpg'
import img5 from '/services/Letter Head & Envelope Design/LH_3.jpg'
import img7 from '/services/Letter Head & Envelope Design/LH_4.jpg'
import img8 from '/services/Letter Head & Envelope Design/LH_5.jpg'
import img9 from '/services/Letter Head & Envelope Design/LH_6.jpg'
import img10 from '/services/Letter Head & Envelope Design/LH_7.jpg'
import img11 from '/services/Letter Head & Envelope Design/LH_8.jpg'
import img12 from '/services/Letter Head & Envelope Design/LH_9.jpg'
import LetterHeadImage from './LetterHeadImage'

const LetterHead = () => {
    const images = [img4, img7, img3, img1, img5, img2, img8, img9, img10, img11, img12]
    return (
        <div >
            <h1 className='ml-4 text-5xl font-bold text-[#800000]'>Letterhead</h1>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
                {
                    images.map((image, i) => <LetterHeadImage key={i} image={image}></LetterHeadImage>)
                }
            </div>
        </div>
    );
};

export default LetterHead;