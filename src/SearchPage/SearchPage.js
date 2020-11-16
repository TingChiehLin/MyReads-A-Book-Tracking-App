import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import * as BooksAPI from "../BooksAPI";
import Book from '../Book/Bookpwd';
import './SearchPage.scss';

const SearchPage = (props) => {
    const {currentBooks, updateSheief, updateQuery} = props;
    const [inputValue, setInput] = useState('');

    const book = currentBooks.filter(book => {
        const hasTitle = book.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase());
        const hascategory = book.category.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase());
        return hasTitle && hascategory
    }).map((book) => {
        <Book
            key = {book.id}
            id = {book.id} 
            title = {book.title}
            author = {book.authors}
            shelf ={book.shelf}
            imageUrl = {book.imageLinks.thumbnail}
            updateSheief = {updateSheief}
        />
    });

    return (
        <div>
            <div className="search-books">
                <div className="search-books-bar">
                <Link to="./"><button className="close-search">Close</button></Link>
                <div className="search-books-input-wrapper">
                    <input 
                    onChange={
                        updateQuery(setInput(inputValue))
                    }
                    value={inputValue}
                    type="text" 
                    placeholder="Search by title or author"/>
                </div>
                </div>
                <div className="search-books-results">
                <ol className="books-grid">
                    {
                      {book}
                    }
                </ol>
                </div>
            </div>
        </div>
    )
}

export default SearchPage
