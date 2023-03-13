import "./MapLocation.css"

const MapLocation = (props) => {
  return (
    <div className="d-flex justify-content-center align-items-center my-4">
      <iframe
          title="This is a unique title"
          src={props.location}
          style={{
            borderRadius: "25px",
            width: "80%",
            height: "300px",
            border: "1px solid var(--color-primary)",
          }}
        ></iframe>
    </div>
  )
}

export default MapLocation