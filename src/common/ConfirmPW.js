import React from 'react';
import styles from '../assets/css/SignIn.module.css';

const ConfirmPW = ({ confirmPW, setConfirmPW }) => {
    return (
        <div className="mb-4">
            <input 
                type="password" 
                className={`${styles.ovalInput} form-control`} 
                placeholder="Confirm Password" 
                value={confirmPW} 
                onChange={(e) => setConfirmPW(e.target.value)} 
                autoComplete="off" 
            />
        </div>
    );
};

export default ConfirmPW;
