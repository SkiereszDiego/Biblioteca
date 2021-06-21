import { useHistory } from 'react-router-dom';
import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Book = ({
  id,
  isbn,
  bookname,
  author,
  quantity,
  publisher,
  date,
  handleRemoveBook
}) => {
  const history = useHistory();
  return (
    <Card style={{ width: '18rem' }} className="book">
      <Card.Body>
        <Card.Title className="book-title">{bookname}</Card.Title>
        <div className="book-details">
          <div>Autor: {author}</div>
          <div>Editora: {publisher} </div>
          <div>Quantitade: {quantity} </div>
          <div>ISBN: {isbn} </div>
          <div>Date: {new Date(date).toDateString()}</div>
        </div>
        <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
          Editar
        </Button>{' '}
        <Button variant="danger" onClick={() => handleRemoveBook(id)}>
          Deletar
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Book;