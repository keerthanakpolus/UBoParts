// react
import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image'
import AppImage from '../shared/AppImage';
import Forgotpass from '../forgot/Forgotpass';
import Login from '../account_/Login';

function Header() {
  
   
    const [forgotPasswordPickerIsOpen, setforgotPasswordPickerIsOpen] = useState(false);
   
    const showForgotPassword = () => {
        setforgotPasswordPickerIsOpen(true);
    };

    const onForgotPasswordClose = () => {
        setforgotPasswordPickerIsOpen(false);
    };
    
    const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
    const showLoginModal = () => {
        setLoginModalIsOpen(true);
    };

   const onLoginModalClose = () => {
        setLoginModalIsOpen(false);
    };
  
    return (
        <>
            <Forgotpass

                isOpen={forgotPasswordPickerIsOpen}
                onClose={onForgotPasswordClose}

            />
            <Login

                isOpen={loginModalIsOpen}
                onClose={onLoginModalClose}
            />
            <header className="ub_desktop_header">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-auto">
                        <div className="logo1"><AppImage src="images/svg/LOGO.svg"/></div>
                    </div>
                    <div className="col text-lg-end">
                        <div className="bar">
                            <ul className="p-0">
                                <li className="menu_font_size regularfont"><a href="/homepage">Home</a></li>
                                <li className="menu_font_size regularfont"><a href="/shop">Shop</a></li>
                                <li className="menu_font_size regularfont"><a href="/about_us_">About us</a></li>
                                <li className="menu_font_size regularfont"><a href="/request">Request</a></li>
                                <li className="menu_font_size regularfont"><a href="/dismantle_car">Dismantle Car</a></li>
                                <li className="menu_font_size regularfont"><a href="">My Account <AppImage src="images/svg/my-account.svg" className="my-account"/></a></li>
                                <li><a href="/cartpage"><AppImage src="images/svg/cart-white.svg"/><span className="count">0</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
            
        </>
    );
}

export default Header;
