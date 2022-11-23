import React from "react";
import NavbarLandingBeforeLogin from "../../components/NavbarLandingBefore/NavbarLandingBefore";
import ButtonMulai from "../../components/Button/ButtonMulai";
import ButtonMulaiWhite from "../../components/Button/ButtonMulaiWhite";
import landingImage3 from "../../images/landingImage3.png"
import landingImage2 from "../../images/landingImage2.png"
import landingImage4 from "../../images/landingImage4.png"
import tick from "../../images/tick1.png"
import tick2 from "../../images/tick2.png"
import card1 from "../../images/card1.png"
import card2 from "../../images/card2.png"
import card3 from "../../images/card3.png"
import Footer from "../../components/Footer/Footer";
import "./LandingPage.css"
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

export default function LandingPage(){
    return(
        <div>
            <NavbarLandingBeforeLogin/>
            <div className="container mb-5">
            <div className="row">
                <div className="col-5 mt-5">
                    <h1 className="text-start" style={{fontSize:"50px"}}>Talenta terbaik negri untuk perubahan revolusi 4.0</h1>
                    <p className="text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                    <ButtonMulai/>
                </div>
                <div className="col-3 offset-2">
                    <img src={landingImage2} alt="" style={{width:"490px", height:"390px"}}/>
                </div>
            </div>
            </div>
            <div className="container" style={{marginTop:"180px"}}>
            <div className="row my-5">
                <div className="col-3">
                <img src={landingImage3} alt="" style={{width:"490px", height:"410px"}}/>
                </div>
                <div className="col-6 offset-2 mt-4">
                    <h1 className="text-start mb-4" style={{fontSize:"50px"}}>Kenapa harus mencari tallent di peworld</h1>
                    <p className="text-start"><img src={tick} alt="" className="me-4"/>Lorem ipsum dolor sit amet.</p>
                    <p className="text-start"><img src={tick} alt="" className="me-4"/>Lorem ipsum dolor sit amet.</p>
                    <p className="text-start"><img src={tick} alt="" className="me-4"/>Lorem ipsum dolor sit amet.</p>
                    <p className="text-start"><img src={tick} alt="" className="me-4"/>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            </div>
            <div className="container" style={{marginTop:"180px"}}>
            <div className="row">
                <div className="col-5 mt-5">
                    <h1 className="text-start" style={{fontSize:"50px"}}>Skill Tallent</h1>
                    <p className="text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                    <div className="row">
                        <div className="col-4">
                            <p className="text-start"><img src={tick2} alt="" className="me-4"/>Java</p>
                        </div>
                        <div className="col-3 offset-2">
                            <p className="text-start"><img src={tick2} alt="" className="me-4"/>Golang</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <p className="text-start"><img src={tick2} alt="" className="me-4"/>Kotlin</p>
                        </div>
                        <div className="col-3 offset-2">
                            <p className="text-start"><img src={tick2} alt="" className="me-4"/>C++</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <p className="text-start"><img src={tick2} alt="" className="me-4"/>PHP</p>
                        </div>
                        <div className="col-3 offset-2">
                            <p className="text-start"><img src={tick2} alt="" className="me-4"/>Ruby</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <p className="text-start"><img src={tick2} alt="" className="me-4"/>JavaScript</p>
                        </div>
                        <div className="col-6 offset-2">
                            <p className="text-start"><img src={tick2} alt="" className="me-4"/>10+ Bahasa lainnya</p>
                        </div>
                    </div>
                </div>
                <div className="col-3 offset-2">
                    <img src={landingImage4} alt="" style={{width:"490px", height:"390px"}}/>
                </div>
            </div>
            </div>
            <div className="container-fluid" style={{backgroundColor:"#F5F5F5", marginTop:"170px"}}>
                <div className="container pt-5 pb-5">
                <h1 style={{marginTop:"100px"}} className="mb-5">Their opinion about peworld</h1>
                </div>
                <div className="container">
                    <section>
                    <div className="content">
                        <div className="row">
                            <div className="col-4">
                            <div className="card" style={{width:"300px"}}>
                            <div className="card-content">
                                <div className="image">
                                    <img src={card1} alt="" />
                                </div>
                                <div className="name">
                                    <h4>Harry Styles</h4>
                                    <h6>Web Developer</h6>
                                    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</h6>
                                </div>
                            </div>
                            </div>
                            </div>
                            <div className="col-4">
                            <div className="card" style={{width:"300px"}}>
                            <div className="card-content">
                                <div className="image">
                                    <img src={card2} alt="" />
                                </div>
                                <div className="name">
                                    <h4>Niall Horan</h4>
                                    <h6>Web Developer</h6>
                                    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</h6>
                                </div>
                            </div>
                            </div>
                            </div>
                            <div className="col-4">
                            <div className="card" style={{width:"300px"}}>
                            <div className="card-content">
                                <div className="image">
                                    <img src={card3} alt="" />
                                </div>
                                <div className="name">
                                    <h4>Louis Tomlinson</h4>
                                    <h6>Web Developer</h6>
                                    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</h6>
                                </div>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    </section>
                </div>
            </div>
            <div className="container" style={{marginTop:"170px",marginBottom:"130px"}}>
                <div className="container" style={{backgroundColor:"#5E50A1", borderRadius:"70px 10px 70px 10px"}}>
                    <div className="row">
                        <div className="col-3">
                            <h1 style={{color:"white"}} className="my-5">Lorem ipsum dolor sit amet</h1>
                        </div>
                        <div className="col-1 offset-4">
                            <ButtonMulaiWhite className="my-5"/>
                        </div>
                    </div>
                </div>
            </div>
           <Footer/>
        </div>
    )
}