import Title from "../../../components/title/Title"
import "./Branche.css"

const Branche = (props) => {
  return (
    <div className="brnche">
      <Title title={props.title} color={props.color} size={props.size}/>
      <p>{props.location}</p>
    </div>
  )
}

export default Branche