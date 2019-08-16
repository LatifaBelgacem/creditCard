import React, { Component } from 'react';
import './creditcard.css'

class Creditcard extends Component {
    render() {
        return (
            <div>
                <div className="credit-card">
                   <div className="title-position"> <h1 className="credit-card-title">CREDIT CARD</h1></div>
                    <div className="credit-card-chip">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHzZAtgq1ysgXf_DOI2b9VIdMHvFSGc2wyYDt88DyJO06DwI7r" alt="credit" width="100%"></img>
                    </div>



                    <div className="credit-card-content">
                        <div className="credit-card-text">
                            <h2 className="credit-card-number">7253 3256 7895 1245</h2>

                            <div className="credit-card-valid-thru">
                                <h2 className="credit-card-second-number">5422</h2>
                                <div className="credit-card-date">
                                    <p className="credit-card-thru">valid thru</p>
                                    <div className="credit-card-validite">
                                        <p className="credit-card-month">month/year</p>
                                        <h2 className="credit-card-year">11/50</h2>
                                    </div>
                                </div>
                            </div>
                            <h5 className="credit-card-holder">CARDHOLDER</h5>
                        </div>



                        <div className="credit-card-logo">
                            <img src="https://q7h8y4i2.stackpathcdn.com/wp-content/uploads/2013/12/visa-mastercard-logo.jpg" alt="credit-card"></img>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default Creditcard;