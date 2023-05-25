import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import FormRegister from "./components/FormRegister";
import Home from "./components/Home";
import UserDetails from "./components/UserDetails";
function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/register' element={<FormRegister />} />
                <Route path='/details' element={<UserDetails />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
