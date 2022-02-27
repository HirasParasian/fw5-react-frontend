import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { useParams, useNavigate } from 'react-router-dom'
import { getData } from '../helpers/http'
import { FaPlus, FaMinus, FaHeart } from 'react-icons/fa'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const Payment = (props) => {
    const [vehicle, setVehicle] = useState({})
    const { vehicleId } = useParams()

    useEffect(() => {
        getDataComponent(vehicleId)
    }, [])

    const getDataComponent = async (vehicleId) => {
        try {
            const { data } = await getData(`http://localhost:5000/vehicles/id?vehicleId=${vehicleId}`, props.history)

            setVehicle(data.results[0])
        } catch (e) {

        }
    }

    return (
        <><Navbar />
            <div className="container-payment">
                <div className=" my-2 media-center">
                    <div className="row">
                        <div className="margin-reserv">
                            <a href="/" className="text-decoration-none href">
                                <i className="reserv-back fa-solid fa-chevron-left"></i>
                                <span className="span-reserv">Payment</span>
                            </a>
                        </div>
                    </div>
                </div>


                <div className=" my-2 media-center">
                    <div className="row">
                        <div className="col-xl-5">
                            <img src={vehicle?.image} alt={vehicle?.name} className="payment-img src mt-1" />
                        </div>
                        <div className="col-xl-7">
                            <h2><b>{vehicle?.name} </b> </h2>
                            <h5 className="text-secondary"><b>{vehicle?.location}</b></h5><br />
                            <h5 className="text-danger"><b>No Prepayment</b></h5><br /><br />
                            <h4 className="code-payment">#FG1209878YZS</h4>
                            <button className="btn btn-copy btn-info fw-bold" type="button">Copy Booking Code</button>
                        </div>
                    </div>
                </div>

                <div className=" my-5 ">
                    <div className="row">
                        <div className="col-xl-5">
                            <form action="">
                                <fieldset disabled="disabled">
                                    <div>
                                        <input type="text" id="disabledTextInput"
                                            className="bg-transparent border-2 border-secondary form-control quantity-payment"
                                            placeholder="Quantity : 2 Bikes" />
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                        <div className="col-xl-7">
                            <form action="">
                                <fieldset disabled="disabled">
                                    <div>
                                        <input type="text" id="disabledTextInput"
                                            className="bg-transparent border-2 border-secondary form-control quantity-date"
                                            placeholder="Reservation Date    :     Jan 18 - 20 2021" />
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
                <div className=" my-5 ">
                    <div className="row">
                        <div className="col-xl-5">
                            <form action="">
                                <fieldset disabled="disabled">
                                    <div className="bg-transparent fw-bold border-2 border-secondary form-control quantity-detail">
                                        <label className="text-dark" htmlFor="">Order Details : </label><br />
                                        <label className="text-secondary pt-4" htmlFor="">1 Bike : Rp. 78.000</label><br />
                                        <label className="text-secondary pt-1" htmlFor="">1 Bike : Rp. 78.000</label><br />
                                        <label className="text-dark pt-5" htmlFor="">Total : Rp. 156.000 </label>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                        <div className="col-xl-7">
                            <form action="">
                                <fieldset disabled="disabled">
                                    <div className="bg-transparent fw-bold border-2 border-secondary form-control quantity-identity">
                                        <label className="text-dark" htmlFor="">Identity : </label><br />
                                        <label className="text-secondary pt-4" htmlFor="">Samantha Doe (+6290987682)</label><br />
                                        <label className="text-secondary pt-1" htmlFor="">samanthadoe@mail.com</label><br />
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>

                <div className=" my-5 ">
                    <div className="row">
                        <div className="d-grid col-xl-3 d-flex text-center">
                            <label className="label-payment" htmlFor=""><br />
                                <h2 className="fw-bold ">Payment Code : </h2>
                            </label>
                        </div>
                        <div className="col-xl my-2">
                            <div
                                className="d-grid bg-transparent position-relative  fw-bold border-2 border-secondary form-control quantity-code">
                                <label className=" text-dark" htmlFor="">#FG1209878YZS </label><br />
                                <button className="btn btn-copy-copy btn-info fw-bold" type="button">Copy
                                </button>
                            </div>
                        </div>
                        <div className="col-xl">
                            <div className="mb-3 d-grid">
                                <select className="form-select bg-transparent border-2 form-select-payment mx-9">
                                    <option className="d-none">Select Payment</option>
                                    <option value="Bekasi">Cash</option>
                                    <option value="Bandung">Transfer</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-xl-12 mt-5 mb-5">
                            <div className="d-grid gap-2">
                                <button className="btn-lg btn-pay-before btn-primary me-5" type="button">Pay before : 59:30</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Payment 