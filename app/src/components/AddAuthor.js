import React from 'react';
import AuthorForm from './AuthorForm';

const AddAuthor = () => {
  const handleOnSubmit = (author) => {
    console.log(author);
  };

  return (
    <React.Fragment>
      <AuthorForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddAuthor;