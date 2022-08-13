import "./App.css";
import AddNewBook from "./components/AddNewBook";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";

function App() {
  return (
    <>
      <AddNewBook />
      <div className="container">
        <div className="row g-4">
          <BookList />
          <BookDetails />
        </div>
      </div>
    </>
  );
}

export default App;
