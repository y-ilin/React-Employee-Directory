import React, { useState } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import PageHeader from "./components/pageHeader";
import EmployeeTable from "./components/employeeTable";

function App() {
  const [filterState, setFilterState] = useState("no filter");
  const [sortState, setSortState] = useState("no sort");

  return (
    <>
      <PageHeader />
      <EmployeeTable 
        filter={filterState}
        sort={sortState}
      />
    </>
  );
}

export default App;
