import React from "react";
import '../../../App.css'
const OperatorButton = (props) => {
  return (
    <>
    <button class="operators OverallCont">{props.button.value}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default OperatorButton;