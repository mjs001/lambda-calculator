import React, {useState} from "react";

const Display = (props) => {
  const [initVal] = useState(0)
  // eslint-disable-next-line
  return <div className="display OverallCont" >{props, initVal}</div>;
  
};

export default Display;