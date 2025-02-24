import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/icons/googlelogo.svg';
import Email from '../common/Email'; 
import Password from '../common/Password';
import styles from '../assets/css/SignIn.module.css'; 


export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Remember Me:', rememberMe);
    };

    return (
        <div className='login d-flex align-items-center justify-content-center' style={{ height: '100vh'}}>
            <form onSubmit={handleSubmit} style = {{width:'50%',maxWidth: '500px'}}>
                <h1 className="Heading fs-1 mb-4 fw-bold text-center " style={{ fontFamily: "'Inknut Antiqua',serif" }}>Login to Magic</h1>

                <Email email={email} setEmail={setEmail} />
                <Password password={password} setPassword={setPassword} />

                <div className="mb-4 d-flex justify-content-between align-items-center">
                    <div>
                        <input 
                            className= "custom-control-input me-2"
                            id="check" 
                            type="checkbox" 
                            checked={rememberMe} 
                            onChange={() => setRememberMe(!rememberMe)} 
                        />
                        <label className={`${styles.rememberMe } ${styles.bold}  custom-control-label`} htmlFor="check" style={{fontWeight:'500'}}>Remember me</label>
                    </div>

                    <Link to="/ForgetPassword" className={`${styles.rememberMe}`} style={{ color: 'gray', fontStyle: 'italic' }}>Forgot Password?</Link>
                    
                </div>

                <div className="mb-4 d-grid gap-2 col-12 mx-auto">
                    <button className={`${styles.ovalInput} ${styles.signIn} btn btn-light`} type="button"> Login
                </button>
                </div>

                <div className="d-flex align-items-center justify-content-around my-4 col-12">
                    <div style={{ flex: 1, borderBottom: '1px solid #ccc', marginRight: '10px' }}></div>
                    <span style={{color: 'gray', fontStyle :'italic', fontSize:'12px'}}>Or login with</span>
                    <div style={{ flex: 1, borderBottom: '1px solid #ccc', marginLeft: '10px' }}></div>
                </div>

                <div className="mb-4 d-grid gap-2 col-12 mx-auto">
                    <button className={`${styles.ovalInput} btn btn-light`} type="button">
                        <Logo style={{ width: '18px', height: '18px' }} className='me-3 mb-1'/>
                        Google
                    </button>
                </div>


                <div className="mb-3 d-flex justify-content-between align-items-center col-12">
                    <div>
                        <label className="custom-control-label" style={{color: 'gray', fontStyle :'italic', fontSize:'12px'}}>Don't have an account?</label>
                    </div>
                    <Link to="/SignUp" className="text-decoration-none" style={{ color: 'orangered', fontWeight: '700' }}>Sign up now</Link>
                </div>
            </form>
        </div>
    );
}
