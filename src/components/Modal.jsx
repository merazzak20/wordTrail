import React from "react";

const Modal = ({ selectedData }) => {
  if (!selectedData) {
    return null;
  }
  const { word, when_to_say, example } = selectedData;

  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box flex flex-col">
        <h3 className="font-bold text-4xl mb-3">{word}</h3>
        <small className="">
          When to say:{" "}
          <span className="text-base font-medium">{when_to_say}</span>
        </small>
        <br />
        <small className="">
          Example: <span className="text-base font-medium">{example}</span>
        </small>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
