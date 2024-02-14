import TshirtImage from "./TshirtImage";
import img1 from '/services/T Shirt & Mague/1 Eta den Important_ T Shirt only logo.jpg'
import img22 from '/services/T Shirt & Mague/Black t shirt 2.jpg'
import img2 from '/services/T Shirt & Mague/Black t shirt.jpg'
import img3 from '/services/T Shirt & Mague/Coastal-Shipping-Links-India-Tshirt-Design.jpg'
import img4 from '/services/T Shirt & Mague/Dr-Afzal-ENT-Care-India-Apparel-Design-Presentation.jpg'
import img5 from '/services/T Shirt & Mague/DTALE-Architects-Engineers-Company-Qatar-Branding-Designing.jpg'
import img6 from '/services/T Shirt & Mague/Fabiana-Foods-Tshirt-Design.jpg'
import img7 from '/services/T Shirt & Mague/Final-T-shirt_20150617061423.907_X.jpg'
import img8 from '/services/T Shirt & Mague/football t shirt 2.jpg'
import img9 from '/services/T Shirt & Mague/football t shirt.jpg'
import img10 from '/services/T Shirt & Mague/Fourset-Logo-Fitness-Designed-by-ZeroBulb.jpg'
import img11 from '/services/T Shirt & Mague/homenew_tshirt_img.jpg'
import img13 from '/services/T Shirt & Mague/ManasVR-Lab-Augmented-Reality-Logo-Design-in-Tshirt.jpg'
import img14 from '/services/T Shirt & Mague/Opus-Penta-Logo-Design-Presentation.jpg'
import img15 from '/services/T Shirt & Mague/Pet-Rose-Events-Centre-Tshirt-Logo-design-by-ZeroBulb.jpg'
import img16 from '/services/T Shirt & Mague/redirect-14.jpg'
import img17 from '/services/T Shirt & Mague/redirect-143.jpg'
import img18 from '/services/T Shirt & Mague/redirect-46.jpg'
import img19 from '/services/T Shirt & Mague/Verve-Sport-Kerala-Tshirt-Design-1536x864.jpg'
import img21 from '/services/T Shirt & Mague/White T  Shirt.jpg'

const Tshirt = () => {
    const images = [img1,img2,img3,img5,img6,img7,img8,img9,img10,img11,img13,img14,img15,img16,img17,img18,img19,img22,img4,img21]
    return (
        <div>
            <h1 className='ml-4 text-5xl font-bold text-[#800000]'>T-Shirt</h1>
            <div className=' grid grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
            {
                images.map((image,i) => <TshirtImage key={i} image = {image}></TshirtImage>)
            }
            </div>
        </div>
    );
};

export default Tshirt;