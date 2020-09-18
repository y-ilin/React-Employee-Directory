import React from "react";
// import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
    return (
        <form>
            <input
                value={props.search}
                onChange={props.handleInputChange}
                name="searchInput"
                type="text"
                placeholder="Search by name"
                id="searchInput"
            />
        </form>
    );
}

export default SearchForm;
