import React, { Component, useState } from "react";
import Book from "./components/Book";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Search from "./components/Search";
import BookList from "./components/BookList";
import About from './pages/About';
import data from "./models/books.json";
import Pagination from 'react-js-pagination';



import "bootstrap/dist/css/bootstrap.min.css";
import { render } from "@testing-library/react";
 


const App = (props) => {
  const [books, setBooks] = useState(data);
  const [keyword, setKeyword] = useState("");
  const [pageCount] = useState (5);
  const [currentPage, setCurrentPage] = useState(1);

  //const [cart, setCart] = useState([]);

  //const addBook = (book) => {
   // console.log(book);
  //}
  


  async function findBooks(value) {
    const results = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-type=books&projection=lite`
    ).then(res => res.json());
    if (!results.error) {
      setBooks(results.items);
    }
  }

  function addBook(title) {
    console.log(`The Book ${title} was clicked`);
    const newBooks = books.filter((book) => {
      if (title !== book.volumeInfo.title) {
        return true;
      }
      return false;
    });
    setBooks(newBooks);
    //setSelectedBook(title);
  }

  if (books.length === 0) {
    return "No books found";
  }
 
  

  //return (
  //<div>
  //<BookList books={books} addBook={addBook} />
  //</div>
  //);
  //const indexOflastBook = currentPage*pageCount;
  //const indexoffirstbook = indexOflastBook-pageCount;
  //const currentbooks = books.slice(indexoffirstbook, indexoflastbook);
  const changepage = pagenumber => setCurrentPage(pagenumber);
  return (
    <BrowserRouter>
  
      <Route exact
        path="/"
        render={() => (
          <React.Fragment>
            <Header />
            <Search
              findBooks={findBooks}
              keyword={keyword}
              setKeyword={setKeyword}
            />
            <BookList books={books} addBook={addBook}  />
          <Pagination
              previousLabel={"prev"}
              nextLabel={"next"}
              breakLabel={"..."}
              marginPagesDisplay={2}
              pageRangeDisplay={5}
              onChange={changepage}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activePage={currentPage}
              totalItemsCount={books.length}
              itemsCountPerPage={pageCount}
              activeClassName={"active"}/>
              
          </React.Fragment>
        )}
      />
      <Route
        path="/bookcase"
        render={() => (
          <React.Fragment>
            <Header />
            BOOKCASE
            <BookList books={books} addBook={addBook}  />
          </React.Fragment>
        )}
      />
      <Route
        path="/About"
        render={() => (
          <React.Fragment>
            <About />
          </React.Fragment>
        )}
      />
    </BrowserRouter>
  );
};


export default App;
