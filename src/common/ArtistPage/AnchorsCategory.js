import React, { useState, useEffect } from "react";
import MainCategory from "./MainCategory";

const Anchors = () => {
  const initialAnchors = [
    { name: "Anchor 1", image: "https://via.placeholder.com/150" },
    { name: "Anchor 2", image: "https://via.placeholder.com/150" },
    { name: "Anchor 3", image: "https://via.placeholder.com/150" },
  ];

  const [anchors, setAnchors] = useState(initialAnchors);

  useEffect(() => {
    const newAnchor = {
      name: "New Anchor",
      image: "https://via.placeholder.com/150",
    };
    const timer = setTimeout(() => {
      setAnchors((prevAnchors) => [...prevAnchors, newAnchor]);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return <MainCategory categoryTitle="Anchors" artists={anchors} />;
};

export default Anchors;
