import React, { useState } from "react";

function Accordition({question}) {
  const [accorditionClicked, setAccorditionCliked] = useState(false);
  const updateAccorditionClicked = () =>
    setAccorditionCliked(!accorditionClicked);

  const accorditionStyle = {
    height: accorditionClicked ? "12rem" : 0,
    transition: "400ms",
    overflow: "hidden"
  };

  const brickStyle = {
    transform: accorditionClicked ? "rotate(25deg)" : "rotate(-25deg)"
  }

  return (
    <div className="Accordition" onClick={updateAccorditionClicked}>
      <div className="top-part">
        <div className="brick" style={brickStyle}></div>
        {
          accorditionClicked 
            ? <i class="fas fa-minus-circle"></i> 
            : <i className="fas fa-plus-circle"></i>
        }
        <p>{question}</p>
      </div>
      <div className="bottom-part" style={accorditionStyle}>
        <p>
        craft beer labore wes anderson cred 
        nesciunt sapiente ea proident. 
        Ad vegan excepteur butcher vice lomo.
         Leggings occaecat craft beer 
         farm-to-table, raw denim aesthetic 
         synth nesciunt you probably haven't 
         heard of them accusamus labore sustainable VHS.
        </p>
      </div>
    </div>
  );
}
export default Accordition;
