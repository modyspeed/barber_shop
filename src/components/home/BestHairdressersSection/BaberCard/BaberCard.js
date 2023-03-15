import "./BaberCard.css";

const BaberCard = (props) => {
  return (
    <div className="BaberCard">
      <div className="BaberCard-img">
        <img src={props.image} alt={props.name} />
      </div>
      {(props.name!==null)? <div className="BaberCard-info d-flex align-items-baseLine justify-content-between p-3 ">
        <h6>{props.name}</h6>
        <div className="BaberCard-social d-flex align-items-center justify-content-between  gap-2  ">
          {props.social}
        </div>
      </div>:null}
      
      
    </div>
  );
};

export default BaberCard;
