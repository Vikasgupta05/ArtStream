import React from 'react';
import styles from '../assets/css/SignIn.module.css';

const PasswordInput = ({ password, setPassword }) => {
    return (
        <div className="mb-4">
            <input 
                type="password" 
                className={`${styles.ovalInput} form-control`} 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                autoComplete="off" 
            />
        </div>
    );
};

export default PasswordInput;
