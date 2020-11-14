import React from 'react'
import {Link} from 'react-router-dom';
import './SearchPage.scss';

function SearchPage() {
    return (
        <div>
            <div className="search-books">
                <div className="search-books-bar">
                <Link to="./"><button className="close-search">Close</button></Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author"/>
                </div>
                </div>
                <div className="search-books-results">
                <ol className="books-grid"></ol>
                </div>
            </div>
        </div>
    )
}

export default SearchPage

//onClick={() => this.setState({ showSearchPage: false })}