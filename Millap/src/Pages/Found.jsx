import React from "react";
// import './Found.css'
const Found = () => {
  return (
    <div className="w-[700px] bg-gray-700   text-gray-400 mb-10  border-2 border-black rounded mx-auto mt-[150px] px-[90px]">
      <h1 className=" mt-5 text-3xl font-bold text-center text-white">
        Entrust their journey
      </h1>
      <form action="">
        <div className="mb-3">
          <label htmlFor="name" className="text-lg font-semibold text-white">
            Name{" "}
          </label>
          <br />
          <input
            type="text"
            placeholder="Enter pet name"
            required
            className="w-[500px] h-5 border-gray-700 border-b-slate-950 bg-transparent  px-3 py-[13px] border-2 decoration-none"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="text-lg font-semibold text-white">
            Age{" "}
          </label>
          <br />
          <input
            type="text"
            placeholder="Enter age"
            required
            className="w-[500px] h-5 border-gray-700 border-b-slate-950 bg-transparent  px-3 py-[13px] border-2 decoration-none"
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="Category"
            className="text-lg font-semibold text-white"
          >
            Category{" "}
          </label>
          <br />
          <select
            name="category"
            id=""
            className="border-b-slate-950 bg-transparent "
          >
            <option value="cat">Cat</option>
            <option value="dog">Dog</option>
          </select>
        </div>

        <div className="mb-3">
          <label
            htmlFor="Loaction"
            className="text-lg font-semibold text-white"
          >
            Location{" "}
          </label>
          <br />
          <input
            type="text"
            placeholder="Enter the location where you found it"
            required
            className="w-[500px] h-5 border-gray-700 border-b-slate-950 bg-transparent  px-3 py-[13px] border-2 decoration-none"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="color" className="text-lg font-semibold text-white">
            Color{" "}
          </label>
          <br />
          <input
            type="text"
            placeholder="Enter the color"
            required
            className="w-[500px] h-5 border-gray-700 border-b-slate-950 bg-transparent  px-3 py-[13px] border-2 decoration-none"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="text-lg font-semibold text-white">
            {" "}
            Email
          </label>
          <br />
          <input
            type="email"
            placeholder="Enter your email address"
            required
            className="w-[500px] h-5 border-gray-700 border-b-slate-950 bg-transparent  px-3 py-[13px] border-2 decoration-none"
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="description"
            className="text-lg font-semibold text-white mb-5"
          >
            Description{" "}
          </label>
          <br />
          <div className=" w-[485px] h-[197px]    bg-transparent    border-2 border-slate-950  mt-5">
            <textarea
              name="message"
              id=""
              cols="58"
              rows="8"
              placeholder="Write a little description for our guest"
              className="px-5  bg-transparent border-slate-950"
            ></textarea>
          </div>{" "}
        </div>

        <div className="flex justify-center items-center mt-5 mb-10">
          <button className="button-86" role="button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Found;
