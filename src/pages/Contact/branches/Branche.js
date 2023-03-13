import Title from "../../../components/title/Title"
import "./Branche.css"

const Branche = (props) => {
  return (
    <div>
      <Title title={props.title}/>
      <p>{props.location}</p>
    </div>
  )
}

export default Branche