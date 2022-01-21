import React, { useEffect, useRef } from "react";
import "./modal.css";
import { MdOutlineClose } from "react-icons/md";

const Modal = ({ isOpen, close, title, desc }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isOpen && modalRef.current && !modalRef.current.contains(e.target)) {
        return close();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen, close]);

  if (!isOpen) return null;
  return (
    <>
      <div className="backgroundBlur">
        <div className="modalContent" ref={modalRef}>
          <p>{title}</p>
          <p style={{ fontSize: "24px" }}>{desc}</p>
          <MdOutlineClose className="closeIcon" onClick={close} />
        </div>
      </div>
    </>
  );
};

export default Modal;
