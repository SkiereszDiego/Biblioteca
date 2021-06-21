import React from 'react';
import _ from 'lodash';
import Book from './Book';

const BooksList = ({ books, setBooks }) => {

  //colocar na pasta handler
  const handleRemoveBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  //loop nos livros com o map e passando uma prop p/ seu conteudo
  return (
    <>
      <div className="book-list">
        {!_.isEmpty(books) ? (
          books.map((book) => (
            <Book key={book.id} {...book} handleRemoveBook={handleRemoveBook} />
          ))
        ) : (
          <p className="message">Nenhum livro disponivel!</p>
        )}
      </div>
    </>
  );
};

export default BooksList;