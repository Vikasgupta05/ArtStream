import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../assets/css/SignIn.module.css';
import React, { useState } from 'react';
import OTP from '../common/OTP';
import SignIn from './SignIn';


export default function ForgetPassword() {
    
    const [otp, setOTP] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('OTP:', otp);
    };


    return(

        <div className={styles.container}>
            {/* Blurred SignIn component */}
            <div className={styles.blurBackground}>
                <SignIn />
            </div>

            {/* Foreground ForgetPassword component */}
            <div className={styles.foreground} >
                <div className='d-flex align-items-center justify-content-center' style={{ height: '100vh'}}>

                    <div className={`${styles.customBorder} text-center col-12` }>

                        <div className="mb-1">
                            <span className="h4 fs-5">Reset Your Password</span>
                        </div>

                        <div className="mb-1">
                            <span className={`${styles.grayText}`}>Enter OTP</span>
                        </div>

                        <div>
                            <OTP length={6} onChange={(value) => setOTP(value)} />
                        </div>

                        <div className="mb-2 d-grid gap-2 col-8 mx-auto">
                            <button className={`${styles.ovalInput} ${styles.signIn} 
                                btn btn-light`} type="button" style={{color:'white'}}>Reset 
                            </button>
                        </div>

                        <div className="">
                            <span className={`${styles.grayText}`}>Resend OTP</span>
                        </div>
                    </div>
        
                </div>
            </div>
        </div>   
    );

}
