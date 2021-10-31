import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer-background p-4">
            <div className="d-flex justify-content-around px-4 footer">
                <div className="fw-bolder">
                    <h1>NIRAPOD TRAVELS</h1>
                    <p>We believe in stay HAPPY & keep HAPPY!</p>
                    <div>
                        <div className=" d-flex justify-content-center">
                            <a rel="noopener noreferrer"
                                target="_blank" href="https://www.obokash.com/"><i className="fab fa-facebook-square text-primary fs-1 p-1"></i></a>
                            <a rel="noopener noreferrer"
                                target="_blank" href="https://sharetrip.net/"><i className="fab fa-linkedin text-danger fs-1 p-1"></i></a>
                            <a rel="noopener noreferrer"
                                target="_blank" href="https://www.obokash.com/"><i className="fab fa-instagram-square text-warning fs-1 p-1"></i></a>
                            <a rel="noopener noreferrer"
                                target="_blank" href="https://sharetrip.net/"><i className="fab fa-skype text-info fs-1 p-1"></i></a>
                        </div>
                    </div>
                </div>
                <div className="fw-bolder">
                    <h3>Contact Us</h3>
                    <h4><i className="fas fa-phone-volume"></i>+0194458988005</h4>
                    <p className="fw-bolder">Nirapod Travels,<br /> House No. 46<br />Sheikh Kamal Sarani,<br />Road No. 16,<br />Rangs square (5th & 7th floor), <br />Dhanmondi, Dhaka 1209, Bangladesh</p>
                </div>
                <div className="fw-bolder">
                    <h3>Support</h3>
                    <p>Contact us</p>
                    <p>About Us</p>
                    <p>Service Us</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
