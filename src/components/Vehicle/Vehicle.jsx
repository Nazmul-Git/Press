import VehicleImage from './VehicleImage';
import img1 from '/services/Vehicle Wrap/01Luxury Bus.jpg'
import img2 from '/services/Vehicle Wrap/02 Luxury Bus 2.jpg'
import img3 from '/services/Vehicle Wrap/04 Toyota High Roof Wrap.jpg'
import img4 from '/services/Vehicle Wrap/07Peugeot design.jpg'
import img5 from '/services/Vehicle Wrap/08Nissan Sunny.jpg'
import img6 from '/services/Vehicle Wrap/09Tea Vehicle design.jpg'
import img9 from '/services/Vehicle Wrap/10Nissan van.jpg'
import img10 from '/services/Vehicle Wrap/back sdie.jpg'
import img7 from '/services/Vehicle Wrap/Cleaning services design.jpg'
import img8 from '/services/Vehicle Wrap/Daihatsu Gran Max.jpg'
import img11 from '/services/Vehicle Wrap/Delta sound.jpg'
import img12 from '/services/Vehicle Wrap/Door sticker.jpg'
import img13 from '/services/Vehicle Wrap/Dubai Audio center car design.jpg'
import img14 from '/services/Vehicle Wrap/Food bus design.jpg'
import img15 from '/services/Vehicle Wrap/full wrap 2.jpg'
import img16 from '/services/Vehicle Wrap/full wrap.jpg'
import img17 from '/services/Vehicle Wrap/Hyundai H1.jpg'
import img18 from '/services/Vehicle Wrap/Maintenance Design.jpg'
import img19 from '/services/Vehicle Wrap/Nissan Urvan.jpg'
import img20 from '/services/Vehicle Wrap/Nissan Urvan4.jpg'
import img21 from '/services/Vehicle Wrap/p side (2).jpg'
import img22 from '/services/Vehicle Wrap/partial wrap 2.jpg'
import img23 from '/services/Vehicle Wrap/partial wrap 3.jpg'
import img24 from '/services/Vehicle Wrap/partial wrap 4.jpg'
import img25 from '/services/Vehicle Wrap/partial wrap5.jpg'
import img26 from '/services/Vehicle Wrap/partial wrap6.jpg'
import img27 from '/services/Vehicle Wrap/PitBull.jpg'
import img28 from '/services/Vehicle Wrap/Restaurant Vehicle Design.jpg'
import img29 from '/services/Vehicle Wrap/Take size like this.jpg'
import img30 from '/services/Vehicle Wrap/Toyota Hiace 2.jpg'
import img31 from '/services/Vehicle Wrap/Toyota Hiace Middle roof.jpg'
import img32 from '/services/Vehicle Wrap/Truck Size.jpg'
import img33 from '/services/Vehicle Wrap/wakan wcom.jpg'
import img34 from '/services/Vehicle Wrap/z Ashok Leyland.jpg'

const Vehicle = () => {
    const images = [img1,img2,img3,img4,img5, img6, img7,img8, img9, img10, img11,img12,img13,img14,img15,img16, img17, img18,img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img31, img32, img33,img34,]
    return (
        <div>
            <h1 className='ml-4 text-5xl font-bold text-[#800000]'>Vehicle Graphics</h1>
            <div className=' grid grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
            {
                images.map((image,i) => <VehicleImage key={i} image = {image}></VehicleImage>)
            }
            </div>
        </div>
    );
};

export default Vehicle;