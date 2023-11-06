import React, { useEffect, useState } from "react";
import Dogcard from "./Dogcard";
import Data from "./Data";

function Doglist() {
  const heroHeight = `calc(100vh - 16px)`;
 
  const [kutta,setKutta]=useState([])
  useEffect(() => {
    async function fetchdata() {
      try {
        const res = await fetch(`http://localhost:8800/api/pets`);
        const ros = await res.json();
        setKutta(ros);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchdata();
  }, []);

  return (
    <div className="container bg-gray-300  py-10">
      <div className="hero-section" style={{ minHeight: heroHeight }}>
        <div className="desc h-32 text-center pt-10 ">
          <h1 className="text-3xl font-bold text-slate-500 mb-2">
            Discover your forever companion, adopt your new best friend today!
          </h1>
          <p className="text-sm">
            Unleash love and change a life together. Adopt a furry friend and
            embrace unconditional love.
          </p>
        </div>
        <div className="mx-[200px] mt-10">
        <div className="dog-card-list flex justify-center flex-wrap gap-10   rounded-3xl">
          {
            kutta.map((dog,index) => (
              <Dogcard key={dog.id} dog={ dog} imageUrl={Data[index]}/>
             ))
            }

        </div>
        </div>
       
      </div>
    </div>
  );
}

export default Doglist;
