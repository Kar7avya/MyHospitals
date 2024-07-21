import logo from "./logo.svg";
import "./App.css";
 import Layout from "./components/Layout";
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import Home from "./pages/Home";
 import SignUp from "./pages/SignUp";
 import Login from "./pages/Login";
 import View from "./pages/View";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Layout from "./components/Layout";
function App() {
  return (
     <BrowserRouter>

       <Router>
        <Routes>
        <Route path="/" exact element={Login} />
        <Route path="/home" element={Home} />
         <Route path="/signup" element={SignUp} />
         
         <Route path="/view" element={View} />
         </Routes>
       </Router>
     </BrowserRouter>
  );
}

export default App;


// import logo from "./logo.svg";
// import "./App.css";
// import Layout from "./components/Layout";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import SignUp from "./pages/SignUp";
// import Login from "./pages/Login";
// import View from "./pages/View";
// import Header from "./components/Header";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <BrowserRouter>
//       <Header />
//       <Layout>
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/view" element={<View />} />
//         </Routes>
//       </Layout>
//       <Footer />
//     </BrowserRouter>
//   );
// }

// export default App;