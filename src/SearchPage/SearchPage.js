import React, { useState, useCallback } from 'react'
import { Link } from 'react-router-dom';
import Book from '../Book/Book';
import './SearchPage.scss';

const SearchPage = (props) => {
    const {currentBooks, updateSheief, updateQuery} = props;
    const [inputValue, updateInput] = useState('');

    const onUpdateShelf = useCallback((bookID, shelfValue) => {
        const book = currentBooks.filter(e => e.id === bookID)[0];
        updateSheief(book, shelfValue);
    });


    const book = currentBooks.filter(book => {
        if (!book.title || book.title === ' ') return false;
        const hasTitle = book.title.toString().toLocaleLowerCase().includes(inputValue.toLocaleLowerCase());
        //const hascategory = book.categories[0].toString().toLocaleLowerCase().includes(inputValue.toLocaleLowerCase());
        //return hasTitle && hascategory
        return hasTitle
    }).map(book => {
        return <Book
            key = {book.id}
            id = {book.id} 
            title = {book.title}
            author = {book.authors}
            shelf ={book.shelf}
            imageUrl = {book.imageLinks.thumbnail}
            updateSheief = {onUpdateShelf}
        />
    });

    return (
        <div>
            <div className="search-books">
                <div className="search-books-bar">
                <Link to="./"><button className="close-search">Close</button></Link>
                <div className="search-books-input-wrapper">
                    <input 
                    onChange={(e) => {
                        const newInputValue = e.target.value;
                        // updateInput((prevInputState) => {
                        //    return prevInputState = newInputValue;
                        // })
                        updateInput(newInputValue);
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
