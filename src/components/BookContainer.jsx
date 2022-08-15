import React from "react";
import BookDetails from "./BookDetails";
import BookList from "./BookList";

export default function BookContainer() {
  return (
    <div className="container">
      <div className="row g-4">
        <BookList />
        <BookDetails />
      </div>
    </div>
  );
}
