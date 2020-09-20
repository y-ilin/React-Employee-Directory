// import axios from "axios";
import EmployeeData from "../employeeData.json"

// Export an object containing methods we'll use for accessing the Wikipedia API

export default {
  filterByName: searchState => {
    const filteredEmployees = EmployeeData.filter(employee => {
        const name = employee.name.toLowerCase();
        return name.includes(searchState);
    });
    return filteredEmployees;
  },
  sortData: (data, category) => {
    return data.sort((a, b) => (a[category] > b[category]) ? 1 : -1);
  }
};