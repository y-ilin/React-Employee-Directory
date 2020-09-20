import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import EmployeeData from "./employeeData.json";
import PageHeader from "./components/pageHeader";
import EmployeeTable from "./components/employeeTable";
import SearchForm from "./components/searchForm";
import SortMenu from "./components/sortMenu";
import API from "./utils/API";

// const sortData = (data, category) => {
//   return data.sort((a, b) => (a[category] > b[category]) ? 1 : -1);
// }

function App() {
  const [filterState, setFilterState] = useState(EmployeeData);
  const [searchState, setSearchState] = useState("");

  // Sorting employees by category ///////////////////////
  const sortEmployees = (filterState, category) => {
    const sortedArray = API.sortData(filterState, category.toLowerCase());
    setFilterState(sortedArray);
    console.log("filter state is: ", filterState)
  };

  const handleSortBtn = e => {
    sortEmployees(filterState, e.target.innerHTML);
  }

  // for debugging /////////////////////////////////////
  useEffect(() => {
    console.log("filterState changed!!")
  }, [filterState])

  // Searching by name /////////////////////////////////
  // Filtering employees
  const filterEmployees = searchState => {
    setFilterState(API.filterByName(searchState));
  }

  // When the search form value changes, run filterEmployees() with the new value
  useEffect(() => {
    // if (!searchState) {
    //   return;
    // }
    filterEmployees(searchState);
  }, [searchState])

  const handleInputChange = e => {
    setSearchState(e.target.value);
  }

  return (
    <>
      <PageHeader />
      <SearchForm
        handleInputChange={handleInputChange}
        value={searchState}
      />
      <SortMenu 
        handleSortBtn={handleSortBtn}
      />
      <EmployeeTable 
        employees={filterState}
      />
    </>
  );
}

export default App;
