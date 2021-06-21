import React from 'react';
import ClientForm from './ClientForm';

const AddClient = () => {
  const handleOnSubmit = (client) => {
    console.log(client);
  };

  return (
    <React.Fragment>
      <ClientForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddClient;