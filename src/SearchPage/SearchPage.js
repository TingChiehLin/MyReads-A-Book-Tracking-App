import React, { useState, useCallback } from 'react'
import { Link } from 'react-router-dom';
import Book from '../Book/Book';
import './SearchPage.scss';

const SearchPage = (props) => {
    const {currentBooks, updateSheief, updateQuery, message, initialshelf} = props;
    const [inputValue, updateInput] = useState('');

    const onUpdateShelf = useCallback((bookID, shelfValue) => {
        const book = currentBooks.filter(e => e.id === bookID)[0];
        updateSheief(book, shelfValue);
    });

    const book = currentBooks.length > 0 && currentBooks.map(book => {
        return  <Book
                    key = {book.id}
                    id = {book.id} 
                    title = {book.title}
                    author = {book.authors}
                    shelf ={initialshelf}
                    imageUrl = {book.imageLinks.thumbnail}
                    updateSheief = {onUpdateShelf}
        />
        // }
    });

    const handleChange = (e) => {
        const newInputValue = e.target.value;
        // updateInput((prevInputState) => {
        //    return prevInputState = newInputValue;
        // })
        updateInput(newInputValue);
        updateQuery(newInputValue);
    }

    return (
        <div>
            <div className="search-books">
                <div className="search-books-bar">
                <Link to="./"><button className="close-search">Close</button></Link>
                <div className="search-books-input-wrapper">
                    <input 
                    onChange = {handleChange}
                    value={inputValue}
                    type="text" 
                    placeholder="Search by title or author"/>
                </div>
                </div>
                <div>{message}</div>
                <div className="search-books-results">
                <ol className="books-grid">
                <div style={{fontSize:24}}>{message}</div>
                    {book}
                </ol>
                </div>
            </div>
        </div>
    )
}

export default SearchPage
