import React from "react";
import {Link} from "react-router-dom";

const Button = ({className, name, link}) => {
  return (
    <Link to={link} className={"btn " + className}>{name}</Link>
  )
}

export default Button