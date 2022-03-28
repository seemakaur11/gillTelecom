import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider2 from '../images/slider2.jpg';
import slider3 from '../images/slider3.jpg';
import develop from '../images/develop.jpg';
function Home() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 1000,
        lazyLoad: true,
        slidesToShow: 1,
        slidesToScroll: 1

    };
    return (
        <div className=''>
            <Slider {...settings}>
                <div className=''>
                    <img src={slider2} className="" alt="slide-img" />
                    <div className="top-right">
                        <h1>Web design and Development</h1>
                        <p>Gill Telecom is Professional Web Design and Website Development Company in India that Supplies service design and development</p>
                    </div>
                </div>
                <div>
                    <img src={slider3} className="" alt="slide-img" />
                </div>
                <div>
                    <img src={slider2} className="" alt="slide-img" />
                </div>

            </Slider>
            <section>
                <div className='container pt-3'>
                    <div className='row py-3'>
                        <div className='serviceHead'>
                            <p className="pt-5">Gill Telecom Service is professional Web design <br />and Website development company in India</p>
                        </div>
                        <div className='pl-5'>
                            <p style={{ fontFamily: "sans-serif", fontSize: "15px", fontWeight: "400" }}>That supplies services of web design and development, web application development,
                                professional ecommerce online shopping systems, Flash multimedia, website hosting, search engine promotion (SEO), software development and graphics design. Gill Telecom Service features an integrated
                                development and designing team of web consultants, creative designers, writers,<br />
                                programmers and marketing and SEO professionals that know how to get online results.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='container'>
                    <div className='row pt-5'>
                        <div className='col-lg-5 col-sm-12'>
                            <img src={develop} className="img" alt="develop-img" style={{ width: "400px", height: "400px" }} />
                            <p> web developer</p>
                        </div>
                        <div className='col-lg-7 col-sm-12 pt-5'>
                            <p className='pl-4 pt-5' style={{ color: " #000000", fontFamily: "Roboto Slab", fontWeight: "500" }}>We can also provide telephone and data service through strategic partnerships with the most respected local and national providers. Whether your office needs a one-time solution to a new or existing problem or is looking to build a mutually beneficial relationship with a local technology support company for current and future technology needs,
                                Gill Telecom Service is eager for the opportunity to earn your business.<br />
                                We have developed many web projects. We have proffesional developers in , PHP, Jquery and Ajax. We are having Proffessional Designers in Flash, Photoshop and Illustrator. We are specialized in mobile webdesigning, html and wordpress theme designing.</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}


























// const LeftArrow = styled.i`
// display: ${(props) =>
//         props.availability === "slick-arrow slick-prev slick-disabled"
//             ? "none !important"
//             : ""};
// `;

// const RightArrow = styled.i`
// display: ${(props) =>
//         props.availability === "slick-arrow slick-next slick-disabled"
//             ? "none !important"
//             : ""};
// `;
// const NextArrow = (props) => {
//     const { className, onClick } = props;
//     return (
//         <RightArrow
//             className={"fa fa-angle-right fa-1x prev-arrow"}
//             onClick={onClick}
//             aria-hidden="true"
//             availability={className}>
//         </RightArrow>
//     )
// }
// const PrevArrow = (props) => {
//     const { className, onClick } = props;
//     return (
//         <LeftArrow
//             className={"fa fa-angle-left fa-1x next-arrow"}
//             onClick={onClick}
//             aria-hidden="true"
//             availability={className}>
//         </LeftArrow>
//     )
// }

// const settings = {
//     dots: true,
//     fade: true,
//     infinite: true,
//     autoplay: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     speed: 500,
//     initialSlide: 0,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />
// }
// function Home() {
//   console.log(" slider image =============>",SlideImg)
//   return (
//     <div className="slider-image">
//     <Slider {...settings}>
//         {!!SlideImg &&
//             SlideImg.length > 0 && SlideImg.map((slide, index) => (

//                 <div className='crausoel_container' key={index}>
//                   {console.log(" slide ============>",slide)}
//                     <img src={slide.image} alt="images.jpg" className="crausoel_image" />
//                 </div>
//             ))
//         }
//     </Slider>
// </div>
//   )
// }

export default Home;