import { Button } from "react-bootstrap";
import pattern from "./Pattern.png";
import "./Frontpage.css";

export default function FrontPage() {
  return (
      <div className="mainDiv d-flex justify-content-center align-items-center ps-3 ps-md-4 ps-lg-4">
        <div className="leftDiv">
          <div className="topDiv">EXPLORE THE WORLD OF CREATIVITY</div>

          <div className="mt-4">
            <p className="para1">Welcome</p>
            <p className="para2">Witness the power of art</p>
          </div>

          <Button className="contBtn mt-3">Continue</Button>
        </div>

        <div className="rightDiv col-6">
          <img src={pattern} className="imageDimension img-fluid" alt="Pattern" />
        </div>
      </div>
  );
}
