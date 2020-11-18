import React from 'react'
import * as BooksAPI from './BooksAPI'
import {Route} from 'react-router-dom';
import SearchPage from './SearchPage/SearchPage';
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

  updateQuery = (query) => {
    if (query == '') return
    BooksAPI.search(query).then((res) => {
        this.setState({books:[res]});
    })
  }

  render() {
    return (
      <div className="app">
        
          <SearchButton/>
          <Route path="/" exact component= { () =>
            <BookList currentBooks = {this.state.books} updateSheief={this.updateSheief} />
          }/>
          <Route 
            path="/search"
            render={() =>
             <SearchPage currentBooks={this.state.books} updateSheief={this.updateSheief} updateQuery={this.updateQuery}/>
           }
          /> 
      </div>
    );
  }
}

export default BooksApp