import React from 'react'

function Footer() {
    return (
        <div className='pt-1'>
            <footer style={{ backgroundColor: "black" }} >
                <div className='container pt-4'>
                    <div className='row'>
                        <div className='col-lg-3 col-sm-6'>
                            <div className="footer-about">
                                <h3 style={{ fontSize: "21px", color: "white", fontWeight: "900", fontFamily: "sans-serif" }}>ABOUT US</h3>
                                <p style={{ fontSize: "14px", color: "white" }}>Gill Telecom Service is professional Web design and Website development company<br />
                                    in India…[ ]</p>
                            </div>
                            <div className="footer-social">
                                <a href=""><i class="fab fa-facebook-f"></i></a>
                                <a href=""><i class="fab fa-twitter"></i></a>
                                <a href=""><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className='col-lg-3 col-sm-6'>
                            <div>
                                <h3 style={{ fontSize: "21px", color: "white", fontWeight: "900", fontFamily: "sans-serif" }}>LOCATION</h3>
                                <p style={{ fontSize: "14px", color: "white" }}><i class="fa-solid fa-location-dot" style={{ color: "#ff6900" }}></i> 138 MC Colony, Hisar <br />Haryana India</p>
                                <hr />
                                <p style={{ fontSize: "14px", color: "white", maginTop: "2px" }}><i class="fa-solid fa-envelope" style={{ color: "#ff6900" }}></i>support@gillwebs.com</p>
                                <hr />
                                <p style={{ fontSize: "14px", color: "white" }}><i class="fa-solid fa-blender-phone" style={{ color: "#ff6900" }}></i>91 9354311177</p>
                                <hr />
                            </div>
                        </div>
                        <div className='col-lg-3 col-sm-6'>
                            <div className="footer-contact">
                                <h3 style={{ fontSize: "21px", color: "white", fontWeight: "900", fontFamily: "sans-serif" }}>SERVICE</h3>
                                <p style={{ fontSize: "14px", color: "white" }}><i class="fa-solid fa-circle-chevron-right"></i>Complete WebSite Development<br /> and Website Designing</p>
                                <p style={{ fontSize: "14px", color: "white" }}><i class="fa-solid fa-circle-chevron-right"></i>Creative Web Design</p>
                                <p style={{ fontSize: "14px", color: "white" }}><i class="fa-solid fa-circle-chevron-right"></i>Complete WebSite Development<br /> and Website Designing</p>
                            </div>
                        </div>
                        <div className='col-lg-3 col-sm-6'>
                            <div className="footer-contact">
                                <p style={{ fontSize: "14px", color: "white" }}><i class="fa-solid fa-circle-chevron-right"></i>Search Engine Optimisation</p>
                                <p style={{ fontSize: "14px", color: "white" }}><i class="fa-solid fa-circle-chevron-right"></i>Custom Web Development</p>
                                <p style={{ fontSize: "14px", color: "white" }}><i class="fa-solid fa-circle-chevron-right"></i>e-Business</p>
                            </div>
                        </div>
                        <div className='col-lg-12 pt-3' style={{textAlign:"center", alignItem:"center"}}>
                           <hr style={{color:"white", width:"100%"}}/>
                           <p style={{color:"white"}}>Copyright 2006-2021 <a href="/" style={{color:"#ff8900"}}>Gill Telecom Service</a></p>
                           

                        </div>

                    </div>

                </div>
            </footer>

        </div>
        // <div className='pt-1'>
        //     <footer style={{ backgroundColor: "black" }}>
        //         <div className='container pt-5' style={{ color: "white" }}>
        //             <div className='row'>
        //                 <div className='col-lg-3 col-sm-6'>
        //                     <div>
        //                         <h4 className='footerH4'>ABOUT US</h4>
        //                         <p className='pt-3' style={{ fontSize: "16px", overflowWrap: "break-word" }}>Gill Telecom Service is<br /> professional Web design and<br /> Website development company<br /> in India…[ ]</p>
        //                     </div>
        //                     <div style={{ fontSize: "35px" }}>
        //                         <i class="fa-brands fa-facebook-square m-2"></i>
        //                         <i class="fa-brands fa-linkedin m-2"></i>
        //                         <i class="fa-brands fa-twitter-square m-2"></i>
        //                     </div>
        //                 </div>
        //                 <div className='col-lg-3 col-sm-6'>
        //                     <div>
        //                         <h4 className='footerH4'>LOCATION</h4>
        //                         <p className='pt-3'><i class="fa-solid fa-location-dot"></i> 138 MC Colony, Hisar –<br /> Haryana India</p>
        //                     </div>
        //                     <hr />
        //                     <p><i class="fa-solid fa-envelope"></i>support@gillwebs.com</p>
        //                     <hr />
        //                     <p><i class="fa-solid fa-blender-phone"></i>91 9354311177</p>
        //                     <hr />
        //                 </div>
        //                 <div className='col-lg-3 col-sm-6'>
        //                     <h4 className='footerH4'>SERVICE</h4>
        //                     <p className='pt-3'><i class="fa-solid fa-circle-chevron-right m-3"></i>Complete WebSite Development<br /> and Website Designing</p>
        //                     <p><i class="fa-solid fa-circle-chevron-right m-3"></i>Creative Web Design</p>
        //                     <p className='pt-3'><i class="fa-solid fa-circle-chevron-right m-3"></i>Complete WebSite Development<br /> and Website Designing</p>

        //                 </div>
        //                 <div className='col-lg-3 col-sm-6'>
        //                     <h4 className='footerH4'>TEAM</h4>
        //                     <p className='pt-3'>Gill Telecom Service is professional Web design and Website development company in India…[ ]</p>

        //                 </div>
        //             </div>
        //         </div>
        //     </footer>
        // </div>
    )
}

export default Footer