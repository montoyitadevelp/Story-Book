import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const getStyles = (...args) => ["button", ...args].filter(Boolean).join(" "); //La primera clase que va retornar va ser un button , luego un sprade operator, todo aquello que sea undefined o false lo omite del arreglo

const Button = ({ children, type }) => {
  return <button className={getStyles(type)}>{children}</button>; //Ahora recibe la nueva prop type
};

Button.propTypes = {
  children: PropTypes.string.isRequired, //Manejando como label
  type: PropTypes.oneOf(["primary", "secodnary", "third"]), //PropTypes de selección unica
};

export default Button;
