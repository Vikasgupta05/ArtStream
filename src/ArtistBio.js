import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function BIO({ FormData, SetFormData }) {
  const navigate = useNavigate();
  const [bioError, setBioError] = useState("");

  const handleNext = () => {
    if (!bioError) {
      navigate("/Videoinput");
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    const wordsArray = value.trim().split(/\s+/).filter(Boolean);
    const wordCount = wordsArray.length;

    if (wordCount > 100) {
      setBioError("Bio must not exceed 100 words.");
    } else {
      setBioError("");
      SetFormData((prevData) => ({
        ...prevData,
        bio: value,
      }));
    }
  };

  return (
    <Container className="mt-5 Container-width">
      <Form className="bgColor">
        <h4>Add bio</h4>
        <p className="stylingP">Write 100 words about your art and experiences</p>

        <textarea
          className={`form-control bioInput ${bioError ? "is-invalid" : ""}`}
          placeholder="Start here"
          rows="4"
          value={FormData.bio || ""}
          onChange={handleChange}
        ></textarea>
        
        {bioError && <div className="invalid-feedback">{bioError}</div>}

        <Button
          className="mt-3 signIn col-5"
          disabled={bioError}
          onClick={handleNext}
        >
          Next
        </Button>
      </Form>
    </Container>
  );
}