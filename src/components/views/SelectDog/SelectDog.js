import React from "react";
import SelectDogForm from "../../SelectDogForm/SelectDogForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import "./SelectDog.css";

const paw = <FontAwesomeIcon icon={faPaw} size="6x" />;

export default function SelectDog() {
  return (
    <div className="container-home">
      {paw}
      <h1>Choose your favourite Dog Breed!</h1>
      <SelectDogForm />
    </div>
  );
}
