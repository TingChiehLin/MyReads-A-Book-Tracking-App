import React, { useState } from 'react';
import './Book.scss';

function Book(props) {
    
    // const [shelfState, setShelfState] = useState("currentlyReading");
    const {id, title, author, shelf, imageUrl, updateSheief} = props; 

    return (
        <>
            <li>
                <div className="book">
                    <div className="book-top">
                    <div className="book-cover" style={
                        { width: 128, height: 193, 
                          backgroundImage: `url(${imageUrl})`}
                        }></div>
                    <div className="book-shelf-changer">
                        <select 
                            onChange={(e)=>{ 
                                const selectedValue = e.target.value;
                                updateSheief(id, selectedValue);
                            }}
                            value={shelf}
                        >
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                    </div>
                    <div className="book-title">{title}</div>
                    <div className="book-authors">{author ? author.map((author) => author + ' ') : 'Anonymous'}</div>
                </div>
            </li>
        </>
    )
}

export default React.memo(Book)
