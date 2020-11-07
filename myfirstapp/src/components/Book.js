import React from "react";
import propTypes from "prop-types";

const Book = (props) => {
  const info = props.book.volumeInfo;
  const {
    volumeInfo: {
      title,
      authors,
      description,
      imageLinks: { thumbnail },
    },
  } = props.book;

  const renderAmount = () => {
    if (
      props.book.saleInfo &&
      props.book.saleInfo.listPrice &&
      props.book.saleInfo.listPrice.amount
    ) {
      const {
        saleInfo: {
          listPrice: { amount },
        },
      } = props.book;
      return "£" + amount;
    }
    return "No price available";
  };

  const renderAuthors = () => {
    if (authors.length === 1) {
      return authors;
    }
    return authors.map((author) => author + ", ");
  };
  return (
    <div>
      <img src={thumbnail} />
      <h2>
        {title} - {renderAuthors()}
      </h2>
      <p>{renderAmount()}</p>
      <p>{description}</p>
      <button onClick={() => props.addBook(title)}>Add +</button>
      <button onClick={() => props.addBook(title)}>Remove -</button>
    </div>
  );
};

Book.propTypes = {
  book: propTypes.shape({
    volumeInfo: propTypes.shape({
      title: propTypes.string.isRequired,
      authors: propTypes.array.isRequired,
      description: propTypes.string.isRequired,
      imageLinks: propTypes.shape({
        thumbnail: propTypes.string.isRequired,
      }),
    }),
    saleInfo: propTypes.shape({
      listPrice: propTypes.shape({
        amount: propTypes.number.isRequired,
      }).isRequired,
    }),
  }),
};

export default Book;
