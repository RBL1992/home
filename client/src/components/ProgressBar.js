import React from "react";

const ProgressBar = (props) => {
  const { bgcolor, completed } = props;
  

  const containerStyles = {
    height: 20,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
  }

  const fillerStyles = {
    width: `${completed}points`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'center'
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed} points`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;