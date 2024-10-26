import './App.css';
import ForgetPassword from './ForgetPassword';
import {Route , Routes } from "react-router-dom" 
import SignInForm from './component/SignIn';
import SignUPForm from './component/SignUP';

function App() {
  return (
    <div className="App">
      <ForgetPassword/>
      <Routes>
        <Route path='/SignUp' element={<SignUPForm />} />
        <Route path='/SignIn' element={<SignInForm />} />
        <Route path='/ForgetPassword' element={<ForgetPassword />} />
      </Routes>
    </div>
  );
}

export default App;