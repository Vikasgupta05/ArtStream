import React, { useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";

export default function VideoInput({ FormData, SetFormData }) {
  const inputRef = useRef(null);

  const handleVideoClick = () => {
    inputRef.current.click(); // Trigger file input click
  };

  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("video/")) {
      SetFormData((prevData) => ({
        ...prevData,
        video: file,
      }));
    } else {
      alert("Please select a valid video file.");
    }
  };

  return (
    <Container className="Container-width">
      <Form className="dimension">
        <h4>Demo video</h4>
        <p className="stylingP">Add any video of your performance</p>

        <div className="d-flex align-items-center justify-content-center buttonDiv">
          <Button className="mt-3 signIn col-4" onClick={handleVideoClick}>
            Add
          </Button>
          <p className="mt-4 mx-4">OR</p>
          <Button className="mt-3 signIn col-4">Skip</Button>
        </div>

        <input
          type="file"
          accept="video/*"
          ref={inputRef}
          style={{ display: "none" }}
          onChange={handleVideoChange}
        />
      </Form>
    </Container>
  );
}