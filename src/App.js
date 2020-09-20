import React, { useEffect, useState } from "react";
// import logo from './logo.svg';
import './App.css';
import EmployeeData from "./employeeData.json";
import PageHeader from "./components/pageHeader";
import EmployeeTable from "./components/employeeTable";
import SearchForm from "./components/searchForm";
import SortMenu from "./components/sortMenu";
import API from "./utils/API";

function App() {
  // to track what to sort by
  const [sortState, setSortState] = useState("");
  // to track what to filter by
  const [searchState, setSearchState] = useState("");
  // employeeList to be rendered
  const [employeeList, setEmployeeList] = useState(EmployeeData);

  // Sorting employees by category
  const sortEmployees = (employees, category) => {
    return API.sortData(employees, category.toLowerCase());
  };

  // Filtering employees
  const filterEmployees = (searchState, sortedList) => {
    return API.filterByName(searchState, sortedList);
  }

  // When the search form or sort changes, run this to compute new employee list
  useEffect(() => {
    // sort employees
    const sortedList = sortEmployees(EmployeeData, sortState) //EmployeeData, Location

    // filter employees to get a new array
    const filteredSortedList = filterEmployees(searchState, sortedList); //"sa", sorted list

    // Update employee list to render
    setEmployeeList(filteredSortedList);

  }, [sortState, searchState])

  // Handle choosing a sort option
  const handleSortBtn = e => {
    setSortState(e.target.innerHTML);
  }

  // Handle a change in the name search
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
        employees={employeeList}
      />
    </>
  );
}

export default App;
