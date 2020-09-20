import React from "react";
// import "./style.css";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SortMenu(props) {
    return (
        <DropdownButton id="dropdown-basic-button" title="Sort by">
            <Dropdown.Item onClick={props.handleSortBtn}>Name</Dropdown.Item>
            <Dropdown.Item onClick={props.handleSortBtn}>Location</Dropdown.Item>
            <Dropdown.Item onClick={props.handleSortBtn}>Role</Dropdown.Item>
        </DropdownButton>
    );
}

export default SortMenu;
