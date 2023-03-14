
import "./Title.css"

const Title = (props) => {
  return (
    <div className="title" style={{color:props.color,fontSize:props.size}}>{props.title}</div>
  )
}

export default Title