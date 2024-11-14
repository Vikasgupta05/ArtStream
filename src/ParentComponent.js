import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import BIO from "./ArtistBio";
import VideoInput from "./VideoInput";
import InputDetails from "./InputArtistDetails";

function ParentComponent() {
  const [FormData, SetFormData] = useState({
    images: [],
    profile: null,
    username: "",
    phone: "",
    city: "",
    artForm: "",
    customArtForm: "",
    email: "",
    bio: "",
    video: null, // Add a video key to the form data state
  });

  const [artFormsList, setArtFormsList] = useState([
    "dance",
    "music",
    "standup",
    "anchor",
    "band",
  ]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <InputDetails
            FormData={FormData}
            SetFormData={SetFormData}
            artFormsList={artFormsList}
            setArtFormsList={setArtFormsList}
          />
        }
      />
      <Route
        path="/bio"
        element={<BIO FormData={FormData} SetFormData={SetFormData} />}
      />
      <Route
        path="/Videoinput"
        element={<VideoInput FormData={FormData} SetFormData={SetFormData} />}
      />
    </Routes>
  );
}

export default ParentComponent;
