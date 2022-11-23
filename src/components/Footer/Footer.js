import React from 'react'
import logo from "../../images/logo2.png"
const Footer = () =>{
    return(
        <div>
            <div className="container-fluid" style={{backgroundColor:"#5E50A1"}}>
                <div className="container pt-5">
                <div className="row">
                    <div className="col-3">
                        <img src={logo} alt="" />
                    </div>
                </div>
                <div className="row pt-3 pb-5">
                    <div className="col-4">
                        <h6 className='text-start text-white' style={{marginLeft:"40px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</h6>
                    </div>
                </div>
                <div style={{backgroundColor:"white",height:"2px",width:"1220px",marginLeft:"35px"}}></div>
                <div className="row mt-4">
                    <div className="col-3">
                        <p className='text-white'>2020 Pewworld. All right reserved</p>
                    </div>
                    <div className="col-1 offset-6">
                        <p className='text-white'>Telepon</p>
                    </div>
                    <div className="col-1">
                        <p className='text-white'>Email</p>
                    </div>
                </div>
            </div>
                </div>
        </div>
    )
}
export default Footer;