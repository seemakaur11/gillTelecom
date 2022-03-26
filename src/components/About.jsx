import React from 'react';
import about from '../images/about.jpg';
import about1 from '../images/about1.jpg';
import about3 from '../images/about3.jpg';
import about4 from '../images/about4.jpg';
import about5 from '../images/about5.jpg';
function About() {
  return (
    <div>
      <section>
        <div id="container">
          <img src={about} alt="about-img" width="100%" height="530px" />
        </div>
      </section>
      <section>
        <div className='container py-5'>
          <div className='row py-5'>
            <div className="col-lg-5 col-sm-12">
              <div className="myimage">
                <img src={about1} className="img-fluid" alt="about1-img" />
              </div>
            </div>
            <div className='col-lg-7 col-sm-12'>
              <div className='ml-2'>
                <h2 style={{ color: "#FF8900", fontWeight: "600", fontFamily: "sans-serif" }}>About us</h2>
                <p className='pText'><span style={{ fontWeight: "800" }}>Gill Telecom Service</span> is a ‘Complete Technology Resource’
                  for residential and smallto medium business customers. GTS is a Hisar,
                  Haryana-based Internet communications firm that develops cutting edge
                  web programs for corporations, trade associations, advocacy groups, political candidates
                  and non-profits.</p>
                <p className='pText'> The center was founded by Jangsher Singh Gill.
                  on 1st November 1993, GTS began as a traditional public affairs firm.
                  As it became evident in the mid-1990s that the Internet was transforming the
                  way people interact with each other, Gill Telecom Service shifted away
                  from traditional, offline public affairs offerings to focus on web-based programs.
                  As an early proponent of the Internet as communications platform, GTS is one of the few
                  firms with over a 15-year history of achievement in the field of online communications.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{
        backgroundImage: `url(${about3})`,
        backgroundSize: 'cover',
        position: 'relative',
        backgroundRepeat: "no-repeat",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center", overflow: "hidden",
        fontWeight: "900px", fontSize: "13px",
        color: "black"
      }}>
        <div className='container py-5'>
          <p className=''>
            Today, GTS is a full service Internet communications firm made up of a culturally diverse team of designers, programmers and strategists. Gill Telecom Services’s sole focus is on helping our clients use technology to converse and communicate with the audiences that matter to them. In everything it does, Gill Telecom Service believes the power of the Internet lies not in the technology, but in it its strategic use.</p>
          <p>We provide our customers with good products and services at a fair price, and believe that our business will prosper as a result. We have more than 15 years of experience in the technology field and are eager to use that experience to help you get the technology products and service that you deserve. From extranets to public-facing websites, from the simple to the complex, The Gill Telecom Service creates Internet programs that make an impact. With the attention span of Internet users getting shorter by the day, GTS believes the design of a website should always serve the content. Ultimately, whether an online experience is positive or negative is determined almost entirely by whether your visitor finds the information they are looking for easily. GTS builds websites that are easy for clients to maintain and simple for end users to navigate.</p>
        </div>
      </section>
      <section>
        <div className='container-fluid m-0 p-0'>
          <div className='row'>
            <div className='col-lg-6 col-sm-12 m-0 p-0'>
              <img src={about5} className='img-fluid' alt="about4-img"/>
            </div>
            <div className='col-lg-6 col-sm-12 m-0 p-0' style={{ backgroundColor: "black" }}>
              <div className='p-4 mt-4' style={{color:"white", fontSize:"12px"}}>
                <p>We are professional Web design and Website development company
                  in India that supplies services of web design and development,
                  web application development, professional ecommerce online shopping systems,
                  Flash multimedia, website hosting, search engine promotion (SEO), software
                  development and graphics design. </p>
                <p>Telecom Service features an integrateddevelopment
                  and designing team of web consultants, creative designers
                  , writers, programmers and marketing and SEO professionals
                  that know how to get online results. we have more than 2100
                  clients. more than 600 schools, college, poletechnic, engg
                  college,business schoolin haryana punjab and north india,We
                  are software Development and Outsourcing Company based in India US.
                  We offer Top-quality professional software, CRMs and web programming
                  services at globally affordable prices. We have successfully built
                  more than 2200 web sites for clients from all over the World including
                  USA, UK, Australia, Thailand, Itali and more. We specialize in AJAX/PHP/
                  ASP.net programming and Web Design using Macromedia Tools. We have one of
                  the best web design teams in India to design globally appealing current technology web sites.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
