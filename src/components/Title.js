// src/components/Title.js
import React from "react";

export default function Title(props) {
  return (
    <div className="page-title mb-4">
      <h1>{props.content}</h1>
    </div>
  );
}
