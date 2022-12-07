import React from "react";

export default function(props) {
  const {label, styleClass, onClick, disabled} = props;
  return (
    <button className={styleClass} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}

{/* <Button 
            label="button component"
            styleClass="btn type_03"
            onClick={()=> {
                alert("Clicked!!");
            }}
            disabled={false}/> */}