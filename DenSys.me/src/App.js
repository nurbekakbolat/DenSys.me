import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Box from "@mui/material/Box";

import authContext from "./Contexts";

import Signup from "./components/pages/signup";
import Signin from "./components/pages/signin";
import Pricing from "./components/pages/Pricing";
import About from "./components/pages/About";
import Features from "./components/pages/Features";
import Home from "./components/pages/Home";

import Navbar from "./components/Navbar";
import UserList from "./components/pages/admin/UserList";
import AddPatient from "./components/pages/admin/AddPatient";
import EditPatient from "./components/pages/admin/EditPatient";
import AddDoctor from "./components/pages/admin/AddDoctor";
import EditDoctor from "./components/pages/admin/EditDoctor";

function App() {
    const [authenticated, setAuthenticated] = useState(false);

    return (
        <authContext.Provider value={{ authenticated, setAuthenticated }}>
            <Box>
                <Router className="App">
                    <Navbar />

                    <Routes>
                        <Route path="/" element={<Home />} />

                        <Route path="/about" element={<About />} />
                        <Route path="/features" element={<Features />} />
                        <Route path="/pricing" element={<Pricing />} />
                        <Route path="/signin" element={<Signin />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/admin" element={<UserList />} />
                        <Route path="/admin/patient/add" element={<AddPatient />} />
                        <Route path="/admin/patient/edit/:id" element={<EditPatient />} />
                        <Route path="/admin/doctor/add" element={<AddDoctor />} />
                        <Route path="/admin/doctor/edit/:id" element={<EditDoctor />} />
                    </Routes>
                </Router>
            </Box>
        </authContext.Provider>
    );
}

export default App;
