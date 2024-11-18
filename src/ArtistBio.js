import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import arrow from "./assets/img/arrow.png";

export default function BIO({ FormData, SetFormData }) {
  const navigate = useNavigate();
  const [bioError, setBioError] = useState(""); // For handling errors
  const [bioAdded, setBioAdded] = useState(false); // To track if the bio has been successfully added

  // Function to handle navigation (when the arrow button is clicked)
  const handleNext = () => {
    // Ensure navigation only works if bio has been successfully added
    if (bioAdded) {
      navigate("/Videoinput");
    }
  };

  // Function to handle the "Add Bio" button click
  const BioAdded = () => {
    // Check if bio is empty
    if (!FormData.bio.trim()) {
      setBioError("Bio is required.");
      return;
    }

    // Calculate the word count
    const wordCount = FormData.bio.trim().split(/\s+/).filter(Boolean).length;

    // If word count exceeds 100, set the error
    if (wordCount > 100) {
      setBioError("Bio must not exceed 100 words.");
      return;
    }

    // If bio is valid (not empty and <= 100 words), clear the error and show success message
    setBioError(""); // Clear error
    setBioAdded(true); // Bio added successfully
  };

  // Handle change in the textarea (typing event)
  const handleChange = (e) => {
    const { value } = e.target;
    const wordCount = value.trim().split(/\s+/).filter(Boolean).length;

    // Update error state based on word count during typing
    if (wordCount > 100) {
      setBioError("Bio must not exceed 100 words.");
    } else if (!value.trim()) {
      setBioError("Bio is required.");
    } else {
      setBioError(""); // Clear error when bio is valid
    }

    // Reset success message when user starts typing again
    setBioAdded(false);

    // Update FormData with the typed bio
    SetFormData((prevData) => ({
      ...prevData,
      bio: value,
    }));
  };

  return (
    <Container className="mt-5 Container-width">
      <Form className="bgColor">
        <h4 className="text-center">Add Bio</h4>
        <p className="stylingP text-center">
          Write 100 words about your art and experiences
        </p>

        <div className="d-flex">
          <textarea
            className={`form-control bioInput ${bioError ? "is-invalid" : ""}`}
            placeholder="Start here"
            rows="4"
            value={FormData.bio || ""}
            onChange={handleChange}
          ></textarea>

          {/* Arrow button to navigate to the next page */}
          <img
            src={arrow}
            className="arrow"
            alt="Next"
            onClick={handleNext}
            style={{ cursor: bioAdded ? "pointer" : "not-allowed" }} // Update cursor to indicate clickable or not
          />
        </div>

        {/* Display error message if there is an error */}
        {bioError && (
          <div className="invalid-feedback d-flex justify-content-center w-100">
            {bioError}
          </div>
        )}

        {/* Show success message only after clicking "Add Bio" button */}
        {bioAdded && (
          <p className="mb-0 text-success d-flex justify-content-center">
            Bio Added Successfully!
          </p>
        )}

        <div className="d-flex align-items-center justify-content-center">
          <Button
            className="mt-3 bioButton"
            disabled={bioError || bioAdded} // Disable the button if there is an error or bio has been added
            onClick={BioAdded} // Trigger the BioAdded function when clicked
          >
            Add Bio
          </Button>
        </div>
      </Form>
    </Container>
  );
}
