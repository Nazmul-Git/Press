import client from '../../assets/customer/customer.jpg'

const Client = () => {
    return (
        <div>
            <div className='flex flex-col justify-center mb-6'>
                <div className='text-center mb-6'>
                    <h3 className='text-xl max-sm:text-center font-bold text-[#800000]'>Clients</h3>
                    <h1 className="text-5xl font-bold">Our Some Clients</h1>
                </div>
                <img src={client} alt="" />
            </div>
        </div>
    );
};

export default Client;