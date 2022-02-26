import React from "react";
import Button from "./Button";
import classes from "./ErrorModal.module.css";
import Card from "./Card";
import ReactDOM from "react-dom";

const ErrorModal = (props) => {
  const OverlayModal = (props) => {
    return (
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.msg}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>OK</Button>
        </footer>
      </Card>
    );
  };
  const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onConfirm}></div>;
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <OverlayModal
          onConfirm={props.onConfirm}
          title={props.title}
          msg={props.msg}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
