// src/BasicInfo.js
import React from "react";

function BasicInfo(props) {
  return (
    <div>
      <p>Name: {props.person.name}</p>
      <p>Occupation: {props.person.occupation}</p>
      <p>Address: {props.person.address}</p>
      <p>Height: {props.person.height}</p>
    </div>
  );
}

export default BasicInfo;
