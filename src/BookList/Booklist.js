import React, {useCallback} from 'react'
import BookShelf from '../BookShelf/BookShelf';
import './BookList.scss';

function Booklist(props) {
    const {currentBooks, updateSheief} = props;
    const onUpdateShelf = useCallback((bookID, shelfValue) => {
        const book = currentBooks.filter(e => e.id === bookID)[0];
        updateSheief(book, shelfValue);
    });

    return (
        <>
          <div className="list-books">
            <div className="list-books-title">
              <h1>Jay Lin's Library</h1>
            </div>
            <div className="list-books-content">
                <BookShelf 
                    shelfTitle="Currently Reading"
                    books={currentBooks.filter((book) => book.shelf === "currentlyReading")}
                    updateSheief={onUpdateShelf}
                />
                <BookShelf 
                    shelfTitle="Want To Read"
                    books={currentBooks.filter((book) => book.shelf === "wantToRead")}
                    updateSheief={onUpdateShelf}
                />
                <BookShelf 
                    shelfTitle="Read"
                    books={currentBooks.filter((book) => book.shelf === "read")}
                    updateSheief={onUpdateShelf}
                />
            </div>
          </div>  
        </>
    )
}

export default Booklist
