import img4 from '/services/envelope/Fabiana-Foods-Dubai-Letterhead-Design.jpg'
import img5 from '/services/envelope/Hotel-Caesar-Palace-Envelope-Letterhead-Branding-Designs.jpg'
import img3 from '/services/envelope/Opus-Penta-Letterhead-Presentation.jpg'
import img1 from '/services/book/book design.jpg'
import img2 from '/services/book/Gramya-Ayurveda-Kerala-Professional-Branding-Brochure-Design.jpg'
import EnvelopeImage from './EnvelopeImage';

const Envelope = () => {
    const images =[img1, img2, img3,img4, img5]
    return (
        <div>
            <h1 className='ml-4 text-5xl font-bold text-[#800000]'>Book & Envelope</h1>
            <div className=' grid grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
            {
                images.map((image,i) => <EnvelopeImage key={i} image = {image}></EnvelopeImage>)
            }
            </div>
        </div>
    );
};

export default Envelope;