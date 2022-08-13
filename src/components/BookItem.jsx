import React from "react";

export default function BookItem() {
  return (
    <div className="border border-secondary d-flex p-3 my-3 rounded">
      <span style={{ flexGrow: 6 }}>Book Title</span>
      <div className="d-flex flex-grow-1 justify-content-evenly">
        <button className="btn btn-outline-primary">Read</button>
        <button className="btn btn-outline-danger">Remove</button>
      </div>
    </div>
  );
}
