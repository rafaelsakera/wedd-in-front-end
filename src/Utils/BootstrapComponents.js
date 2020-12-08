import React from "react";
import { Spinner } from "react-bootstrap";
import { Trash, Brush } from "react-bootstrap-icons";

export const spinner = (showSpinner) => {
  if (showSpinner === true) {
    return <Spinner animation="border" variant="dark" />;
  }
};

export const trash = (onClickMethod, ...args) => {
  return (
    <Trash
      width="2em"
      height="2em"
      onClick={() => {
        onClickMethod(...args);
      }}
    />
  );
};

export const brush = (onClickMethod, ...args) => {
  return (
    <Brush
      width="2em"
      height="2em"
      onClick={() => {
        onClickMethod(...args);
      }}
    />
  );
};
