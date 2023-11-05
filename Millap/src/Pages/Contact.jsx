import React from "react";
//import './Message.css'
const Message = () => {
  return (
    <div className="w-[700px] bg-gray-700 text-gray-400 mb-10  border-2 border-black rounded mx-auto mt-[150px] px-[90px]">
      <h1 className=" mt-5 text-3xl font-bold text-center text-white">
        Contact Us
      </h1>
      <form action="" className="mb-5">
        <div className="mb-4">
          <p className=" font-semibold text-lg text-white">Your Name :</p>
          <input
            type="text"
            required
            className=" border-gray-700 w-[500px] h-5 border-b-slate-950 bg-transparent  rounded-md px-3 py-[13px] border-2"
          />
        </div>

        <div className="mb-4">
          <p className=" font-semibold text-lg text-white">Your Email :</p>
          <input
            type="text"
            required
            className=" border-gray-700 w-[500px] h-5 border-b-slate-950 bg-transparent  rounded-md px-3 py-[13px] border-2"
          />
        </div>

        <div className="mb-4">
          <p className=" font-semibold text-lg text-white mb-4">
            Your message :
          </p>
          <div className="  w-[485px] h-[197px]    bg-transparent  rounded-md  border-2 border-slate-950  ">
            <textarea
              name="message"
              id=""
              cols="58"
              rows="8"
              placeholder="Write your message here "
              className="px-5  bg-transparent border-b-slate-950"
            ></textarea>
          </div>{" "}
          <br />
          <div className="flex justify-center items-center mt-5">
            <button className="button-86" role="button">
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Message;
