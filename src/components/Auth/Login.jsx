import { isEmpty, some } from 'lodash';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import mail from '../../assets/img/icons/mail.svg';
import logo from '../../assets/img/vaalz-logo.png';
import { setAuthRoute } from '../../config/store/actions/settingsActions';
import { loginUserRequest } from '../../config/store/actions/userActions';

const Login = () => {
    const dispatch = useDispatch();
    const { logging } = useSelector((state) => state.users);
    const { register, watch } = useForm();
    const registerInputs = watch(["email", "password"]);
    const [email, password] = registerInputs;
    const userData = {
        password,
        email,
    }

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
                                        <input type="text" placeholder="Enter your email address" {...register("email")} />
                                        <img src={mail} alt="img" />
                                    </div>
                                </div>
                                <div className="form-login">
                                    <label>Password</label>
                                    <div className="pass-group">
                                        <input type="password" className="pass-input" placeholder="Enter your password" {...register("password")} />
                                        {/* <span className="fas toggle-password fa-eye-slash"></span> */}
                                    </div>
                                </div>
                                {false && <div className="form-login" style={{ visibility: "hidden" }}>
                                    <div className="alreadyuser">
                                        <h4>
                                            <span
                                                className="hover-a"
                                                onClick={() => {
                                                    dispatch(setAuthRoute('forgetpassword'))
                                                }}
                                            >
                                                Forgot Password?
                                            </span>
                                        </h4>
                                    </div>
                                </div>}
                                <div className="form-login">
                                    <button
                                        disabled={logging || some(registerInputs, (item) => isEmpty(item))}
                                        className="btn btn-login"
                                        onClick={() => {
                                            dispatch(loginUserRequest(userData));
                                        }}
                                    >
                                        Sign In{' '}
                                        {logging && <div className="spinner-border spinner-border-sm" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>}
                                    </button>
                                </div>
                                <div className="signinform text-center" style={{ visibility: "hidden" }}>
                                    <h4>
                                        Don’t have an account?
                                        <span
                                            className="hover-a"
                                            onClick={() => {
                                                dispatch(setAuthRoute('register'))
                                            }}
                                        >
                                            Sign Up
                                        </span>
                                    </h4>
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
