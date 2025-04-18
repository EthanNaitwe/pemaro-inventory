import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import mail from '../../assets/img/icons/mail.svg';
import user1 from '../../assets/img/icons/users1.svg';
import logo from '../../assets/img/nile-suites-logo.png';
import { setAuthRoute } from '../../config/store/actions/settingsActions';
import { createUserRequest } from '../../config/store/actions/userActions';

const Register = () => {
    const dispatch = useDispatch();
    const { creating } = useSelector((state) => state.users);
    
    const { register, watch } = useForm();
    const registerInputs = watch(["full_name", "email", "phone_number", "password"]);
    const [full_name, email, phone_number, password] = registerInputs;
    const userData = {
        surname: "Admin",
        other_names: full_name,
        phone_number,
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
                                        <input type="text" placeholder="Enter your full name" {...register("full_name")} />
                                        <img src={user1} alt="img" />
                                    </div>
                                </div>
                                <div className="form-login">
                                    <label>Email</label>
                                    <div className="form-addons">
                                        <input type="text" placeholder="Enter your email address" {...register("email")} />
                                        <img src={mail} alt="img" />
                                    </div>
                                </div>
                                <div className="form-login">
                                    <label>Phone Number</label>
                                    <div className="form-addons">
                                        <input type="number" placeholder="Enter your Phone Number" {...register("phone_number")} />
                                        {/* <img src={mail} alt="img" /> */}
                                    </div>
                                </div>
                                <div className="form-login">
                                    <label>Password</label>
                                    <div className="pass-group">
                                        <input type="password" className="pass-input" placeholder="Enter your password" {...register("password")} />
                                        {/* <span className="fas toggle-password fa-eye-slash"></span> */}
                                    </div>
                                </div>
                                <div className="form-login"
                                >
                                    <button
                                        disabled //</div>={creating || some(registerInputs, (item) => isEmpty(item))}
                                        className="btn btn-login"
                                        onClick={() => {
                                            dispatch(createUserRequest(userData));
                                        }}
                                    >
                                        Sign Up{' '}
                                        {creating && <div className="spinner-border spinner-border-sm" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>}
                                    </button>
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
