// import React, { useState } from "react";
// import Layout from "../components/Layout";
// import "../styles/SignUp.css";
// import axios from "axios";
// function SignUp() {
//   const [username, setUsername] = useState();
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();
//   const handleSubmit = (event) => {
//     let inputObj = { username, email, password };
//     let url = "http://localhost:4005/users/createuser";
//     axios
//       .post(url, inputObj)
//       .then((res) => {
//         if (res.status === 200) {
//           alert("User Created Successfully");
//         } else {
//           Promise.reject();
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//     event.preventDefault();
//   };
//   return (
//     <Layout>
//       <h1>SignUp page</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Username"
//           onChange={(e) => {
//             setUsername(e.target.value);
//           }}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           onChange={(e) => {
//             setEmail(e.target.value);
//           }}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           onChange={(e) => {
//             setPassword(e.target.value);
//           }}
//         />
//         <input type="submit" value="Sign Up" />
//       </form>
//     </Layout>
//   );
// }
// //useState() and useEffect() : react hooks
// // react hooks helps us to use class based components into functional components
// export default SignUp;

//  import React, { useState } from "react";
//  import Layout from "../components/Layout";
//  import "../styles/SignUp.css";
// import axios from "axios";
//  function SignUp() {
//    const [username, setUsername] = useState();
//    const [email, setEmail] = useState();
//    const [password, setPassword] = useState();
//    const handleSubmit = (event) => {
//      let inputObj = { username, email, password };
//       let url = "http://localhost:4005/users/createuser";
//     //  axios
//     //    .post(url, inputObj)
//     //    .then((res) => {
//     //       console.log(res);
//     //     }).catch((err) => {
//     //      console.log(err);
//     //     });
//     //  event.preventDefault();

//    axios
//    .post(url, inputObj)
//    .then((res) => {
//      if (res.status === 200) {
//        alert("User Created Successfully");
//      } else {
//        Promise.reject();
//      }
//    })
//    .catch((err) => {
//      console.log(err);
//    });
// };
//    return (
//      <Layout>
//        <h1>SignUp page</h1>
//        <form onSubmit={handleSubmit}>
//          <input
//            type="text"
//            placeholder="Username"
//            onChange={(e) => {
//              setUsername(e.target.value);
//            }}
//          />
//          <input
//            type="email"
//            placeholder="Email"
//            onChange={(e) => {
//              setEmail(e.target.value);
//            }}
//          />
//          <input
//            type="password"
//            placeholder="Password"
//            onChange={(e) => {
//              setPassword(e.target.value);
//            }}
//          />
//          <input type="submit" value="Sign Up" />
//        </form>
//      </Layout>
//    );
//  }
//  //useState() and useEffect() : react hooks
//  // react hooks helps us to use class based components into functional components

// export default SignUp;
// import React, { useState } from "react";
// import Layout from "../components/Layout";
// import "../styles/SignUp.css";
// import axios from "axios";

// function SignUp() {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const inputObj = { username, email, password };
//     const url = "http://localhost:4005/users/createuser";

//     axios
//       .post(url, inputObj)
//       .then((res) => {
//         if (res.status === 200) {
//           alert("User Created Successfully");
//         } else {
//           Promise.reject();
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//         alert("There was an error creating the user.");
//       });
//   };

//   return (
//     <Layout>
//       <h1>SignUp page</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <input type="submit" value="Sign Up" />
//       </form>
//     </Layout>
//   );
// }

// export default SignUp;

// import React, { useState } from "react";
// import Layout from "../components/Layout";
// import "../styles/SignUp.css";
// import axios from "axios";

// function SignUp() {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const inputObj = { username, email, password };
//     const url = "http://localhost:4005/users/createuser";

//     axios
//       .post(url, inputObj)
//       .then((res) => {
//         if (res.status === 200) {
//           alert("User Created Successfully");
//         } else {
//           return Promise.reject();
//         }
//       })
//       .catch((err) => {
//         console.error(
//           "Error creating user:",
//           err.response ? err.response.data : err.message
//         );
//         alert(
//           `There was an error creating the user: ${
//             err.response ? err.response.data.message : err.message
//           }`
//         );
//       });
//   };

//   return (
//     <Layout>
//       <h1>SignUp page</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
        
//         <button class="continue-application" type="submit" value="Sign Up" >
//           <div>
//             <div class="pencil"></div>
//             <div class="folder">
//               <div class="top">
//                 <svg viewBox="0 0 24 27">
//                   <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
//                 </svg>
//               </div>
//               <div class="paper"></div>
//             </div>
//           </div>
//           SignUp
//         </button>
//       </form>
//     </Layout>
//   );
// }

// export default SignUp;
import React, { useState } from "react";
import Layout from "../components/Layout";
import "../styles/SignUp.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (event) => {
    event.preventDefault();

    const inputObj = { username, email, password };
    const url = "http://localhost:4005/users/createuser";

    axios
      .post(url, inputObj)
      .then((res) => {
        if (res.status === 200) {
          alert("User Created Successfully");
          navigate("/home"); // Redirect to the home page after successful signup
        } else {
          return Promise.reject();
        }
      })
      .catch((err) => {
        console.error(
          "Error creating user:",
          err.response ? err.response.data : err.message
        );
        alert(
          `There was an error creating the user: ${
            err.response ? err.response.data.message : err.message
          }`
        );
      });
  };

  return (
    <Layout>
      <h1>Sign Up page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button className="continue-application" type="submit">
          Sign Up
        </button>
      </form>
    </Layout>
  );
}

export default SignUp;
