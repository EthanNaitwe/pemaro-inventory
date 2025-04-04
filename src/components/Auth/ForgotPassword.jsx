import logo from '../../assets/img/vaalz-logo.png';
import mail from '../../assets/img/icons/mail.svg';

const ForgotPassword = () => {
    return (
        <div className="main-wrapper">
            <div className="account-content">
                <div className="login-wrapper">
                    <span className="login-sides"></span>
                    <div className="login-content">
                        <div className="login-userset ">
                            <div className="login-logo">
                                <img src={logo} alt="img" />
                            </div>
                            <div className="login-userheading text-center">
                                <h3>Forgot password?</h3>
                                <h4>Don’t warry! it happens. Please enter the address<br />
                                    associated with your account.</h4>
                            </div>
                            <div className="form-login">
                                <label>Email</label>
                                <div className="form-addons">
                                    <input type="text" placeholder="Enter your email address" />
                                    <img src={mail} alt="img" />
                                </div>
                            </div>
                            <div className="form-login">
                                <span className="btn btn-login">Submit</span>
                            </div>
                        </div>
                    </div>
                    <span className="login-sides"></span>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;
