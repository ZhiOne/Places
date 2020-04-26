import React from "react";
import ReactDOM from 'react-dom';

import './Backdrop.css';

const Backdrop = props => {

  return ReactDOM.createPortal(
    <div className="backdrop" onClick={props.onClick} />,
    // eslint-disable-next-line no-undef
    document.getElementById("backdrop-hook")
  );
};

export default Backdrop;
