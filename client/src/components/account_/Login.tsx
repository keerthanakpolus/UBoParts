// react
import React, { useCallback, useEffect, useState } from 'react';
import { Modal } from 'reactstrap';
import Forgotpass from '../forgot/Forgotpass';
import Register from './Register'
import axios from 'axios';
import { useRouter } from 'next/router';
// interface Props {
//     isOpen?: boolean;
//     onClose?: () => void;
//     geUserDetails: 
// }

function Login(props: any) {

    const router = useRouter();
    
    const [loginformData, setLoginFormData] = useState({
        username: '',
        password: ''
    });

    const onLoginFormDataChange = (event: any) => {
        event.preventDefault();

        setLoginFormData({
            ...loginformData,
            [event.target.name]: event.target.value
            
        });
        
    }

       
    const onFormSubmit = async (event: any) => {
        event.preventDefault();

        console.log('Form data submitted:', loginformData);
        try {
                const userdata = { 'identifier': loginformData.username, 'password': loginformData.password }
                await axios.post(`http://10.199.100.156:1337/api/auth/local`, { ...userdata })
                    .then((response: any) => {
                        localStorage.setItem('usertoken', JSON.stringify(response.data.jwt));
                        localStorage.setItem('userdetails', JSON.stringify(response.data.user));
                        // props.geUserDetails(response.data.jwt);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                const isEmpty = { username: "", password: ""};
                setLoginFormData(isEmpty);
                
                const currentPagePath = router.pathname;
                const targetPath = '/homepage';
                if (currentPagePath === targetPath) {
                    // Refresh the page
                    window.location.reload();
                } else {
                    // Redirect to the target path
                    router.push(targetPath);
                }
                // router.push(targetPath);
          
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    const [loginmodal, setLoginModal] = useState(true);

    const {
        isOpen = false,
        onClose,
    } = props;

    const toggle = useCallback(() => {
        if (isOpen && onClose) {
            onClose();
            
        }
    }, [isOpen, onClose]);

    useEffect(() => {
        if (isOpen) {
           
        }
    }, [isOpen]);


    const [forgotPasswordIsOpen, setForgotPasswordIsOpen] = useState(false);
    const showForgotPassword = () => {
        setForgotPasswordIsOpen(true);

    };

    const onForgotPasswordClose = () => {
        setForgotPasswordIsOpen(false);
        
    };


    const [registerIsOpen, setRegisterIsOpen] = useState(false);
    const showRegister = () => {
        setRegisterIsOpen(true);
        setLoginModal(false);
    };

    const onRegisterClose = () => {
        setRegisterIsOpen(false);
        setLoginModal(true); 
    };


    return (
        <>  
            <Forgotpass

                isOpen={forgotPasswordIsOpen}
                onClose={onForgotPasswordClose}

            />
    
            <Register

                isOpen={registerIsOpen}
                onClose={onRegisterClose}
                geUserDetails={props.geUserDetails}
            />
            
            {loginmodal &&
                <Modal isOpen={isOpen} toggle={toggle} centered className="ac-modal">
                    <div id="loginmodal">
                        <div className="ac-modal-content">
                            <div className="modal-body">
                                <div className="ac-card login-form">
                                    <div className="ac-card-body">
                                        <h3 className="ac-card-title text-center bg-image-text semifont">Login</h3>
                                        <p className="ac-card-sub-title text-center body-sub-titles-1 lightfont">Welcome back! Please enter your details</p>
                                        <div className="ac-card-text">
                                            <form action="/action_page.php">
                                                <div className="form-group marginb40">
                                                    <label htmlFor="email" className="body-sub-titles-1 mediumfont">Email address</label>
                                                    <input type="email" className="form-control body-sub-titles-1 mediumfont inputformtxt" id="email" name="username" placeholder="Enter your email" value={loginformData.username} onChange={onLoginFormDataChange}/>
                                                </div>
                                                <div className="form-group marginb40">
                                                    <label htmlFor="password" className="body-sub-titles-1 mediumfont">Password</label>
                                                    <input type="password" className="form-control body-sub-titles-1 mediumfont inputformtxt" id="password" name="password" placeholder="Enter your password" value={loginformData.password} onChange={onLoginFormDataChange}/>                                            </div>
                                                <div className="form-group">
                                                    <input type="checkbox" name="remember_me" className='rounded' /><span className="remember_me body-sub-titles-1 lightfont inputformtxt">Remember me</span>
                                                    <button type="button" id="forgot_password" className="body-sub-titles-1 mediumfont" onClick={showForgotPassword}>Forgot Password</button>
                                                </div>
                                                <button type="submit" className="btn btn-default body-sub-titles-1 mediumfont" onClick={onFormSubmit}>Login</button>
                                            </form>
                                        </div>
                                        <div className="ac-card-footer text-center">
                                            <p className="body-sub-titles-1 mediumfont"><span className="lightfont">Don't have an account? </span><button type="button" id="forgot_password" className="body-sub-titles-1 mediumfont" onClick={showRegister}>Register</button></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            }
        </>
    );
}

export default Login;
