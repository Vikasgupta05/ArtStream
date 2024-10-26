import './App.css';
import {Route , Routes } from "react-router-dom" 
import SignInForm from './component/SignIn';
import SignUPForm from './component/SignUP';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/SignUp' element={<SignUPForm />} />
        <Route path='/SignIn' element={<SignInForm />} />
      </Routes>
    </div>
  );
}

export default App;
