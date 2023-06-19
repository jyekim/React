import React, { useState } from "react";
import Modal from "react-modal";

const ModalPage = (props) => {
  const [modal, setModal] = useState(true); //모달창

  const modalOff = () => {
    setModal(false);
  };
  return (
    <>
      <Modal
        isOpen={modal}
        ariaHideApp={false}
        onRequestClose={modalOff}
        style={{
          position: "fixed",
          padding: "0px",
          boxSizing: "border-box",
          margin: "32px",
          backgroundColor: "rgb(255, 255, 255)",
          color: "rgba(0, 0, 0, 0.87)",
          position: "relative",
          overflowY: "auto",
          borderRadius: "12px",
          display: "flex",
          flexDirection: "column",
          width: "800px",
          maxWidth: "none",
          maxHeight: "740px",
          boxShadow: "none",
        }}
      ></Modal>
    </>
  );
};

export default ModalPage;
