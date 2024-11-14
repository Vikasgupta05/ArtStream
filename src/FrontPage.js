import { Button } from "react-bootstrap";
import pattern from "./Pattern.png";
import "./Frontpage.css";

export default function FrontPage() {
  return (
    <div className="mainDiv d-flex align-items-center justify-content-center vh-100">
      
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center">
          
          {/* Left Column: Text Content */}
          <div className="col-12 col-md-6 text-center p-4 order-2 order-md-1">
            <div className="topDiv">EXPLORE THE WORLD OF CREATIVITY</div>

            <div className="mt-4">
              <p className="para1">Welcome</p>
              <p className="para2">Witness the power of art</p>
            </div>

            <Button className="contBtn mt-3">Continue</Button>
          </div>

          {/* Right Column: Image */}
          <div className="col-12 col-md-6 d-flex justify-content-center order-1 order-md-2 mb-4 mb-md-0">
            <img src={pattern} className="img-fluid imageDimension" alt="Pattern" />
          </div>
        </div>
      </div>
    </div>
  );
}
