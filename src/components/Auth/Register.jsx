import logo from '../../assets/img/vaalz-logo.png';
import user1 from '../../assets/img/icons/users1.svg';
import mail from '../../assets/img/icons/mail.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setAuthRoute } from '../../config/store/actions/settingsActions';

const Register = () => {
    const dispatch = useDispatch();
    const { authRoute } = useSelector((state) => state.settings);

    useEffect(() => {
        console.log('authRoute', authRoute);
    }, [authRoute])

    return (
        <div>

            <div className="main-wrapper">
                <div className="account-content">
                    <div className="login-wrapper">
                        <span className="login-sides"></span>
                        <div className="login-content">
                            <div className="login-userset">
                                <div className="login-logo">
                                    <img src={logo} alt="img" />
                                </div>
                                <div className="login-userheading text-center">
                                    <h3>Create an Account</h3>
                                    {/* <h4>Continue where you left off</h4> */}
                                </div>
                                <div className="form-login">
                                    <label>Full Name</label>
                                    <div className="form-addons">
                                        <input type="text" placeholder="Enter your full name" />
                                        <img src={user1} alt="img" />
                                    </div>
                                </div>
                                <div className="form-login">
                                    <label>Email</label>
                                    <div className="form-addons">
                                        <input type="text" placeholder="Enter your email address" />
                                        <img src={mail} alt="img" />
                                    </div>
                                </div>
                                <div className="form-login">
                                    <label>Password</label>
                                    <div className="pass-group">
                                        <input type="password" className="pass-input" placeholder="Enter your password" />
                                        <span className="fas toggle-password fa-eye-slash"></span>
                                    </div>
                                </div>
                                <div className="form-login">
                                    <a className="btn btn-login">Sign Up</a>
                                </div>
                                <div className="signinform text-center">
                                    <h4>Already a user? <span className="hover-a" onClick={() => {
                                        dispatch(setAuthRoute('login'))
                                    }}>Sign In</span></h4>
                                </div>
                            </div>
                        </div>
                        <span className="login-sides"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;
