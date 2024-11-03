import React, { useState, useEffect } from "react";
import MainCategory from "./MainCategory";

const ArtistCategory = () => {
  // Initial static data (you can replace this with dynamic data from a backend)
  const initialArtists = [
    { name: "Artist 1", image: "https://via.placeholder.com/150" },
    { name: "Artist 2", image: "https://via.placeholder.com/150" },
    { name: "Artist 3", image: "https://via.placeholder.com/150" },
  ];

  const [artists, setArtists] = useState(initialArtists);

  useEffect(() => {
    // Here you would add real-time data fetching logic, e.g., WebSocket or API calls
    const newArtist = {
      name: "New Artist",
      image: "https://via.placeholder.com/150",
    };

    const timer = setTimeout(() => {
      setArtists((prevArtists) => [...prevArtists, newArtist]);
    }, 3000);

    return () => clearTimeout(timer); // Clean up timer
  }, []);

  return <MainCategory categoryTitle="Recommended Artists" artists={artists} />;
};

export default ArtistCategory;
