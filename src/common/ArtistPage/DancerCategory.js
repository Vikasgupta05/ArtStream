import React, { useState, useEffect } from "react";
import MainCategory from "./MainCategory";

const Dancers = () => {
  const initialDancers = [
    { name: "Dancer 1", image: "https://via.placeholder.com/150" },
    { name: "Dancer 2", image: "https://via.placeholder.com/150" },
    { name: "Dancer 3", image: "https://via.placeholder.com/150" },
  ];

  const [dancers, setDancers] = useState(initialDancers);

  useEffect(() => {
    const newDancer = {
      name: "New Dancer",
      image: "https://via.placeholder.com/150",
    };
    const timer = setTimeout(() => {
      setDancers((prevDancers) => [...prevDancers, newDancer]);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return <MainCategory categoryTitle="Dancers" artists={dancers} />;
};

export default Dancers;
