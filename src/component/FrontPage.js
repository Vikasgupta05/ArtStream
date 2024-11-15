import { Button } from "react-bootstrap";
import pattern from "../assets/img/Pattern.png";
import { useNavigate,Link } from 'react-router-dom';
import '../assets/css/Frontpage.css';


export default function FrontPage() {

  const navigate = useNavigate();

    const handleContinue = () => {
        navigate('/SignIn');
    };

  return (
      <div className="mainDiv d-flex justify-content-center align-items-center ps-3 ps-md-4 ps-lg-4">
        <div className="leftDiv">
          <div className="topDiv">EXPLORE THE WORLD OF CREATIVITY</div>

          <div className="mt-4">
            <p className="para1">Welcome</p>
            <p className="para2">Witness the power of art</p>
          </div>

          <Link to="/Signin">
                    <Button className="contBtn mt-3" onClick={handleContinue}>Continue</Button>
                </Link>
        </div>

        <div className="rightDiv col-6">
          <img src={pattern} className="imageDimension img-fluid" alt="Pattern" />
        </div>
      </div>
  );
}
