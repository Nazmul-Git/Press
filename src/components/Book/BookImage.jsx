
// eslint-disable-next-line react/prop-types
const BookImage = ({image}) => {
    return (
        <div>
           <img src={image} alt="..." className="rounded-lg w-full"/> 
        </div>
    );
};

export default BookImage;