import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../assets/css/SignIn.module.css'; 
import React from 'react';
import ProfilePic from './ProfilePic';
import NavBar from './NavBar';
import ArtistsPage from './ArtistPage';

const Dashboard = () => {
    return (
        <div className="App">
            <div className='d-flex'>
                <ProfilePic/>
                <NavBar/>
            </div>
            <div>
                <ArtistsPage/>
            </div>
        </div>
    );
};

export default Dashboard;