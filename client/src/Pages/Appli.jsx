// import React from "react";
// import "../Components/Button.css";
// import axios from 'axios';

// const Appli = () => {
//   /*const [firstname, setFirstname] = useState("");

//   const [occupation, setOccuption] = useState("");
//   const [address, setAddress] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [petname, setPetname] = useState("");
//   const [availability, setAvailability] = useState("");*/

//  /* const collectionData = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:8800/api/application", {
//         method: "POST",
//         body:({

//           occupation,
//           address,
//           phone,
//           email,
//           petname,
//           availability,
//           firstname
//         }),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       const result = await response.json();
//       console.log(result);
//     } catch (error) {
//       console.log(error);
//     }
//   };*/

//   const collectionData = (values, { resetForm }) => {
//     axios
//       .post('http://localhost:8800/api/application', {
//         name: values.name,
//         occupation: values.occupation,
//         address: values.address,
//       phone:Number(values.phone),
//       email:values.email,
//       pet_name:values.pet_name,
//       })
//       .then((response) => {
//         console.log(response);
//         resetForm();
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
//     <div className=" w-[700px] text-gray-400 bg-gray-300 py-10   mx-auto ">
//       <div className="">
//         <h1 className=" mt-0 text-3xl font-bold text-center text-slate-500 mb-10">
//           Get your friend home
//         </h1>
//         <form
//           action=""
//           method="POST"
//           className="border-2 border-black rounded  px-[90px] pt-10 shadow-2xl shadow-gray-700"
//           onSubmit={collectionData}
//         >
//           <div className="">
//             <div className="mb-4">
//               <label
//                 htmlFor="name"
//                 className="text-lg font-semibold text-slate-500"
//               >
//                 Name :{" "}
//               </label>
//               <br />
//               <input
//                 type="text"
//                 placeholder="Enter your firstname"
//                 required
//                 name="name"

//                 //onChange={(e) => setFirstname(e.target.value)}
//                 className="w-[500px] h-5 border-gray-300 border-b-slate-950 bg-transparent text-slate-600  px-3 py-[13px] border-2 decoration-none"
//               />
//             </div>

//             <div className="mb-4">
//               <label
//                 htmlFor="Occupation"
//                 className="text-lg font-semibold text-slate-500"
//               >
//                 Occupation :
//               </label>
//               <br />
//               <input
//                 type="text"
//                 placeholder="Enter your occupation"
//                 required
//                 name="occupation"

//                // onChange={(e) => setOccuption(e.target.value)}
//                 className="w-[500px] h-5 border-gray-300 border-b-slate-950 bg-transparent text-slate-600  px-3 py-[13px] border-2 decoration-none"
//               />
//             </div>

//             <div className="mb-4">
//               <label
//                 htmlFor="address"
//                 className="text-lg font-semibold text-slate-500"
//               >
//                 Address :{" "}
//               </label>
//               <br />
//               <input
//                 type="text"
//                 placeholder="Enter your address"
//                 required
//                 name="address"

//                 //onChange={(e) => setAddress(e.target.value)}
//                 className="w-[500px] h-5 border-gray-300 border-b-slate-950 bg-transparent text-slate-600  px-3 py-[13px] border-2 decoration-none"
//               />
//             </div>

//             <div className="mb-4">
//               <label
//                 htmlFor="phone"
//                 className="text-lg font-semibold text-slate-500"
//               >
//                 Phone number:
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter your phone number"
//                 maxLength={10}
//                 required
//                 name="phone"

//                 //onChange={(e) => setPhone(e.target.value)}
//                 className=" w-[500px] h-5 border-gray-300 border-b-slate-950 bg-transparent text-slate-600  px-3 py-[13px] border-2 decoration-none"
//               />
//             </div>

//             <div className="mb-4">
//               <label
//                 htmlFor="email"
//                 className="text-lg font-semibold text-slate-500"
//               >
//                 Email :{" "}
//               </label>
//               <br />
//               <input
//                 type="email"
//                 placeholder="Enter your email id"
//                 required
//                 name="email"

//                 //onChange={(e) => setEmail(e.target.value)}
//                 className="w-[500px] h-5 border-gray-300 border-b-slate-950 bg-transparent text-slate-600  px-3 py-[13px] border-2 decoration-none"
//               />
//             </div>

//             <div className="mb-4">
//               <label
//                 htmlFor="petname"
//                 className="text-lg font-semibold text-slate-500"
//               >
//                 Pet Name :{" "}
//               </label>
//               <br />
//               <input
//                 type="text"
//                 placeholder="Enter pet name you want to adopt"
//                 required
//                 name="pet_name"

//                 //onChange={(e) => setPetname(e.target.value)}
//                 className="w-[500px] h-5 border-gray-300 border-b-slate-950 bg-transparent text-slate-600  px-3 py-[13px] border-2 decoration-none"
//               />
//             </div>

//             <div className="mb-4">
//               <label
//                 htmlFor="availability"
//                 className="text-lg font-semibold text-slate-500"
//               >
//                 {" "}
//                 Are you available for an 1 hour interview session ?
//               </label>
//               <br />
//               <select
//                 name="availability"
//                 id=""
//                 required

//                 //onChange={(e) => setAvailability(e.target.value)}
//                 className="border-b-slate-950 bg-transparent "
//               >
//                 <option value="yes">Yes</option>
//                 <option value="no">No</option>
//               </select>
//             </div>

//             <div className="mb-4">
//               <input type="checkbox" required />
//               <span className=" text ml-3 italic text-slate-500">
//                 I declare the above details submitted are all valid.
//               </span>
//             </div>
//           </div>
//           <div className="flex justify-center items-center mt-5 mb-10">
//             <button className="button-31 w-[100px]" role="button">
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Appli;

import React, { useState } from "react";

const Appli = () => {
  const [formData, setFormData] = useState({
    name: "",
    occupation: "",
    phone: "",
    email: "",
    address: "",
    pet_name: "",
    availability: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8800/api/application", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      console.log("API Response:", result);
      // Handle the API response as needed
    } catch (error) {
      console.error("API Error:", error);
      // Handle errors here
    }
  };

  return (
    <div className=" w-[700px] text-gray-400 bg-gray-300 py-10   mx-auto ">
      <h1 className=" mt-0 text-3xl font-bold text-center text-slate-500 mb-10">Apply for Adoption</h1>
      <form
        onSubmit={handleSubmit}
        className="border-2 border-black rounded  px-[90px] pt-10 shadow-2xl shadow-gray-700"
      >
        <div className="form-group mb-4">
          <label className="text-lg font-semibold text-slate-500">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required placeholder="Enter your name"
            className="w-[500px] h-5 border-gray-300 border-b-slate-950 bg-transparent text-slate-600  px-3 py-[13px] border-2 decoration-none "
          />
        </div>
        <div className="form-group mb-4">
          <label className="text-lg font-semibold text-slate-500">Occupation:</label>
          <input
            type="text"
            name="occupation"
            value={formData.occupation}
            onChange={handleInputChange}
            required  placeholder="Enter your occupation"
            className="w-[500px] h-5 border-gray-300 border-b-slate-950 bg-transparent text-slate-600  px-3 py-[13px] border-2 decoration-none "
          />
        </div>
        <div className="form-group mb-4">
          <label className="text-lg font-semibold text-slate-500">Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required placeholder="Enter your phone number"
            className="w-[500px] h-5 border-gray-300 border-b-slate-950 bg-transparent text-slate-600  px-3 py-[13px] border-2 decoration-none "
          />
        </div>
        <div className="form-group mb-4">
          <label className="text-lg font-semibold text-slate-500">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required placeholder="Enter your email address"
            className="w-[500px] h-5 border-gray-300 border-b-slate-950 bg-transparent text-slate-600  px-3 py-[13px] border-2 decoration-none "
          />
        </div>
        <div className="form-group mb-4">
          <label className="text-lg font-semibold text-slate-500">Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required placeholder="Enter your address"
            className="w-[500px] h-5 border-gray-300 border-b-slate-950 bg-transparent text-slate-600  px-3 py-[13px] border-2 decoration-none "
          />
        </div>
        <div className="form-group mb-4">
          <label className="text-lg font-semibold text-slate-500">Pet Name:</label>
          <input
            type="text"
            name="pet_name"
            value={formData.pet_name}
            onChange={handleInputChange}
            required placeholder="Enter pet name you want to adopt"
            className="w-[500px] h-5 border-gray-300 border-b-slate-950 bg-transparent text-slate-600  px-3 py-[13px] border-2 decoration-none "
          />
        </div>
        <div className="form-group mb-4">
          <label className="text-lg font-semibold text-slate-500"> Are you available for an 1 hour interview session ?</label>
          <select
            name="availability"
            value={formData.availability}
            onChange={handleInputChange}
            required
            className="border-b-slate-950 bg-transparent "
          >
            <option value="">Select Availability</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="flex justify-center items-center mt-5 mb-10">
            <button className="button-31 w-[100px]" role="button">
              Submit
            </button>
          </div>
      </form>
    </div>
  );
};

export default Appli;
