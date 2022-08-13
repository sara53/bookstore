import React from "react";
import { Button, Form } from "react-bootstrap";

export default function AddNewBook() {
  return (
    <div className={`container mt-5 p-5 `}>
      <h2 className="text-center mb-4 ">Insert New Book</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter Book Title" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="Enter Book Price" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <textarea
            className="form-control"
            placeholder="Book Description"
          ></textarea>
        </Form.Group>

        <Button type="submit">Add New Book</Button>
      </Form>
    </div>
  );
}
