import './App.css';
import { Route, Routes, Navigate } from "react-router-dom"; 
import ForgetPassword from './component/ForgetPassword';
import SignInForm from './component/SignIn';
import SignUPForm from './component/SignUP';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/SignIn" replace/>} />
        <Route path="/SignUp" element={<SignUPForm />} />
        <Route path="/SignIn" element={<SignInForm />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
      </Routes>
    </div>
  );
}

export default App;