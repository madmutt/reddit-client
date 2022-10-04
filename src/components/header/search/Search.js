import React from 'react';
import { useDispatch } from 'react-redux';
import { updateSearchTerm } from "../../../store/searchSlice";

function Search(props) {
    const dispatch = useDispatch();

    const onSearchHandler = (e) => {
        e.preventDefault();
        dispatch(updateSearchTerm(e.target[0].value));
    };

    return (
        <form onSubmit={onSearchHandler} className="search-form"> {/* See react > adopt-a-pet > components - search */}
            <label htmlFor="search">Search:</label>
            <input type="text" id="search" className="search" />
            <button type="submit" className="search-button">🔎</button>
        </form>
        );
}

export default Search;
