

import "./Social.css";

const Social = (props) => {
  return (
    <div className="social d-flex">
      {props.social.map(item=><div className="so">{item}</div>)}
    </div>
  );
};

export default Social;
