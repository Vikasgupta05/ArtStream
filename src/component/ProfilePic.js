import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import defaultProfilePic from '../assets/icons/defaultProfilePic.webp';

const ProfilePic = () => {
  const [profilePic, setProfilePic] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  return (
    <div className='App d-flex'>
        <div className="profile-area d-flex justify-content-start align-items-start mt-3 ms-5">
            <label htmlFor="profile-upload">
                <Image
                src={profilePic || defaultProfilePic} // Use default image if no upload
                roundedCircle
                width="50"
                height="50"
                className="profile-pic"
                />
            </label>
            <input
                id="profile-upload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: "none" }}
            />
        </div>
    </div>
  );
};

export default ProfilePic;
