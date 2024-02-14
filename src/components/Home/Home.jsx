import AboutUs from '../AboutUs/AboutUs';
import Client from '../Client/Client';
import CoreFeature from '../CoreFeature/CoreFeature';
import FindUs from '../FindUs/FindUs';
import Header from '../Header/Header';
import ServiceOverView from '../ServiceOverView/ServiceOverView';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <AboutUs></AboutUs>
            <FindUs></FindUs>
            <ServiceOverView></ServiceOverView>
            <CoreFeature></CoreFeature>
            <Client></Client>
        </div>
    );
};

export default Home;