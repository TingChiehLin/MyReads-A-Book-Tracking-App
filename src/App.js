import React from 'react'
import * as BooksAPI from './BooksAPI'

import {Link} from 'react-router-dom';
import './App.scss'

import BookList from './BookList/Booklist';
import SearchButton from './SearchButton/SearchButton';

class BooksApp extends React.Component {

  state = {
    category: 'Currently Reading',
    // showSearchPage: false
    books: []
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    BooksAPI.getAll()
      .then((data) => {
        this.setState(()=> {
          return data
        })
      })
  }

  render() {
    return (
      <div className="app">
        {/* {this.state.showSearchPage ? <Search/> : ( */}
          <BookList />
          <SearchButton />
        {/* )} */}
        {console.log(this.fetchData())}
      </div>
    )
  }
}

export default BooksApp

//<button onClick={() => this.setState({ showSearchPage: true })}><SearchIcon style={{color:'white'}}/></button>

/*

 <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                <ol className="books-grid" id="book-container">
                    <Book 
                      bookTitle = "To Kill a Mockingbird" 
                      bookAuthor = "Harper Lee"
                      category = {this.state.category}
                      imageUrl = "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
                    />

                    <Book 
                      bookTitle = "To Kill a Mockingbird" 
                      bookAuthor = "Harper Lee"
                      category = {this.state.category}
                      imageUrl = "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api"
                    />
                </ol>
                </div>
            </div>

*/