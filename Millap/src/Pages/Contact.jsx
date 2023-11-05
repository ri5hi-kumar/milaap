import React from "react";
import "../Components/Button.css";

const Message = () => {
  return (
    <div className="w-[700px]    text-gray-400 bg-gray-300  py-10   mx-auto">
      <h1 className="mt-0 text-3xl font-bold text-center text-slate-500 mb-10">
        Contact Us
      </h1>
      <form action="" className="border-2 border-black rounded  px-[90px] pt-10 shadow-2xl shadow-gray-700">
        <div className="mb-4">
          <p className=" text-lg font-semibold text-slate-500">Your Name :</p>
          <input
            type="text"
            required
            className="w-[500px] h-5 border-gray-300 border-b-slate-950 bg-transparent text-slate-600  px-3 py-[13px] border-2 decoration-none"
          />
        </div>

        <div className="mb-4">
          <p className="text-lg font-semibold text-slate-500">Your Email :</p>
          <input
            type="text"
            required
            className="w-[500px] h-5 border-gray-300 border-b-slate-950 bg-transparent text-slate-600  px-3 py-[13px] border-2 decoration-none"
          />
        </div>

        <div className="mb-4">
          <p className=" text-lg font-semibold text-slate-500">
            Your message :
          </p>
          <div className="  w-[485px] h-[197px]    bg-transparent  rounded-md  border-2 border-slate-950  ">
            <textarea
              name="message"
              id=""
              cols="58"
              rows="8"
              placeholder="Write your message here "
              className="px-5  bg-transparent border-b-slate-950 text-slate-600"
            ></textarea>
          </div>{" "}
          <br />
          <div className="flex justify-center items-center mt-5 mb-10">
            <button className="button-31 w-[100px]" role="button">
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Message;
