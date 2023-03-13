import "./ServiceCard.css";

const ServiceCard = (props) => {
  return (
    <div className="card ">
      <img src={props.image} alt={props.name} />
      <dive className="d-flex justify-content-between align-items-center  cardInfo" >
        <h2>{props.name}</h2>
        <span>${props.price}</span>
      </dive>
    </div>
  );
};

export default ServiceCard;
