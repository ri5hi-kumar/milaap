import React, { useState } from "react";

const Appli = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [occupation, setOccuption] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [petname, setPetname] = useState("");
  const [availability, setAvailability] = useState("");

  const collectionData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8800/api/application", {
        method: "post",
        body: JSON.stringify({
          firstname,
          lastname,
          occupation,
          address,
          phone,
          email,
          petname,
          availability,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" bg-gray-700">
      <div className="w-[700px]  text-gray-400  mt-20    border-2 border-black rounded mx-auto  px-[90px] bg-grey-900">
        <h1 className=" mt-5 text-3xl font-bold text-center text-white">
          Get your friend home
        </h1>
        <form action="" className="mb-5" onSubmit={collectionData}>
          <div className="text-black mt-7">
            <div className="mb-4">
              <label
                htmlFor="Firstname"
                className="text-lg font-semibold text-white"
              >
                FirstName :{" "}
              </label>
              <br />
              <input
                type="text"
                placeholder="Enter your firstname"
                required
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                className="w-[500px] h-5 border-gray-700 border-b-slate-950 bg-transparent rounded-md px-3 py-[13px] border-2 decoration-none"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="Lastname"
                className="text-lg font-semibold text-white"
              >
                LastName :
              </label>
              <br />
              <input
                type="text "
                placeholder="Enter your lastname"
                required
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                className="w-[500px] h-5 border-gray-700  border-b-slate-950 bg-transparent rounded-md px-3 py-[13px] border-2"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="Occupation"
                className="text-lg font-semibold text-white"
              >
                Occupation :
              </label>
              <br />
              <input
                type="text"
                placeholder="Enter your occupation"
                required
                value={occupation}
                onChange={(e) => setOccuption(e.target.value)}
                className="w-[500px] h-5 border-gray-700  border-b-slate-950 bg-transparent rounded-md px-3 py-[13px] border-2"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="address"
                className="text-lg font-semibold text-white"
              >
                Address :{" "}
              </label>
              <br />
              <input
                type="text"
                placeholder="Enter your address"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-[500px] h-5 border-gray-700 border-b-slate-950 bg-transparent rounded-md px-3 py-[13px] border-2 decoration-none"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="phone"
                className="text-lg font-semibold text-white"
              >
                Phone number:
              </label>
              <input
                type="text"
                placeholder="Enter your phone number"
                maxLength={10}
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className=" border-gray-700 w-[500px] h-5 border-b-slate-950 bg-transparent  rounded-md px-3 py-[13px] border-2"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="text-lg font-semibold text-white"
              >
                Email :{" "}
              </label>
              <br />
              <input
                type="email"
                placeholder="Enter your email id"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-[500px] h-5 border-gray-700 border-b-slate-950 bg-transparent rounded-md px-3 py-[13px] border-2"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="petname"
                className="text-lg font-semibold text-white"
              >
                Pet Name :{" "}
              </label>
              <br />
              <input
                type="text"
                placeholder="Enter pet name you want to adopt"
                required
                value={petname}
                onChange={(e) => setPetname(e.target.value)}
                className="w-[500px] h-5 border-gray-700 border-b-slate-950 bg-transparent rounded-md px-3 py-[13px] border-2"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="availability"
                className="text-lg font-semibold text-white"
              >
                {" "}
                Are you available for an 1 hour interview session ?
              </label>
              <br />
              <select
                name="available"
                id=""
                required
                value={availability}
                onChange={(e) => setAvailability(e.target.value)}
                className="border-b-slate-950 bg-transparent "
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <div className="mb-4">
              <input type="checkbox" required />
              <span className=" text ml-3 italic text-white">
                I declare the above details submitted are all valid.
              </span>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button className="button-86" role="button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Appli;
