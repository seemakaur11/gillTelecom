import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider2 from '../images/slider2.jpg';
import slider3 from '../images/slider3.jpg';
import develop from '../images/develop.jpg';
import develop1 from '../images/develop1.jpg';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init()

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
                <div className='' style={{ textAlign: "center", position: "relative" }}>
                    <img src={slider2} className="" alt="slide-img" />
                </div>
                <div>
                    <div className=''>
                        <img src={slider3} className="" alt="slide-img" />
                    </div>
                </div>
            </Slider>
            <section>
                <div className='container pt-5'>
                    <div className='row'>
                        <div className="col-12" style={{ textAlign: "center", alignItem: "center", justifyContent: "center" }}>
                            <h3 style={{ color: "#FF8900", fontFamily: "sans-serif", fontSize: "30px", fontWeight: "700" }}>Gill Telecom Service is professional Web design<br /> and Website development company in India</h3>
                            <p className='pt-2' style={{ fontFamily: "sans-serif", fontSize: "18px", fontWeight: "500" }}>That supplies services of web design and development, web application development,
                                professional ecommerce online shopping systems, Flash multimedia, website hosting, search engine promotion (SEO), software development and graphics design. Gill Telecom Service features an integrated
                                development and designing team of web consultants, creative designers, writers,<br />
                                programmers and marketing and SEO professionals that know how to get online results.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='container pt-5'>
                    <div className='row'>
                        <div className='col-md-6 col-sm-12'>
                            <div className=''>
                                <img src={develop} className='img' alt='dev-img' width="600px" height="550px" />
                            </div>
                        </div>
                        <div className='col-md-6 col-sm-12 pt-5'>
                            <div className='py-5' style={{ fontSize: "17px", fontFamily: "sans-serif", fontWeight: "500", marginBottom: "1.7em" }}>
                                <p className=''>We can also provide telephone and data service through strategic partnerships with the most respected local and national providers. Whether your office needs a one-time solution to a new or existing problem or is looking to build a mutually beneficial relationship with a local technology support company for current and future technology needs,
                                    Gill Telecom Service is eager for the opportunity to earn your business.</p>
                                <p className=''>We have developed many web projects. We have proffesional developers in , PHP, Jquery and Ajax. We are having Proffessional Designers in Flash, Photoshop and Illustrator. We are specialized in mobile webdesigning, html and wordpress theme designing.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='pt-5'>
                <div className='container-fluid' style={{ backgroundColor: "black" }}>
                    <div className='row pt-4 ml-5'>
                        <div className='col-md-6 col-sm-12'>
                            <div className='pl-4'>
                                <h1 className='' style={{ color: "#FF8900", fontWeight: "600", fontFamily: "sans-serif" }}>Let's Talk?</h1>
                                <p className='' style={{ color: "white", fontWeight: "500", fontSize: "17px" }}>Don’t wait until tomorrow. Talk to one of our consultants today and<br /> learn how to start leveraging your business.</p>
                            </div>
                            <form method="post" name="new Form">
                                <div>
                                    <label className='name'>Name</label>
                                    <input type='text' className='input-field' placeholer="name" />
                                </div>
                                <div>
                                    <label className='name'>phone</label>
                                    <input type='number' className='input-field' placeholer="phone" />
                                </div>
                                <div>
                                    <label className='name'>Email</label>
                                    <input type='text' className='input-field' placeholer="email" />
                                </div>
                                <div>
                                    <label className='name'>Message</label>
                                    <input type='textarea' className='input-field' placeholer="message" />
                                </div>
                            </form>
                        </div>
                        <div className='col-md-6 col-sm-12'>
                            <div>
                                <img src={develop1} className='img-fluid' alt='dev-img' width="500px" height="500px" />
                            </div>
                        </div>
                    </div>
                </div>
            </section >


            <Footer />
        </div >
    )
}
export default Home;