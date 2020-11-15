import React from 'react'
import Book from '../Book/Book';
import './BookShelf.scss';

function Bookshelf(props) {

    const {books, shelfTitle, onShelfChange} = props;
    const book = books.map((book) => (
        <Book
            key={book.id}
            title = {book.title}
            author = {book.authors}
            shelf ={book.shelf}
            imageUrl = {book.imageLinks.thumbnail}
            onShelfChange = {onShelfChange}
        />
    ));
    return (
        <>
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid" id="book-container">
                        {book}
                    </ol>
                </div>
            </div>
        </>
    )
}

export default Bookshelf
