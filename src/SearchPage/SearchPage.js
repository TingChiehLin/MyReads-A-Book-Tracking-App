import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import * as BooksAPI from "../BooksAPI";
import Book from '../Book/Book';
import './SearchPage.scss';

const SearchPage = (props) => {
    const {currentBooks, updateSheief, updateQuery} = props;
    const [inputValue, updateInput] = useState('');

    const book = currentBooks.filter(book => {
        const hasTitle = book.title.toString().toLocaleLowerCase().includes(inputValue.toLocaleLowerCase());
        // const hascategory = book.categories[0].toString().toLocaleLowerCase().includes(inputValue.toLocaleLowerCase());
        // return hasTitle && hascategory
        return hasTitle
    }).map(book => 
        <Book
            key = {book.id}
            id = {book.id} 
            title = {book.title}
            author = {book.authors}
            shelf ={book.shelf}
            imageUrl = {book.imageLinks.thumbnail}
            updateSheief = {updateSheief}
        />
    );

    return (
        <div>
            <div className="search-books">
                <div className="search-books-bar">
                <Link to="./"><button className="close-search">Close</button></Link>
                <div className="search-books-input-wrapper">
                    <input 
                    onChange={(e) => {
                        const newInputValue = e.target.value;
                        updateInput((prevInputState) => {
                           return prevInputState = newInputValue;
                        })
                        updateQuery(newInputValue);
                    }
                    }
                    value={inputValue}
                    type="text" 
                    placeholder="Search by title or author"/>
                </div>
                </div>
                <div className="search-books-results">
                <ol className="books-grid">
                    {book}
                </ol>
                </div>
            </div>
        </div>
    )
}

export default SearchPage
