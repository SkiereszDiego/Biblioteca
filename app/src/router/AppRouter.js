import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import AddBook from '../components/AddBook';
import AddClient from '../components/AddClient';
import AddAuthor from '../components/AddAuthor';
import BooksList from '../components/BooksList';

const AppRouter = () => {
  // const [books, setBooks] = 
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Switch>
            <Route component={BooksList} path="/" exact={true} />
            <Route component={AddBook} path="/addbook" />
            <Route component={AddClient} path="/addclient" />
            <Route component={AddAuthor} path="/addauthor" />
            {/* <Route
              render={(props) => (
                <EditBook {...props} books={books} setBooks={setBooks} />
              )}
              path="/edit/:id"
            /> */}
            {/* redireciona o usuario para pagina principal */}
            {/* <Route component={() => <Redirect to="/" />} /> */}
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;