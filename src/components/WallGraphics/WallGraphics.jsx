import WallGraphicsImage from "./WallGraphicsImage";
import img1 from '/services/wall graphic/img1.jpg'
import img2 from '/services/wall graphic/img10.jpg'
import img3 from '/services/wall graphic/img11.jpg'
import img4 from '/services/wall graphic/img12.jpg'
import img5 from '/services/wall graphic/img13.jpg'
import img6 from '/services/wall graphic/img14.jpg'
import img7 from '/services/wall graphic/img15.jpg'
import img8 from '/services/wall graphic/img16.jpg'
import img9 from '/services/wall graphic/img17.jpg'
import img10 from '/services/wall graphic/img18.jpg'
import img11 from '/services/wall graphic/img2.jpg'
import img12 from '/services/wall graphic/img3.jpg'
import img13 from '/services/wall graphic/img4.jpg'
import img14 from '/services/wall graphic/img5.jpg'
import img15 from '/services/wall graphic/img6.jpg'
import img16 from '/services/wall graphic/img7.jpg'
import img17 from '/services/wall graphic/img8.jpg'
import img18 from '/services/wall graphic/img9.jpg'

const WallGraphics = () => {
    const images = [img1,img2,img3,img5,img6,img8,img11,img12,img13,img15,img16,img17,img18,img14,img4,img7,img10,img9]
    return (
        <div>
            <h1 className='ml-4 text-5xl font-bold text-[#800000]'>Wall Graphics</h1>
            <div className=' grid grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
            {
                images.map((image,i) => <WallGraphicsImage key={i} image = {image}></WallGraphicsImage>)
            }
            </div>
        </div>
    );
};

export default WallGraphics;