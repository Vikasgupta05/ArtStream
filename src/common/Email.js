import React from 'react';
import styles from '../assets/css/SignIn.module.css';

const EmailInput = ({ email, setEmail }) => {
    return (
        <div className='mb-3'>
            <input 
                type="email" 
                className={`${styles.ovalInput} form-control`} 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                autoComplete="off" 
            />
        </div>
    );
};

export default EmailInput;
