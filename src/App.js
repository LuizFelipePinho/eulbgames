
import './reset.css'
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Userprofile from './Pages/userProfile/UserProfile';
import InfoGame from './Pages/InfoGame/InfoGame';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/Login" element={<Login />}></Route>
                <Route path="/register" element={ <Register />}></Route>
                <Route path="/userprofile" element={ <Userprofile /> }></Route>
                <Route path="/infogame" element={ <InfoGame />}></Route>

            </Routes>    
        </>
    )
};

export default App