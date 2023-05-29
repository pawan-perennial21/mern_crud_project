import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import FormRegister from "./components/FormRegister";
import Home from "./components/Home";
import UserDetails from "./components/UserDetails";
import EditUser from "./components/EditUser";
function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/register' element={<FormRegister />} />
                <Route path='/details/:id' element={<UserDetails />} />
                <Route path='/edit/:id' element={<EditUser />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
