import React from "react";
import { Link } from 'react-router-dom'
import '../scss/components/footer.scss'
import { useState } from 'react';


function Footer({ activeLink, onFooterClick }) {

    return (
        <div className="container footer-starter">
            <div className='row footer-row d-flex justify-content-center align-items-center'>
                <div className="col-12 footer-container d-flex justify-content-center align-items-center">
                    <Link to='/' onClick={() => onFooterClick('/')} className={`home-link col-2 ${activeLink === '/' ? 'active' : ''}`}>
                        Daily Routines
                    </Link>
                    <div className="design-container col-6">
                        <h3 className="design col-12 p-0 m-0">Designed by: <span>Naghun</span></h3>
                        <h3 className="rights col-12 p-0 m-0">All rights reserved <span>- 2024</span></h3>
                    </div>
                    <ul className="col-4 footer-list">
                        <li className="col-4 list-item">
                            <Link to='/privacy-policy' onClick={() => onFooterClick('/privacy-policy')} className={`col-12 nav-link ${activeLink === '/privacy-policy' ? 'active' : ''}`}>Privacy Policy</Link>
                        </li>
                        <li className="col-4 list-item">
                            <Link to='/about' onClick={() => onFooterClick('/about')} className={`col-12 footer-item ${activeLink === '/about' ? 'active' : ''}`}>About</Link>
                        </li>
                        <li className="col-4 list-item">
                            <Link to='/contact' onClick={() => onFooterClick('/contact')} className={`col-12 footer-item ${activeLink === '/contact' ? 'active' : ''}`}>Contact</Link>    
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;
