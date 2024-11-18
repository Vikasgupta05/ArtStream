import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import SignInForm from "./component/SignIn";
import SignUPForm from "./component/SignUP";
import ForgetPassword from "./component/ForgetPassword";
import FrontPage from './component/FrontPage';
import InputDetails from "./InputArtistDetails";
import VideoInput from "./VideoInput";
//import { BrowserRouter } from "react-router-dom";
import ParentComponent from "./ParentComponent";
import BIO from "./ArtistBio";
import MainProfile from "./MainProfile"



function App() {
  return (
    <div>
      <ParentComponent />
    </div>
    
  );
}

export default App;

{/* <Routes>
         <Route path="/" element={<FrontPage />} />
         <Route path="/SignUp" element={<SignUPForm />} />
         <Route path="/SignIn" element={<SignInForm />} />
         <Route path="/ForgetPassword" element={<ForgetPassword />} />
       </Routes> */}



