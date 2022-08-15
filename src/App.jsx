import "./App.css";
import AddNewBook from "./components/AddNewBook";
import BookContainer from "./components/BookContainer";
import { getBooks } from "./store/slices/bookSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);
  return (
    <>
      <AddNewBook />
      <BookContainer />
    </>
  );
}

export default App;
