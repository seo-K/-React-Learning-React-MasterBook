import React from "react";
import { useNavigate } from "react-router-dom";

const NavigateButton = ({ buttonTitle, route, isReplaced }) => {
  const navigate = useNavigate();
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        navigate(route, { replace: isReplaced });
      }}
    >
      {buttonTitle}
    </button>
  );
};
export default NavigateButton;
