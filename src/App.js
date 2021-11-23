
import './reset.css'
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';


const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/Login" element={<Login />}></Route>

            </Routes>    
        </>
    )
};

export default App