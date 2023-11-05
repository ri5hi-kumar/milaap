import React from "react";
import Slider from "../Components/Slider";
import img2 from "../assets/Images/side.jpg";
import img3 from "../assets/Images/volunteer.avif";
function Home() {
  return (
    <>
      <Slider />
      <div className="home2 w-full h-screen p-10 flex items-center justify-center bg-black">
        <div className="image w-full h-[500px] p-16">
          <img
            className="h-[200px] rounded-lg shadow-black"
            src={img2}
            alt="Loading"
          />
        </div>
        <div className="details text-white  p-10">
          <h1 className="text-center mb-10 text-4xl font-bold text-green-300 uppercase tracking-wide">
            What are animals rights ?
          </h1>
          <div className="details leading-loose text-base font-semibold">
            <p>
              Animal rights advocate for the ethical and humane treatment of
              animals, emphasizing their inherent worth and the need to protect
              them from cruelty and exploitation. <br />
              These rights encompass the belief that animals deserve to live
              free from unnecessary suffering and exploitation, whether in the
              context of scientific experiments, entertainment, agriculture, or
              any other human activity. <br />
              Animal rights activists work towards creating awareness about the
              emotional and physical capacities of animals, promoting their
              welfare and ensuring they are treated with respect and kindness.
              The movement emphasizes the importance of recognizing animals as
              sentient beings, deserving of compassion, empathy, and the right
              to live a life free from harm and exploitation.
              <br /> Efforts in animal rights are aimed at fostering a society
              where animals are protected, respected, and afforded the dignity
              they deserve.
            </p>
          </div>
        </div>
      </div>

     
    </>
  );
}

export default Home;
