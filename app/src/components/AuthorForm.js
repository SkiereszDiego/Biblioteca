import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const AuthorForm = (props) => {
  const [user, setAuthor] = useState({
    authorname: props.author ? props.author.authorname : '',
    birthcountry: props.author ? props.author.birthcountry : ''
  });
  const [errorMsg, setErrorMsg] = useState('');
  const { authorname, birthcountry} = user;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [authorname, birthcountry];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const author = {
        id: uuidv4(),
        authorname,
        birthcountry
      };
      props.handleOnSubmit(author);
    } else {
      errorMsg = 'Por favor preencha todos os campos.';
    }
    setErrorMsg(errorMsg);
  };

  //retirar o switch!
    const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      default:
        setAuthor((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
     
        <Form.Group controlId="authorname">
          <Form.Label>Nome do autor</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="authorname"
            value={authorname}
            placeholder="Digite o nome do autor"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="author">
          <Form.Label>País de origem</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="birthcountry"
            value={birthcountry}
            placeholder="Digite o país de origem"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Cadastrar Autor
        </Button>
      </Form>
    </div>
  );
};

export default AuthorForm;