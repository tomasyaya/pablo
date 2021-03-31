import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import "./Button.css";

const backIcon = <FontAwesomeIcon icon={faTimesCircle} size="4x" />;

export default function Button({ path }) {
  return (
    <Link to={`${path}`}>
      <button className="back-button">{backIcon}</button>
    </Link>
  );
}
