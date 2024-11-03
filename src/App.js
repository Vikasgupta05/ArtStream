import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route , Routes } from "react-router-dom" 
import SignInForm from './component/SignIn';
import SignUPForm from './component/SignUP';
import ProfilePic from './component/ProfilePic';
import Dashboard from './component/Dashboard';
// import Categories from './component/Categories';

function App() {
  return (
    <div className="App">
      <Dashboard/>
      
      {/* <Routes>
        <Route path="/" element={<Navigate to="/SignIn" replace/>} />
        <Route path="/SignUp" element={<SignUPForm />} />
        <Route path="/SignIn" element={<SignInForm />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
      </Routes> */}
    </div>
  );
}

export default App;