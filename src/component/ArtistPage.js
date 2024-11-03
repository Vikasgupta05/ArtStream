import React from "react";
import Musicians from "../common/ArtistPage/musicCategory";
import Dancers from "../common/ArtistPage/DancerCategory";
import Anchors from "../common/ArtistPage/AnchorsCategory";
import Bands from "../common/ArtistPage/BandCategory";

const ArtistsPage = () => {
  return (
    <div>
      <Musicians />
      <Dancers />
      <Anchors />
      <Bands />
    </div>
  );
};

export default ArtistsPage;
