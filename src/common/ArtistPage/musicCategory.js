import React, { useState, useEffect } from "react";
import MainCategory from "./MainCategory";

const Musicians = () => {
  const initialMusicians = [
    { name: "Musician 1", image: "https://via.placeholder.com/150" },
    { name: "Musician 2", image: "https://via.placeholder.com/150" },
    { name: "Musician 3", image: "https://via.placeholder.com/150" },
  ];

  const [musicians, setMusicians] = useState(initialMusicians);

  useEffect(() => {
    const newMusician = {
      name: "New Musician",
      image: "https://via.placeholder.com/150",
    };
    const timer = setTimeout(() => {
      setMusicians((prevMusicians) => [...prevMusicians, newMusician]);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return <MainCategory categoryTitle="Musicians" artists={musicians} />;
};

export default Musicians;
