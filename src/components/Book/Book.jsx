import BookImage from "./BookImage";
import image1 from '/services/book/img.jpg'
import image2 from '/services/book/img2.jpg'

const Book = () => {
    const images = [image1,image2]
    return (
        <div>
            <h1 className='ml-4 text-5xl font-bold text-[#800000]'>Stamp</h1>
            <div className=' grid grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
            {
                images.map((image,i) => <BookImage key={i} image = {image}></BookImage>)
            }
            </div>
        </div>
    );
};

export default Book;