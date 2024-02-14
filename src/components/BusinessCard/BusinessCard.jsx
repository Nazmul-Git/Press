// import sp1 from '/services/01 Complete/Business Card/New folder/Circle-One_Business_CardsWeb_5_1.jpg'
// import sp2 from '/services/01 Complete/Business Card/New folder/Coastal-Shipping-Links-India-Company-Visiting-Card-Design.jpg'
// import sp3 from '/services/01 Complete/Business Card/New folder/Dr-Afzal-ENT-Care-Visiting-Card-Presentation.jpg'
// import sp4 from '/services/01 Complete/Business Card/New folder/Dropbox-Entertainments-Visiting-Card-Design-by-ZeroBulb-1536x864.jpg'
// import sp5 from '/services/01 Complete/Business Card/New folder/DTALE-Interior-Designing-Company-Kerala-Branding-Designing.jpg'
// import sp6 from '/services/01 Complete/Business Card/New folder/Fourset-Fitness-and-GYM-Health-Center-Logo-Design-ZeroBulb-Dubai.jpg'
// import sp7 from '/services/01 Complete/Business Card/New folder/Gramya-Ayurveda-Hospital-Professional-Logo-Design-Kerala.jpg'
// import sp8 from '/services/01 Complete/Business Card/New folder/Hotel-Caesar-Palace-India-Visiting-Card-Design.jpg'
// import sp9 from '/services/01 Complete/Business Card/New folder/ManasVR-Lab-Company-Logo-Visiting-Card-Design.jpg'
// import sp10 from '/services/01 Complete/Business Card/New folder/Opus-Penta-Visiting-Card-Design-Presentation.jpg'
// import sp11 from '/services/01 Complete/Business Card/New folder/Thoiba-Logistics-Dubai-Branding-Visiting-Card.jpg'
import img1 from '/services/01 Complete/Business Card/BC_1.jpg'
import img2 from '/services/01 Complete/Business Card/BC_2.jpg'
import img3 from '/services/01 Complete/Business Card/BC_3.jpg'
import img4 from '/services/01 Complete/Business Card/BC_4.jpg'
import img5 from '/services/01 Complete/Business Card/BC_5.jpg'
import img6 from '/services/01 Complete/Business Card/BC_6.jpg'
import img7 from '/services/01 Complete/Business Card/BC_7.jpg'
import img8 from '/services/01 Complete/Business Card/BC_8.jpg'
import img9 from '/services/01 Complete/Business Card/BC_9.jpg'
import img10 from '/services/01 Complete/Business Card/BC_10.jpg'
import img11 from '/services/01 Complete/Business Card/BC_11.jpg'
import img12 from '/services/01 Complete/Business Card/BC_12.jpg'
import img13 from '/services/01 Complete/Business Card/BC_13.jpg'
import img14 from '/services/01 Complete/Business Card/BC_14.jpg'
import img15 from '/services/01 Complete/Business Card/BC_15.jpg'
import img16 from '/services/01 Complete/Business Card/BC_16.jpg'
import img17 from '/services/01 Complete/Business Card/BC_17.jpg'
import img18 from '/services/01 Complete/Business Card/BC_18.jpg'
import img19 from '/services/01 Complete/Business Card/BC_19.jpg'
import img20 from '/services/01 Complete/Business Card/BC_20.jpg'
import img21 from '/services/01 Complete/Business Card/BC_21.jpg'
import img22 from '/services/01 Complete/Business Card/BC_22.jpg'
import img23 from '/services/01 Complete/Business Card/BC_23.jpg'
import img24 from '/services/01 Complete/Business Card/BC_24.jpg'
import img25 from '/services/01 Complete/Business Card/BC_25.jpg'
import img26 from '/services/01 Complete/Business Card/BC_26.jpg'
import img27 from '/services/01 Complete/Business Card/BC_27.jpg'
import img28 from '/services/01 Complete/Business Card/BC_28.jpg'
import img29 from '/services/01 Complete/Business Card/BC_29.jpg'
import img30 from '/services/01 Complete/Business Card/BC_30.jpg'
import img31 from '/services/01 Complete/Business Card/BC_31.jpg'
import img32 from '/services/01 Complete/Business Card/BC_32.jpg'
import img33 from '/services/01 Complete/Business Card/BC_33.jpg'
import img34 from '/services/01 Complete/Business Card/BC_34.jpg'
import img35 from '/services/01 Complete/Business Card/BC_35.jpg'
import img36 from '/services/01 Complete/Business Card/BC_36.jpg'
import img37 from '/services/01 Complete/Business Card/BC_37.jpg'
import img38 from '/services/01 Complete/Business Card/BC_38.jpg'
import img39 from '/services/01 Complete/Business Card/BC_39.jpg'
import img40 from '/services/01 Complete/Business Card/BC_40.jpg'
import img41 from '/services/01 Complete/Business Card/BC_41.jpg'
import img42 from '/services/01 Complete/Business Card/BC_42.jpg'
import BusinessImage from './BusinessImage'
const BusinessCard = () => {
    const images = [/*sp1,sp2,sp3, sp4, sp5, sp6, sp7, sp8, sp9, sp10, sp11,*/ img1,img2,img3,img4,img5, img6, img7,img8, img9, img10, img11,img12,img13,img14,img15,img16, img17, img18,img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img31, img32, img33,img34, img35, img36,img37, img38, img39, img40, img41, img42 ]
    return (
        <div >
            <h1 className='ml-4 text-5xl font-bold text-[#800000]'>Business Card</h1>
            <div className=' grid grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
            {
                images.map((image,i) => <BusinessImage key={i} image = {image}></BusinessImage>)
            }
            </div>
            
        </div>
    );
};

export default BusinessCard;