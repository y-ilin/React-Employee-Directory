import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import EmployeeData from "./employeeData.json";
import PageHeader from "./components/pageHeader";
import EmployeeTable from "./components/employeeTable";
import SearchForm from "./components/searchForm";

function App() {
  const [filterState, setFilterState] = useState("");
  // const [sortState, setSortState] = useState("no sort");
  const [searchState, setSearchState] = useState("");

  const filterEmployees = () => {
    const filteredEmployees = EmployeeData.filter(employee => {
      const name = employee.name.toLowerCase();
      return name.includes(searchState);
    }); 
    setFilterState(filteredEmployees);
    console.log("filtered employees: ", filterState)
  }

  useEffect(() => {
    if (!searchState) {
      return;
    }
    // setFilterState(searchState);
    filterEmployees();
    console.log(searchState);
  }, [searchState])

  const handleInputChange = e => {
    setSearchState(e.target.value);
  }

  return (
    <>
      <PageHeader />
      <SearchForm
        handleInputChange={handleInputChange}
        // value={searchState}
      />
      <EmployeeTable 
        filter={filterState}
        // sort={sortState}
      />
    </>
  );
}

export default App;
