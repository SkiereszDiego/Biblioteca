import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

// Defini os estados como objetos unsando useState hook para guardar os dados. se a prop nao for passada ela retorna uma string vazia
const BookForm = (props) => {
  const [book, setBook] = useState({
    isbn: props.book ? props.book.isbn : '',
    bookname: props.book ? props.book.bookname : '',
    author: props.book ? props.book.author : '',
    quantity: props.book ? props.book.quantity : '',
    publisher: props.book ? props.book.publisher : '',
    date: props.book ? props.book.date : ''
  });
// estado para mostrar mensagens de erro.
  const [errorMsg, setErrorMsg] = useState('');
  const { isbn, bookname, author, quantity, publisher} = book;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [bookname, author, quantity, publisher];
    let errorMsg = '';

    //verifica se todos os campos foram preenchidos. Se sim ele cria um objeto com todos valores
    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const book = {
        id: uuidv4(),
        isbn,
        bookname,
        author,
        quantity,
        publisher,
        date: new Date()
      };
      props.handleOnSubmit(book);
    } else {
      errorMsg = 'Por favor preencha todos os campos.';
    }
    setErrorMsg(errorMsg);
  };
// statement que muda o valor do state baseado em qual imput muda. Colocar em util
//quando e digitado em quantidade ele vai validar se e uma int sem o pto decimal. Se sim ele atualiza o estado
//para o preco ele valida se e um numero decimal com dois digitos dpois do pto.
//default ele atualiza o estado baseado no que o usuario colocar de valor
    const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'quantity':
        if (value === '' || parseInt(value) === +value) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      case 'price':
        if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      default:
        setBook((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="isbn">
            <Form.Label>ISBN do livro</Form.Label>
            <Form.Control
              className="input-control"
              type="text"
              name="isbn"
              value={isbn}
              placeholder="ISBN 000-00-00000-00-0"
              onChange={handleInputChange}
            />
        </Form.Group>
        <Form.Group controlId="name">
          <Form.Label>Nome do livro</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="bookname"
            value={bookname}
            placeholder="Digite o nome do livro"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="author">
          <Form.Label>Autor</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="author"
            value={author}
            placeholder="Digite o nome do autor"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="quantity">
          <Form.Label>Quantidade</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="quantity"
            value={quantity}
            placeholder="Digite a quantidade"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="publisher">
          <Form.Label>Editora</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="publisher"
            value={publisher}
            placeholder="Digite a editora do livro"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="publisher">
          <Form.Label>Ano Publicação</Form.Label>
          <Form.Control
            className="input-control"
            type="date"
            name="publisher"
            value={publisher}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default BookForm;