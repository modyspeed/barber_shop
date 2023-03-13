import "./ContactCard.css";

const ContactCard = (props) => {
  return (
    <div className="contactCard">
      <div className="contactCard-info">
        <div className="contactCard-info-details">
          <div>{props.icon}</div>
          <h4>{props.title}</h4>
          <p>{props.time}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
