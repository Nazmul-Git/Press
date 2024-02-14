import SignImage from "./SignImage";
import img1 from '/services/3D sign/2015-07-28-2582.jpg'
import img22 from '/services/3D sign/2015-07-28-2582.jpg'
import img2 from '/services/3D sign/2015-09-19-2667.jpg'
import img3 from '/services/3D sign/2015-09-19-2668.jpg'
import img4 from '/services/3D sign/2015-09-19-2671.jpg'
import img5 from '/services/3D sign/img1.jpg'
import img6 from '/services/3D sign/img10.jpg'
import img7 from '/services/3D sign/img11.jpg'
import img8 from '/services/3D sign/img12.jpg'
import img9 from '/services/3D sign/img13.jpg'
import img10 from '/services/3D sign/img14.jpg'
import img11 from '/services/3D sign/img15.jpg'
import img12 from '/services/3D sign/img16.jpg'
import img13 from '/services/3D sign/img2.jpg'
import img14 from '/services/3D sign/img3.jpg'
import img15 from '/services/3D sign/img4.jpg'
import img16 from '/services/3D sign/img5.jpg'
import img17 from '/services/3D sign/img6.jpg'
import img18 from '/services/3D sign/img7.jpg'
import img19 from '/services/3D sign/img8.jpg'
// import img20 from '/services/3D sign/IMG_0158.JPG'
import img21 from '/services/3D sign/small ms .jpg'
import img23 from '/services/3D sign/small square .jpg'

const Sign = () => {
    const images = [img1,img2,img3,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19,img22,img23,img4,img21]
    return (
        <div>
            <h1 className='ml-4 text-5xl font-bold text-[#800000]'>3D Sign</h1>
            <div className=' grid grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
            {
                images.map((image,i) => <SignImage key={i} image = {image}></SignImage>)
            }
            </div>
        </div>
    );
};

export default Sign;