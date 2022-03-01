import React, { Component } from 'react'
import { FcGoogle } from 'react-icons/fc'
import Logo from '../assets/images/logo-bkz.png'
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'

export default class signup extends Component {
    render() {
        return (
            <>
                <header className="header-login">
                    <div className="header-content">
                        <div className="row">
                            <div className="header-left col-md-6">
                            </div>
                            <div className="header-right col-md-6">
                                <form>
                                    <h1>Sign Up</h1>
                                    <span>LET’S EXPLORE THE WORLD</span>
                                    <div>
                                        <div>
                                            <input type="text" placeholder="Name" />
                                        </div>
                                        <div>
                                            <input type="text" placeholder="Email" />
                                        </div>
                                        <div>
                                            <input type="password" placeholder="Password" />
                                        </div>
                                        <div>
                                            <button type="button" className="btn-login btn btn-info">SignUp</button>
                                        </div>
                                        <div>
                                            <p className="forgot"><a className="text-dark" href="forgot-password.html">Forgot password?</a></p>
                                        </div>
                                        <div>
                                            <h2><span className="hr-sect">or try another way</span></h2>
                                        </div>
                                        <div>
                                            <button type="button" className="btn-google btn btn-info"><FcGoogle />   SignUp
                                                With Google</button>
                                        </div>
                                        <div>
                                            <button type="button" className="btn-signup btn btn-info">Sign Up</button>
                                            <p className="signupnow">Already Have an Account ? <a className="text-light" href="#">Login Now</a></p>
                                        </div>
                                        <div className="footer2 container">
                                            <div className="img">
                                                <img className="logofooter2 logo-bkz " src={Logo} alt="Logo" />
                                            </div>
                                            <div className="descripton2">
                                                <p>
                                                    Plan and book your perfect trip with expert
                                                    advice, travel tips for vehicle
                                                    information
                                                    from us
                                                </p>
                                            </div>
                                            <div>©2020 Vehicle Rental Center. All rights reserved</div>
                                            <div className="link-social">
                                                <FaTwitter />
                                                <FaFacebookF />
                                                <FaInstagram />
                                                <FaLinkedinIn />
                                                <FaYoutube />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </header>
            </>
        )
    }
}
