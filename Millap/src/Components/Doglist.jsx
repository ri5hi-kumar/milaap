import React from "react";
import Dogcard from "./Dogcard";
import img1 from "../assets/Images/dog2.jpg";
function Doglist() {
  const heroHeight = `calc(100vh - 16px)`;
  const dog = {
    image: img1,
    age: "adult",
    status: "healthy",
    size: "small",
  };

  return (
    <div className="container bg-gray-300">
      <div className="hero-section" style={{ minHeight: heroHeight }}>
        <div className="desc h-32 text-center pt-10 mx-2">
          <h1 className="text-3xl font-bold text-green-500 mb-2">
            Discover your forever companion, adopt your new best friend today!
          </h1>
          <p className="text-sm">
            Unleash love and change a life together. Adopt a furry friend and
            embrace unconditional love.
          </p>
        </div>
        <div className="dog-card-list flex justify-center flex-wrap gap-10">
          <Dogcard dog={dog} />
          <Dogcard dog={dog} />
          <Dogcard dog={dog} />
          <Dogcard dog={dog} />
          <Dogcard dog={dog} />
          <Dogcard dog={dog} />
        </div>
      </div>
    </div>
  );
}

export default Doglist;
