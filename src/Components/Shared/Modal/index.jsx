import React from "react";
import Correct from "../../../assets/Images/correct.png";

const Modal = ({ popUp, setPopUp, title }) => {
  return (
    <>
      {popUp && (
        <div className="modalContainer z-50" onClick={() => setPopUp(!popUp)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal_header">
              <h2 className="modal_header-title"> {title} </h2>
              <img className="mx-auto pb-4" src={Correct} alt="" />
              <h4 className="text-center mt-4 text-4.5xl font-abhaya font-bold px-8 text-gray-500">
                Thank you. Your bidding is complete You check the bidding list
              </h4>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
