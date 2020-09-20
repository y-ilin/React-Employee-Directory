// Export an object containing methods used for filtering and sorting

export default {
  filterByName: (searchState, sortedList) => {
    const filteredEmployees = sortedList.filter(employee => {
        const name = employee.name.toLowerCase();
        return name.includes(searchState);
    });
    return filteredEmployees;
  },
  sortData: (data, category) => {
    const newData = [...data];
    return newData.sort((a, b) => (a[category] > b[category]) ? 1 : -1);
  }
};