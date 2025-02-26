import { useDispatch } from 'react-redux';
import mail from '../../assets/img/icons/mail.svg';
import logo from '../../assets/img/vaalz-logo.png';
import { setAuthRoute } from '../../config/store/actions/settingsActions';

const Login = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <div className="main-wrapper">
                <div className="account-content">
                    <div className="login-wrapper">
                        <span className="login-sides"></span>
                        <div className="login-content">
                            <div className="login-userset auth-wrapper">
                                <div className="auth-login-logo login-logo">
                                    <img src={logo} alt="img" />
                                </div>
                                <div className="login-userheading text-center">
                                    <h3>Sign In</h3>
                                    <h4>Please login to your account</h4>
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
                                    <div className="alreadyuser">
                                        <h4><span className="hover-a" onClick={() => {
                                            dispatch(setAuthRoute('forgetpassword'))
                                        }}>Forgot Password?</span></h4>
                                    </div>
                                </div>
                                <div className="form-login">
                                    <a className="btn btn-login" href="index.html">Sign In</a>
                                </div>
                                <div className="signinform text-center">
                                    <h4>Don’t have an account? <span className="hover-a"
                                        onClick={() => {
                                            dispatch(setAuthRoute('register'))
                                        }}
                                    >Sign Up</span></h4>
                                </div>
                                {/* <div className="form-setlogin">
                                    <h4>Or sign up with</h4>
                                </div>
                                <div className="form-sociallink">
                                    <ul>
                                        <li>
                                            <a href="javascript:void(0);">
                                                <img src={google} className="me-2" alt="google" />
                                                Sign Up using Google
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">
                                                <img src={fb} className="me-2" alt="google" />
                                                Sign Up using Facebook
                                            </a>
                                        </li>
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                        <span className="login-sides"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
