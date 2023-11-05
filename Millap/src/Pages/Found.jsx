import React from "react";
import "../Components/Button.css";
const Found = () => {
  return (
    <div className="w-[700px]    text-gray-400 bg-gray-300  py-10   mx-auto ">
      <div className="">
        <h1 className=" mt-0 text-3xl font-bold text-center text-slate-500 mb-10">
          Entrust their journey
        </h1>
        <form
          action=""
          className="border-2 border-black rounded  px-[90px] pt-10 shadow-2xl shadow-gray-700"
        >
          <div className="mb-3">
            <label
              htmlFor="name"
              className="text-lg font-semibold text-slate-500"
            >
              Name{" "}
            </label>
            <br />
            <input
              type="text"
              placeholder="Enter pet name"
              required
              className="w-[500px] h-5 border-gray-300 border-b-slate-950 bg-transparent text-slate-600  px-3 py-[13px] border-2 decoration-none "
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="age"
              className="text-lg font-semibold text-slate-500"
            >
              Age{" "}
            </label>
            <br />
            <input
              type="text"
              placeholder="Enter age"
              required
              className="w-[500px] h-5 border-gray-300 border-b-slate-950 bg-transparent  px-3 py-[13px] border-2 decoration-none text-slate-600"
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="Category"
              className="text-lg font-semibold text-slate-500"
            >
              Category{" "}
            </label>
            <br />
            <select
              name="category"
              id=""
              className="border-b-slate-950 bg-transparent "
            >
              <option value="cat" className="text-slate-600">
                Cat
              </option>
              <option value="dog" className="text-slate-600">
                Dog
              </option>
            </select>
          </div>

          <div className="mb-3">
            <label
              htmlFor="Loaction"
              className="text-lg font-semibold text-slate-500"
            >
              Location{" "}
            </label>
            <br />
            <input
              type="text"
              placeholder="Enter the location where you found it"
              required
              className="w-[500px] h-5 border-gray-300 border-b-slate-950 bg-transparent  px-3 py-[13px] border-2 decoration-none text-slate-600"
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="color"
              className="text-lg font-semibold text-slate-500"
            >
              Color{" "}
            </label>
            <br />
            <input
              type="text"
              placeholder="Enter the color"
              required
              className="w-[500px] h-5 border-gray-300 border-b-slate-950 bg-transparent  px-3 py-[13px] border-2 decoration-none text-slate-600"
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="email"
              className="text-lg font-semibold text-slate-500"
            >
              {" "}
              Email
            </label>
            <br />
            <input
              type="email"
              placeholder="Enter your email address"
              required
              className="w-[500px] h-5 border-gray-300 border-b-slate-950 bg-transparent  px-3 py-[13px] border-2 decoration-none text-slate-600"
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="description"
              className="text-lg font-semibold text-slate-500 mb-5"
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
                className="px-5  bg-transparent border-slate-950 text-slate-600"
              ></textarea>
            </div>{" "}
          </div>

          <div className="flex justify-center items-center mt-5 mb-10">
            <button className="button-31 w-[100px]" role="button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Found;
