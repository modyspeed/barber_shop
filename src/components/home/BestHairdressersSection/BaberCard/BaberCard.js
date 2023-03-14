import { Button } from "react-bootstrap"
import "./BaberCard.css"


const BaberCard = (props) => {
  
  
  
  return (
    <div className="BaberCard">
            <div className="BaberCard-img"><img src={props.image} alt={props.name}/></div>
            <div className="BaberCard-info d-flex align-items-baseLine justify-content-between p-3 ">
              <h6>{props.name}</h6>
              <div className="BaberCard-social d-flex align-items-center justify-content-between  gap-2  ">
            {props.social}
            
              {/* <Button  className="d-flex justify-content-center align-items-center rounded-circle socialContainer">2</Button> */}
              </div>
            </div>
          </div>
  )
}

export default BaberCard