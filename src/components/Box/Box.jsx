import img4 from '/services/Level & Box design/BAHRAMAN (1).jpg'
import img5 from '/services/Level & Box design/Mask box.jpg'
import img3 from '/services/Level & Box design/Packet Design 2.jpg'
import img1 from '/services/Level & Box design/Packet Design 3.jpg'
import img2 from '/services/Level & Box design/Packet Design 4.jpg'
import BoxImage from './BoxImage'

const Box = () => {
    const images =[img1,img2, img3, img4, img5]
    return (
        <div>
            <h1 className='ml-4 text-5xl font-bold text-[#800000]'>Box</h1>
            <div className=' grid grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
            {
                images.map((image,i) => <BoxImage key={i} image = {image}></BoxImage>)
            }
            </div>
        </div>
    );
};

export default Box;