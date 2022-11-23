import React from 'react'
import Assets from '../../assets/img'
const Footer = () =>{
    return(
        <div>
            <div className="container-fluid" style={{backgroundColor:"#5E50A1"}}>
                <div className="container pt-5">
                <div className="row">
                    <div className="col-3">
                        <img src={Assets.logo2} alt="" style={{height: "50px", marginRight: "41px"}}/>
                    </div>
                </div>
                <div className="row pt-3 pb-5">
                    <div className="col-4">
                        <h6 className='text-start text-white' style={{marginLeft:"40px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</h6>
                    </div>
                </div>
                <div style={{backgroundColor:"white",height:"2px",width:"1235px",marginLeft:"35px"}}></div>
                <div className="row mt-4">
                    <div className="col-3">
                        <p className='text-white'>2020 Pewworld. All right reserved</p>
                    </div>
                    <div className="col-1 offset-7">
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