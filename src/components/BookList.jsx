import React from "react";
import BookItem from "./BookItem";
import styles from "../css/BookItem.module.css";
export default function BookList() {
  return (
    <div className="col-6">
      <h3 className="">Book List</h3>
      <div className={`overflow-auto ${styles.itemContainer}`}>
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
      </div>
    </div>
  );
}
