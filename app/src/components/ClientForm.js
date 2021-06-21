import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const ClientForm = (props) => {
  const [client, setClient] = useState({
    enrollment: props.client ? props.client.enrollment : '',
    clientname: props.client ? props.client.clientname : '',
    clientphone: props.client ? props.client.clientphone : ''
  });
  const [errorMsg, setErrorMsg] = useState('');
  const { enrollment, clientname, clientphone} = client;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [enrollment, clientname, clientphone];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const user = {
        id: uuidv4(),
        enrollment,
        clientname,
        clientphone
      };
      props.handleOnSubmit(user);
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
        setClient((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
      <Form.Group controlId="enrollment">
          <Form.Label>Matricula</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="enrollment"
            value={enrollment}
            placeholder="Digite a matricula"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="clientname">
          <Form.Label>Nome do cliente</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="clientname"
            value={clientname}
            placeholder="Digite o nome do cliente"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="clientphone">
          <Form.Label>Número de telefone</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="clientphone"
            value={clientphone}
            placeholder="Digite o telefone"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Cadastrar
        </Button>
      </Form>
    </div>
  );
};

export default ClientForm;