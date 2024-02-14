

// eslint-disable-next-line react/prop-types
const VehicleImage = ({image}) => {
    return (
        <div>
           <img src={image} alt="..." className="rounded-lg"/> 
        </div>
    );
};

export default VehicleImage;