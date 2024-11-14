import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import SignInForm from "./component/SignIn";
import SignUPForm from "./component/SignUP";
import ForgetPassword from "./component/ForgetPassword";
import InputDetails from "./InputArtistDetails";
import VideoInput from "./VideoInput";
import ParentComponent from "./ParentComponent";
import BIO from "./ArtistBio";
import FrontPage from "./FrontPage";

function App() {
  return (
    <div className="App">
        <FrontPage/>
      </div>
  );
  {
    /* <Routes>
        <Route path="/" element={<Navigate to="/SignIn" replace/>} />
        <Route path="/SignUp" element={<SignUPForm />} />
        <Route path="/SignIn" element={<SignInForm />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
      </Routes> */

      // <div className="App">
      //   <ParentComponent />
      // </div>
  }
}

export default App;
