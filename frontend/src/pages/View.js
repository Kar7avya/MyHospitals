// import React, { useEffect } from "react";
// import Layout from "../components/Layout";
// import axios from "axios";

// function View() {
//   const [users, setUsers] = React.useState([]);
//   useEffect(() => {
//     axios
//       .get("http://localhost:4005/users/getusers")
//       .then((res) => {
//         console.log(res.data);
//         setUsers(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);
//   const deleteData = (id) => {
//     axios
//       .delete("http://localhost:4005/users/deleteuser/" + id)
//       .then((res) => {
//         console.log(res.data);
//         if (res.status === 200) {
//           alert("user deleted successfully");
//           window.location.reload();
//         } else {
//           Promise.reject();
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
//   const display = (data) => {
//     return data.map((user) => {
//       return (
//         <tr>
//           <td>{user._id}</td>
//           <td>{user.username}</td>
//           <td>{user.email}</td>
//           <td>{user.password}</td>
//           <td>
//             <button
//               onClick={() => {
//                 deleteData(user._id);
//               }}
//             >
//               Delete
//             </button>
//             <button>Update</button>
//           </td>
//         </tr>
//       );
//     });
//   };
//   return (
//     <Layout>
//       <h1>View Page</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>_Id</th>
//             <th>Username</th>
//             <th>Email</th>
//             <th>Password</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>{display(users)}</tbody>
//       </table>
//     </Layout>
//   );
// }

 

//  import React from "react";
//  import Layout from "../components/Layout";

//  function View() {
//    return (
//      <Layout>
//        <h1>View</h1>
//      </Layout>
//    );
//  }
 // export default View;

// import React, { useEffect, useState } from "react";
// import Layout from "../components/Layout";
// import axios from "axios";

// function View() {
//   const [users, setUsers] = useState([]);
//   const [editUser, setEditUser] = useState(null);
//   const [formData, setFormData] = useState({ username: '', email: '', password: '' });

//   useEffect(() => {
//     axios
//       .get("http://localhost:4005/users/getusers")
//       .then((res) => {
//         console.log(res.data);
//         setUsers(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   const deleteData = (id) => {
//     axios
//       .delete("http://localhost:4005/users/deleteuser/" + id)
//       .then((res) => {
//         console.log(res.data);
//         if (res.status === 200) {
//           alert("User deleted successfully");
//           setUsers(users.filter(user => user._id !== id));  // Update the state to remove the deleted user
//         } else {
//           Promise.reject();
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const updateData = (id) => {
//     axios
//       .put("http://localhost:4005/users/updateuser/" + id, formData)
//       .then((res) => {
//         console.log(res.data);
//         if (res.status === 200) {
//           alert("User updated successfully");
//           setUsers(users.map(user => (user._id === id ? res.data : user)));  // Update the state with the updated user
//           setEditUser(null);  // Reset the edit form
//         } else {
//           Promise.reject();
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const handleEdit = (user) => {
//     setEditUser(user._id);
//     setFormData({ username: user.username, email: user.email, password: user.password });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const display = (data) => {
//     return data.map((user) => {
//       return (
//         <tr key={user._id}>
//           <td>{user._id}</td>
//           <td>{editUser === user._id ? (
//             <input
//               type="text"
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//             />
//           ) : (
//             user.username
//           )}</td>
//           <td>{editUser === user._id ? (
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//           ) : (
//             user.email
//           )}</td>
//           <td>{editUser === user._id ? (
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//             />
//           ) : (
//             user.password
//           )}</td>
//           <td>
//             <button onClick={() => deleteData(user._id)}>Delete</button>
//             {editUser === user._id ? (
//               <button onClick={() => updateData(user._id)}>Save</button>
//             ) : (
//               <button onClick={() => handleEdit(user)}>Update</button>
//             )}
//           </td>
//         </tr>
//       );
//     });
//   };

//   return (
//     <Layout>
//       <h1>View Page</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>_Id</th>
//             <th>Username</th>
//             <th>Email</th>
//             <th>Password</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>{display(users)}</tbody>
//       </table>
//     </Layout>
//   );
// }

//  export default View;


import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";

function View() {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  // Fetch users when component mounts
  useEffect(() => {
    axios
      .get("http://localhost:4005/users/getusers")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // Function to delete user
  const deleteData = (id) => {
    axios
      .delete(`http://localhost:4005/users/deleteuser/${id}`)
      .then((res) => {
        if (res.status === 200) {
          alert("User deleted successfully");
          setUsers(users.filter(user => user._id !== id));
        } else {
          alert("Failed to delete user");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // Function to update user
  const updateData = (id) => {
    axios
      .put(`http://localhost:4005/users/updateuser/${id}`, formData)
      .then((res) => {
        if (res.status === 200) {
          alert("User updated successfully");
          setUsers(users.map(user => (user._id === id ? res.data : user)));
          setEditUser(null);
        } else {
          alert("Failed to update user");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // Function to set user for editing
  const handleEdit = (user) => {
    setEditUser(user._id);
    setFormData({ username: user.username, email: user.email, password: user.password });
  };

  // Function to handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to display user data
  const display = (data) => {
    return data.map((user) => (
      <tr key={user._id}>
        <td>{user._id}</td>
        <td>{editUser === user._id ? (
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        ) : (
          user.username
        )}</td>
        <td>{editUser === user._id ? (
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        ) : (
          user.email
        )}</td>
        <td>{editUser === user._id ? (
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        ) : (
          user.password
        )}</td>
        <td>
          <button onClick={() => deleteData(user._id)}>Delete</button>
          {editUser === user._id ? (
            <button onClick={() => updateData(user._id)}>Save</button>
          ) : (
            <button onClick={() => handleEdit(user)}>Update</button>
          )}
        </td>
      </tr>
    ));
  };

  return (
    <Layout>
      <h1>View Page</h1>
      <table>
        <thead>
          <tr>
            <th>_Id</th>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{display(users)}</tbody>
      </table>
    </Layout>
  );
}

export default View;







// import axios from "axios";
// import React, { useEffect, useState } from "react";

// import { Link } from "react-router-dom";
// function View() {
//   const [users, setUsers] = useState([]);
//   useEffect(() => {
//     axios.get("http://localhost:4005/users/getAllusers").then((res) => {
//       //   console.log(res);
//       if (res.data.status === 200) {
//         setUsers(res.data.users);
//       }
//     });
//   }, []);
//   return (
//     <div>
//       <h1>User Names in Table</h1>
//       {console.log(users)}
//       <table>
//         <thead>
//           <tr>
//             <th>Obj ID</th>
//             <th>name</th>
//             <th>email</th>
//             <th>contact</th>
//             <th>Options</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => {
//             return (
//               <tr>
//                 <td>{user._id}</td>
//                 <td>{user.name}</td>
//                 <td>{user.email}</td>
//                 <td>{user.contact}</td>
//                 <td>
//                   <button
//                     onClick={() => {
//                       axios
//                         .delete(
//                           "http://localhost:400/users/deleteUser/" + user._id
//                         )
//                         .then((res) => {
//                           if (res.data.status === 200) {
//                             alert("user deleted successfully");
//                             window.location.reload();
//                           } else {
//                             Promise.reject();
//                           }
//                         })
//                         .catch((error) => {
//                           console.log(error);
//                         });
//                     }}
//                   >
//                     Delete
//                   </button>
//                   <Link to={`/update/${user._id}`}>
//                     <button>Edit</button>
//                   </Link>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default View;
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// function View() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:4005/users/getAllusers").then((res) => {
//       if (res.data.status === 200) {
//         setUsers(res.data.users);
//       }
//     }).catch((error) => {
//       console.error("There was an error fetching the users!", error);
//     });
//   }, []);

//   const handleDelete = (userId) => {
//     axios
//       .delete("http://localhost:4005/users/deleteUser/" + userId)
//       .then((res) => {
//         if (res.data.status === 200) {
//           alert("User deleted successfully");
//           setUsers(users.filter(user => user._id !== userId));
//         } else {
//           Promise.reject();
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div>
//       <h1>User Names in Table</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Obj ID</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Contact</th>
//             <th>Options</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user._id}>
//               <td>{user._id}</td>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>{user.contact}</td>
//               <td>
//                 <button onClick={() => handleDelete(user._id)}>Delete</button>
//                 <Link to={`/update/${user._id}`}>
//                   <button>Edit</button>
//                 </Link>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default View;
