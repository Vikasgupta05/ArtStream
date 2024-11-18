import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Email from '../common/Email'; 
import Password from '../common/Password';
import ConfirmPW from '../common/ConfirmPW';
import OTP from '../common/OTP';
import styles from '../assets/css/SignIn.module.css'; 

export default function SignUPForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPW, setConfirmPW] = useState('');
    const [otp, setOTP] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('ConfirmPw:', confirmPW);
        console.log('OTP:', otp);
    };

    return (
        <div className='login d-flex align-items-center justify-content-center' style={{ height: '100vh'}}>
            <form onSubmit={handleSubmit} style={{ width: '50%', maxWidth: '500px' }}>
                <h1 className="Heading fs-2 mb-4 fw-bold text-center" style={{ fontFamily: "'Inknut Antiqua', serif" }}>Create Account</h1>

                <Email email={email} setEmail={setEmail} />

                <Password password={password} setPassword={setPassword} />

                <ConfirmPW confirmPW={confirmPW} setConfirmPW={setConfirmPW} />

                <div className="d-flex align-items-center justify-content-around my-4 col-12">
                    <span style={{ color: 'gray', fontStyle: 'italic', fontSize: '13px' }}>Enter OTP, we have sent to your email</span>
                </div>

                <OTP length={6} onChange={(value) => setOTP(value)} />

                <div className="mb-3 text-center">
                    <Link to="/SignUp" style={{ color: 'gray' }}>RESEND OTP!</Link>
                </div>

                <div className="mb-2 d-grid gap-2 col-12 mx-auto">
                    <button className={`${styles.ovalInput} ${styles.signIn} btn btn-light`} type="button" style={{ color: 'white' }}>Continue</button>
                </div>

                <div className="mb-3 d-flex justify-content-center align-items-center col-12">
                    <div>
                        <label className="custom-control-label" htmlFor="check" style={{ color: 'gray', fontStyle: 'italic', fontSize: '12px' }}>I am a consistent user, </label>
                        <Link to="/SignIn" className="text-decoration-none" style={{ color: 'orangered', fontWeight: '700' }}>Sign in</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}
