import React, { useState } from 'react'
import Search from '../css/GoogleSearch.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

const GoogleSearch = ({ hideButtons = false }) => {
    const [{}, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const history = useHistory();
  
    const search = (e) => {
      e.preventDefault();
  
      // Dispatch the search term to the Data Layer
      dispatch({
        type: actionTypes.SET_SEARCH_TERM,
        term: input,
      });
  
      // Push the search term to the URL
      history.push('/search');
    };
  
    return (
      <form className="search">
        <div className="search__input">
          <SearchIcon className="search__inputIcon" />
          <input value={input} onChange={(e) => setInput(e.target.value)} />
          <MicIcon />
        </div>
  
        {!hideButtons ? (
          <div className="search__buttons">
            <Button type="submit" onClick={search} variant="outlined">
              Google Search
            </Button>
            <Button variant="outlined">I'm Feeling Lucky</Button>
          </div>
        ) : (
          <div className="search__buttons">
            <Button
              className="search__buttonsHidden"
              type="submit"
              onClick={search}
              variant="outlined"
            >
              Google Search
            </Button>
            <Button className="search__buttonsHidden" variant="outlined">
              I'm Feeling Lucky
            </Button>
          </div>
        )}
      </form>
    );
}

export default GoogleSearch