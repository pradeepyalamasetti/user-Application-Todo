// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import axios from "axios";
// import "./AddEdit.css";
// import { toast } from "react-toastify";

// const initialState = {
//   name: "",
//   skills: "",
//   contact: "",
// };

// const Sample = () => {
//   const [state, setState] = useState(initialState);

//   const { name,skills, contact } = initialState;

//   const history = useNavigate();
//   const addContact = async (data) => {
//     const response = await axios.post("http://localhost:3005/user", data);
//     if (response.status === 200) {
//       toast.success(response.data);
//     }
//   };

//   const handleInputChange = (e) => {
//     console.log(e.target.name);
//     let { name, value } = e.target;
//     setState({ ...state, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!name || !skills || !contact) {
//       toast.error("Please provide value into each input field");
//     } else {
//       addContact(state);
//       history("/");
//     }
//   };

//   return (
//     <div style={{ marginTop: "100px" }}>
//       <form
//         style={{
//           margin: "auto",
//           padding: "15px",
//           maxWidth: "400px",
//           alignContent: "center",
//         }}
//         onSubmit={handleSubmit}
//       >
//         <label htmlFor="name">Name</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           placeholder="Your Name ..."
//           onChange={handleInputChange}
//           value={name}
//         />
//         <label htmlFor="skills">skills</label>
//         <input
//           type="text"
//           id="skills"
//           name="skills"
//           placeholder="Yourskills ..."
//           onChange={handleInputChange}
//           value={skills}
//         />
//         <label htmlFor="contact">Contact</label>
//         <input
//           type="number"
//           id="contact"
//           name="contact"
//           placeholder="Your Contact No. ..."
//           onChange={handleInputChange}
//           value={contact}
//         />
//         <input type="submit" value="Add" />
//       </form>
//     </div>
//   );
// };

// export default Sample;
