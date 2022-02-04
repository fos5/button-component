import React from "react";

const Labels = ({ label, labelValue }) => {
  return <label className={`btn-label ${label}`}>{labelValue}</label>;
};

export default Labels;
