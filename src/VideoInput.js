import React, { useRef, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

export default function VideoInput({ FormData, SetFormData }) {
  const inputRef = useRef(null);
  const [videoSelected, setVideoSelected] = useState(false); // State to track video selection

  const handleVideoClick = () => {
    inputRef.current.click(); // Trigger file input click
  };

  console.log("VideoInput component rendered");
  console.log({ FormData, SetFormData });


  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("video/")) {
      SetFormData((prevData) => ({
        ...prevData,
        video: file,
      }));
      setVideoSelected(true); // Set state to true when video is selected
    } else {
      alert("Please select a valid video file.");
      setVideoSelected(false); // Reset state if an invalid file is selected
    }
  };

  return (
    <Container className="Container-width">
      <Form className="dimension">
        <h4 className="text-center">Demo video</h4>
        <p className="stylingP text-center">
          Add any video of your performance
        </p>

        <div className="d-flex align-items-center justify-content-center buttonDiv mb-5">
          <Button className="mt-3 addBtn col-3" onClick={handleVideoClick}>
            Add
          </Button>
          <p className="mt-4 mx-4 ">OR</p>
          <Button className="mt-3 skipBtn col-3">Skip</Button>
        </div>

        <div className="d-flex justify-content-center align-items-center flex-column">
          {videoSelected && ( // Conditionally render the text
            <p
              className="stylingP text-center mb-1"
              style={{ color: "green" }}
            >
              Your video has been selected!
            </p>
          )}
          <Button className="addBtn ">Complete</Button>
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
