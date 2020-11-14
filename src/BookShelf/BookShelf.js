import React from 'react'
import Book from '../Book/Book';
import './BookShelf.scss';

function Bookshelf(props) {

    const {currentBooks} = props;

    return (
        <>
            {console.log(currentBooks.title)}
            <div className="bookshelf">
                <h2 className="bookshelf-title">{currentBooks.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid" id="book-container">
                        <Book 
                            bookTitle = "To Kill a Mockingbird" 
                            bookAuthor = "Harper Lee"
                            category = "Curry Reading"
                            imageUrl = "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
                        />
                        <Book 
                            bookTitle = "To Kill a Mockingbird" 
                            bookAuthor = "Harper Lee"
                            category = "Curry Reading"
                            imageUrl = "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api"
                        /> 
                    </ol>
                </div>
            </div>
        </>
    )
}

export default Bookshelf
