import React from "react";
import '../../../App.css'
const SpecialButton = (props) => {
  return (
    <>
    <button class="specials OverallCont">{props.button}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default SpecialButton;