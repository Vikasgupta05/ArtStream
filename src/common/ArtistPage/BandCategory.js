import React, { useState, useEffect } from "react";
import MainCategory from "./MainCategory";

const Bands = () => {
  const initialBands = [
    { name: "Band 1", image: "https://via.placeholder.com/150" },
    { name: "Band 2", image: "https://via.placeholder.com/150" },
    { name: "Band 3", image: "https://via.placeholder.com/150" },
  ];

  const [bands, setBands] = useState(initialBands);

  useEffect(() => {
    const newBand = {
      name: "New Band",
      image: "https://via.placeholder.com/150",
    };
    const timer = setTimeout(() => {
      setBands((prevBands) => [...prevBands, newBand]);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return <MainCategory categoryTitle="Bands" artists={bands} />;
};

export default Bands;
