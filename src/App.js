import React from 'react'
import * as BooksAPI from './BooksAPI'
import {Route} from 'react-router-dom';
import SearchPage from './SearchPage/SearchPage';
import './App.scss'

import BookList from './BookList/Booklist';
import SearchButton from './SearchButton/SearchButton';
import Book from './Book/Book';

class BooksApp extends React.Component {

  state = {
    books: [],
    allBooks: [],
    message:'',
    initialshelf:'none'
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
        this.fetchData();
      });
  };

  updateQuery = (query) => {
    if(query === '') return
    BooksAPI.search(query).then((res) => {
        console.log(res);
        if (res.error) {
          this.setState({allBooks:[]});
          console.log(res.error);
          this.setState({message:'Can not find your books'});
        } else {
          this.setState({message:''});
          this.setState({allBooks:res});
        }
    })
  }

  render() {
    return (
      <div className="app">
          <Route path="/" exact component= { () => {
            return <>
              <BookList currentBooks = {this.state.books} updateSheief={this.updateSheief} />
              <SearchButton/>
            </>
          }}
          />
          <Route 
            path="/search"
            render={() =>
             <SearchPage 
              currentBooks={this.state.books}
              allBooks={this.state.allBooks}
              updateSheief={this.updateSheief} 
              updateQuery={this.updateQuery}
              message={this.state.message}
              initialshelf={this.state.initialshelf}
             />
           }
          /> 
      </div>
    );
  }
}

export default BooksApp