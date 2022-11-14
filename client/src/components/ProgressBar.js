import React from "react";

const ProgressBar = (props) => {
  const { bgcolor, completed } = props;
  let fillerVar = completed * .01

  const contStyle = {
    maxHeight: 24,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
  }

  const fillStyle = {
    height: 24,
    width: `${fillerVar}%`,
    minWidth: '1%',
    maxWidth: '100%',
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'center'
  }

  const labelStyle = {
    color: 'white',
    fontWeight: 'bold'
  }



  return (
    <div style={contStyle}>
      <div style={fillStyle} id="bar">
        <span style={labelStyle}>{`${completed} points`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
