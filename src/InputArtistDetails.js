import { useRef } from "react";
import "./ArtistDetails.css";
import { Form, Button, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function InputDetails({
  FormData,
  SetFormData,
  artFormsList,
  setArtFormsList,
}) {
  const inputRef = useRef(null);

  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/bio");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", FormData);
  };

  const handleArtFormChange = (e) => {
    const value = e.target.value;
    SetFormData((prevData) => ({
      ...prevData,
      artForm: value,
      customArtForm: value === "others" ? prevData.customArtForm : "",
    }));
  };

  const handleCustomArtFormChange = (e) => {
    SetFormData((prevData) => ({
      ...prevData,
      customArtForm: e.target.value,
    }));
  };

  const handleAddCustomArtForm = () => {
    if (
      FormData.customArtForm &&
      !artFormsList.includes(FormData.customArtForm)
    ) {
      // Add custom art form before "Others" and keep "Others" at the end
      const updatedList = [
        ...artFormsList.filter((item) => item !== "others"),
        FormData.customArtForm,
      ];
      setArtFormsList(updatedList); // Update the artFormsList with new custom art form
      SetFormData({
        ...FormData,
        artForm: FormData.customArtForm, // Select the custom art form after adding
        customArtForm: "", // Clear the custom input field
      });
    } else {
      alert("Please enter a unique custom art form");
    }
  };

  const handleImageClick = () => {
    inputRef.current.click(); // Trigger file input click
  };

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);

    // Limit the number of images to 10
    if (files.length > 10) {
      alert("You can select up to 10 images only.");
      return;
    }

    // Set the first image as the profile picture and store all images
    SetFormData((prevData) => ({
      ...prevData,
      profile: files[0], // Set the first file as the profile picture
      images: files, // Store all selected images
    }));
  };

  return (
    <>
      <Container className="mt-5 Container-width">
        <div className="innerDiv d-flex justify-content-center align-items-center mb-2">
          {/* This div contains the profile image or the default profile icon */}
          {FormData.profile ? (
            <img
              src={URL.createObjectURL(FormData.profile)}
              alt="Selected Profile"
              onClick={handleImageClick}
              className="profileArea"
            />
          ) : (
            <div
              className="defaultProfile d-flex justify-content-center align-items-center"
              onClick={handleImageClick}
            >
              <FontAwesomeIcon icon={faUser} alt="default Profile" />
            </div>
          )}

          {/* Hidden file input for selecting the profile image */}
          <input
            type="file"
            ref={inputRef}
            onChange={handleImageChange}
            style={{ display: "none" }}
            multiple
            accept="image/*"
          />
        </div>

        {/* Message under the profile image */}
        <div className="">
          <p className="paraCss d-flex align-items-center justify-content-center">
            {" "}
            Tap to choose pictures{" "}
          </p>
        </div>

        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group controlId="username">
              <Form.Control
                type="text"
                name="username"
                value={FormData.username}
                onChange={handleChange}
                placeholder="Username"
                className="row-input"
                required
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group controlId="phone">
              <Form.Control
                type="tel"
                name="phone"
                value={FormData.phone}
                onChange={handleChange}
                placeholder="Phone number"
                className="row-input"
                required
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group controlId="location">
              <Form.Control
                type="text"
                name="location"
                value={FormData.location}
                onChange={handleChange}
                placeholder="City"
                className="row-input"
                required
              />
            </Form.Group>
          </Row>
          <Row className="mb-2">
            <Form.Group controlId="artform">
              <Form.Control
                as="select"
                name="artForm"
                value={FormData.artForm}
                onChange={handleArtFormChange}
                className="row-input"
                required
              >
                <option value="" className="row-input">
                  Select Artform
                </option>
                {artFormsList.map((artForm, index) => (
                  <option key={index} value={artForm} className="row-input">
                    {artForm.charAt(0).toUpperCase() + artForm.slice(1)}
                  </option>
                ))}
                <option value="others" className="row-input">
                  Others
                </option>
              </Form.Control>
            </Form.Group>

            <div className="d-flex align-items-center justify-content-center mt-2">
              {FormData.artForm === "others" && (
                <Form.Group
                  controlId="customArtForm"
                  className="artForm d-flex align-items-center"
                >
                  <Form.Control
                    type="text"
                    placeholder="Enter your custom artform"
                    value={FormData.customArtForm}
                    onChange={handleCustomArtFormChange}
                    className=" row-input me-3"
                  />
                  <Button
                    onClick={handleAddCustomArtForm}
                    className="Artform-btn"
                  >
                    Add Artform
                  </Button>
                </Form.Group>
              )}
            </div>
          </Row>
          <Row className="mb-3">
            <Form.Group controlId="gmail">
              <Form.Control
                type="email"
                name="email"
                value={FormData.email}
                onChange={handleChange}
                placeholder="Gmail"
                className="row-input"
                required
              />
              <p className="paraCss d-flex justify-content-center mt-2">
                {" "}
                This email will be displayed on your profile{" "}
              </p>
            </Form.Group>
          </Row>

          <Row className="d-flex justify-content-center">
            <Button className="mt-3 signIn col-3" onClick={handleNext}>
              {" "}
              Next{" "}
            </Button>
          </Row>
        </Form>
      </Container>
    </>
  );
}
