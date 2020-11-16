import React from 'react'
import * as BooksAPI from './BooksAPI'
import {Route} from 'react-router-dom';
import SearchPage from './SearchPage/SearchPage';
import {Link} from 'react-router-dom';
import './App.scss'

import BookList from './BookList/Booklist';
import SearchButton from './SearchButton/SearchButton';

class BooksApp extends React.Component {

  state = {
    books: []
  }


  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    BooksAPI.getAll()
      .then((data) => {
        console.log('date', data);
        this.setState(()=> {
          return {books:data}
        });
      });
  };

  updateSheief = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then((res) => {
        console.log('book', book, 'shelf', shelf);
        this.fetchData();
      });
  };

  render() {
    return (
      <div className="app">
          <BookList currentBooks = {this.state.books} updateSheief={this.updateSheief} />
          <SearchButton/>
          <Route 
            path="/search"
            render={() => {
              <SearchPage currentBooks={this.state.books} updateSheief={this.updateSheief}/>
            }}
          />
      </div>
    );
  }
}

export default BooksApp