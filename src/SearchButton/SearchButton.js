import React from 'react'
import {Link} from 'react-router-dom';
import './SearchButton.scss';
import SearchIcon from '@material-ui/icons/Search'; 

function SearchBar() {
    return (
        <>
          <div className="open-search">
              <Link to="/search"><button><SearchIcon style={{color:'white'}}/></button></Link>
          </div>
        </>
    )
}

export default SearchBar
